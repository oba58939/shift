import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  shiftData = [
    {
      date: '2024-12-12',
      shifts: { 9: '田中 (レジ)', 10: '山田 (品出し)', 12: '鈴木 (レジ)', 14: '高橋 (品出し)', 17: '田中 (接客)', 18: '山田 (品出し)' }
    },
    {
      date: '2024-12-13',
      shifts: { 9: '鈴木 (レジ)', 10: '田中 (品出し)', 12: '高橋 (レジ)', 17: '山田 (接客)', 18: '鈴木 (品出し)' }
    }
  ];

  /**
   * 指定された日付と時間帯に対応するシフト情報を取得
   * @param date - 日付
   * @param hour - 時間帯
   * @returns シフト情報（該当なしの場合は空文字）
   */
  getShift(date: string, hour: any): string {
    const day = this.shiftData.find(d => d.date === date);
    return day?.shifts[hour] || '';
  }
}