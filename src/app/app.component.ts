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
getShiftsAsArray(arg0: Record<number,string>): any {
throw new Error('Method not implemented.');
}
  // シフトデータ
  shiftData: { date: string; shifts: Record<number, string> }[] = [
    {
      date: '2024-12-12',
      shifts: { 9: '田中 (レジ)', 10: '山田 (品出し)', 12: '鈴木 (レジ)', 14: '高橋 (品出し)', 17: '田中 (接客)', 18: '山田 (品出し)' }
    },
    {
      date: '2024-12-13',
      shifts: { 9: '鈴木 (レジ)', 10: '田中 (品出し)', 12: '高橋 (レジ)', 17: '山田 (接客)', 18: '鈴木 (品出し)' }
    }
  ];
}