import { Component } from '@angular/core';
import { ShiftService, StaffShift } from '../shift.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrl: './first.component.css',
  imports: [ CommonModule,
              FormsModule
            ]
})
export class FirstComponent {
  stores = ['店舗A', '店舗B', '店舗C'];
  employees = ['田中太郎', '鈴木花子', '佐藤恒之'];
  selectedStore: string = '';
  selectedEmployee: string = '';
  selectedRole: string = '';
  selectedDate: string = '';
  selectedShifts: number[] = [];

  constructor(private shiftService: ShiftService) {}

  // シフト情報を送信するメソッド
  submitShift() {
    const newShift: StaffShift = {
      store: this.selectedStore,
      staffName: this.selectedEmployee,
      role: this.selectedRole,
      date: this.selectedDate,
      shifts: this.selectedShifts,
    };

    // サービスを使ってシフトデータを更新
    this.shiftService.updateShiftData([newShift]);
  }
}
