import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrl: './first.component.css'
})　

export class FirstComponent {
  stores = ['店舗A', '店舗B', '店舗C'];

  // StaffShift型の初期値を設定
  staffShift: StaffShift = {
    store: '',
    staffName: '',
    role: '',
    date: '', // 空の文字列を初期値に設定
    shifts: [] // 空の配列を初期値に設定
  };

  employees = ['田中太郎', '鈴木花子', '佐藤恒之'];
}

// StaffShiftインターフェースの定義
export interface StaffShift {
  store: string; // 店舗名
  staffName: string; // 店員の名前
  role: string; // 担当業務
  date: string; // シフト希望の日付 (YYYY-MM-DD形式)
  shifts: number[]; // シフトに入る時間帯の配列 (例: [9, 10, 12])
}
