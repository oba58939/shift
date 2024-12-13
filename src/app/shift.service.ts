import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

// StaffShiftの型を定義
export interface StaffShift {
  store: string; // 店舗名
  staffName: string; // 店員の名前
  role: string; // 担当業務
  date: string; // シフト希望の日付 (YYYY-MM-DD形式)
  shifts: number[]; // シフトに入る時間帯の配列 (例: [9, 10, 12])
}

@Injectable({
  providedIn: 'root',
})
export class ShiftService {
  // シフトデータのBehaviorSubjectを作成
  private shiftDataSubject = new BehaviorSubject<StaffShift[]>([]);
  shiftData$ = this.shiftDataSubject.asObservable();

  // シフトデータを更新するメソッド
  updateShiftData(shiftData: StaffShift[]) {
    this.shiftDataSubject.next(shiftData);
  }
}
