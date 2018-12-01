import { Component, OnInit } from "@angular/core";
import { Employee } from "./data/employee";
import { EmployeeService } from "./data/employee.service";
import { Router } from "@angular/router";
import { OnDestroy } from "@angular/core/src/metadata/lifecycle_hooks";
declare var $: any;

@Component({
  selector: "app-employees",
  templateUrl: "./employees.component.html",
  styleUrls: ["./employees.component.css"]
})
export class EmployeesComponent implements OnInit, OnDestroy {
  employees: Employee[];
  getEmployeeSub: any;
  loadingError: boolean;
  filteredEmployees: Employee[];

  constructor(private eService: EmployeeService, private router: Router) {
    this.employees = [];
    this.getEmployeeSub = "";
    this.loadingError = false;
    this.filteredEmployees = [];
  }

  // ngOnInit() {
  //   this.getEmployeeSub = this.eService.getEmployees().subscribe(
  //     employees => {
  //       this.employees = employees;
  //       this.filteredEmployees = employees;
  //     },
  //     () => {
  //       this.loadingError = true;
  //     }
  //   );
  // }

  // ngOnInit() {
  //   this.getEmployeeSub = this.eService.getEmployees().subscribe((employees) => {
  //     this.employees = employees;
  //     this.filteredEmployees = employees;

  //   }, error => {
  //     this.loadingError = true;
  //   });

  // }
  ngOnInit() {
    this.getEmployeeSub = this.eService.getEmployees().subscribe(data => {
      this.employees = data;
      this.filteredEmployees = data;
    },
      () => {
        this.loadingError = true;
      });
  }

  routeEmployee(id: string) {
    this.router.navigate(["/employee", id]);
  }

  onEmployeeSearchKeyUp(event: any) {
    let substring: string = event.target.value.toLowerCase();
    this.filteredEmployees = this.employees.filter((e) => ((e.FirstName.toLowerCase().indexOf(substring) !== -1) || (e.LastName.toLowerCase().indexOf(substring) !== -1)))
  }

  ngOnDestroy() {
    this.getEmployeeSub.unsubscribe();
  }
}
