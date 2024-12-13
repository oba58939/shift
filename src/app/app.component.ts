import { Component } from '@angular/core';
import { ShiftService } from './shift.service';
import { RouterLink,RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';


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
  shiftData: any[] = [];

  constructor(private shiftService: ShiftService) {
    // シフトデータを取得する
    this.shiftService.shiftData$.subscribe(data => {
      this.shiftData = data;
    });
  }

  // シフトデータを配列に変換
  getShiftsAsArray(shifts: Record<number, string>): [number, string][] {
    return Object.entries(shifts).map(([key, value]) => [parseInt(key, 10), value]);
  }
}
