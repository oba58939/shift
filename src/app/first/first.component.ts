import { Component } from '@angular/core';
import { ShiftService, StaffShift } from '../shift.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { getFirestore, collection, doc, getDoc, QuerySnapshot } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getDocs } from "firebase/firestore";
import { firebaseConfig } from '../../environments/environment';


@Component({
  selector: 'app-first',
  standalone: true,
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
  imports: [ CommonModule,FormsModule]})

export class FirstComponent {
  private db = getFirestore(initializeApp(firebaseConfig));

  employees: { id: string, name: string }[] = [];

  constructor(private shiftService: ShiftService) {
    this.fetchEmployees();
  }
  
  stores = ['店舗A', '店舗B', '店舗C'];
  selectedStore: string = '';
  selectedEmployee: string = '';
  selectedRole: string = '';
  selectedDate: string = '';
  selectedShifts: number[] = [];


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
  
  newTaskName: string = '';
  async fetchEmployees(): Promise<void> {
    const employeesCol = collection(this.db, 'employee');
    const employeeSnapshot = await getDocs(employeesCol);

    this.employees = employeeSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data()
    })) as { id: string; name: string }[];
    console.log(this.employees);
  }


  initializeFirebase(): void {
    initializeApp(firebaseConfig);
  }
  
}
