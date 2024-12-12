import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { StaffShift } from './models/staff-shift.model';

@Injectable({
  providedIn: 'root'
})
export class ShiftService {
  private shiftsSubject = new BehaviorSubject<StaffShift[]>([]);
  shifts$ = this.shiftsSubject.asObservable();

  addShift(staffShift: StaffShift) {
    const currentShifts = this.shiftsSubject.getValue();
    this.shiftsSubject.next([...currentShifts, staffShift]);
  }

  getShifts() {
    return this.shiftsSubject.getValue();
  }
}
