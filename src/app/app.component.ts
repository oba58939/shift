import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // シフトデータ
  shiftData: { date: string; shifts: Record<number, string> }[] = [];

  constructor() {
    this.initializeShiftData();
  }

  // 一週間分の日付を生成し、シフトデータを初期化
  initializeShiftData(): void {
    const today = new Date();
    for (let i = 0; i < 7; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);

      const formattedDate = date.toISOString().slice(0, 10); // YYYY-MM-DD形式

      // シフトデータの例
      const shifts: Record<number, string> = {
        9: this.getRandomShift(),
        10: this.getRandomShift(),
        12: this.getRandomShift(),
        14: this.getRandomShift(),
        17: this.getRandomShift(),
        18: this.getRandomShift(),
      };

      this.shiftData.push({
        date: formattedDate,
        shifts,
      });
    }
  }

  // ランダムなシフトデータを生成する（例として利用）
  getRandomShift(): string {
    const employees = ['田中', '山田', '鈴木', '高橋'];
    const roles = ['レジ', '品出し', '接客'];
    const employee = employees[Math.floor(Math.random() * employees.length)];
    const role = roles[Math.floor(Math.random() * roles.length)];
    return `${employee} (${role})`;
  }

  // シフトデータの変換（テンプレート用）
  getShiftsAsArray(shifts: Record<number, string>): [number, string][] {
    return Object.entries(shifts).map(([key, value]) => [parseInt(key, 10), value]);
  }
}


