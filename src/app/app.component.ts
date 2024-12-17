import { Component } from '@angular/core';
import { ShiftService } from './shift.service';
import { RouterLink,RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

interface StaffShift {
  store: string; // 店舗名
  staffName: string; // 店員の名前
  role: string; // 担当業務
  date: string; // シフト希望の日付 (YYYY-MM-DD形式)
  startTime: number;     // シフト開始時間 (例: 9)
  endTime: number;       // シフト終了時間 (例: 12)
}

@Component({
  selector: 'app-root',
  imports :[
    CommonModule,
    RouterLink,
    RouterOutlet,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] ,
  standalone: true // これでスタンドアロンコンポーネントとして宣言
})

export class AppComponent {
  shiftData: StaffShift[] = [];
  timeSlots: number[] = []; // 1時間ごとの時間帯リスト
  startHour = 9;  // 表示する時間帯の開始時間
  endHour = 20;   // 表示する時間帯の終了時間

  constructor(private shiftService: ShiftService) {
    // シフトデータを取得する
    this.shiftService.shiftData$.subscribe(data => {
      this.shiftData = data;
      this.generateTimeSlots();
    });
  }

  generateTimeSlots(): void {
    this.timeSlots = Array.from(
      { length: this.endHour - this.startHour + 1 },
      (_, i) => this.startHour + i
    );
  }

  getShiftAt(date: string, hour: number): StaffShift | undefined {
    return this.shiftData.find(shift => 
      shift.date === date && shift.startTime <= hour && shift.endTime > hour
    );
  }

  get uniqueDates(): string[] {
    const dates = this.shiftData.map(shift => shift.date);
    return Array.from(new Set(dates));
  }

  getShiftsByDate(): Record<string, StaffShift[]> {
    return this.shiftData.reduce((acc: Record<string, StaffShift[]>, shift) => {
      acc[shift.date] = acc[shift.date] || [];
      acc[shift.date].push(shift);
      return acc;
    }, {});

  }

}
