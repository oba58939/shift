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

  availableShifts: number[] = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

  selectedShift: number | null = null; // 選択されたシフトの時間

  // ラジオボタンが選択されたときに呼び出される
  selectShift(shift: number): void {
    this.selectedShift = shift;
    console.log('選択された時間:', this.selectedShift);
  }

  private db = getFirestore(initializeApp(firebaseConfig));

  
  constructor(private shiftService: ShiftService) {
    this.fetchEmployees();
    this.fetchStores();

  }

  stores: { id: string, name: string }[] = [];
  employees: { id: string, name: string }[] = [];
  selectedStore: string = '';
  selectedEmployee: string = '';
  selectedRole: string = '';
  selectedDate: string = '';
  startTime: number = ''; 
      endTime: this.selestedend,


  // シフト情報を送信するメソッド
  submitShift() {
    const newShift: StaffShift = {
      store: this.selectedStore,
      staffName: this.selectedEmployee,
      role: this.selectedRole,
      date: this.selectedDate,
      startTime: this.selectedstart, 
      endTime: this.selestedend,
    };

    // サービスを使ってシフトデータを更新
    this.shiftService.updateShiftData([newShift]);
  }
  
  async fetchEmployees(): Promise<void> {
    const employeesCol = collection(this.db, 'employee');
    const employeeSnapshot = await getDocs(employeesCol);

    this.employees = employeeSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data()
    })) as { id: string; name: string }[];
    console.log(this.employees);
  }

  async fetchStores(): Promise<void> {
    const storeCol = collection(this.db, 'store');
    const storeSnapshot = await getDocs(storeCol);

    this.stores = storeSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data()
    })) as { id: string; name: string }[];
    console.log(this.stores);
  }


  initializeFirebase(): void {
    initializeApp(firebaseConfig);
  }

  
}
