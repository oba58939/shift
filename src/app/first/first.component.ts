import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})　
export class FirstComponent implements OnInit{
  stores = ['店舗A','店舗B','店舗C'];
  staffShift: StaffShift = {
    store: '',
    name: '',
    weeklyShifts:[]
  };
  employees = ['田中太郎','鈴木花子','佐藤恒之']
}
