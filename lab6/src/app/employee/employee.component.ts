import { Component, OnInit } from '@angular/core';
import { EmployeeRaw } from '../data/employeeRaw';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  private paramSubScription: any;
  private employeeSubscription: any;
  private getPositionsSubcription: any;
  private getPositionsSub: any;
  private saveEmployeeSubscription: any;
  private employee: EmployeeRaw; // instruction wants me to fix it to non-private but it works. so i will keep it private anyways
  private positions: Position[];
  private successMessage = false;
  private failMessage = false;

  constructor() { }

  ngOnInit() {
  }

}
