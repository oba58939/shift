import { Component } from '@angular/core';
import { ShiftService, StaffShift } from '../shift.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { getFirestore, doc, getDoc } from "firebase/firestore";

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
  employees = [];
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
  
  const db = getFirestore();
  const ref = doc(db, 'employee/employee1/name');
  
  async function readData() {
    try {
      const snapshot = await getDoc(ref);
      if (snapshot.exists()) {
        console.log(snapshot.data());
      } else {
        console.log('No such document!');
      }
    } catch (error) {
      console.log('Error getting document:', error);
    }
  }
  
  readData();
  
}
