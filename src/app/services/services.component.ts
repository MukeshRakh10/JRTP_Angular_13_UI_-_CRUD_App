import { Component, Inject } from '@angular/core';
import { CommonService } from '../common.service';
import Employee from '../employee';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {

  title = 'ng-app';
  name: string = "Mukesh";
  selCountry: string = "India";
  isEmployee: boolean = true;
  gender: string = "Male";
  marks: number = 70;
  styleColor: string = "";
  myClass: string = "";
  empId: number = 0;
  empName: string = "";
  empSalary: number = 0;
  serviceName : string = "";
  empname : string = "";

  employees: Employee[] = [
    new Employee(101, "Mukesh Rakh", 100000),
    new Employee(102, "Kamlesh", 20000),
    new Employee(103, "Rajesh", 30000)
  ]
  newEmployee = new Employee(0,"",0);
  constructor(@Inject(CommonService)
              private loginService : CommonService) {

      this.serviceName = this.loginService.login();

    if (this.marks >= 35) {
      this.styleColor = "green";
      this.myClass = "class1";
    } else {
      this.styleColor = "red";
      this.myClass = "class2";
    }

    const lastOne = [...this.employees].pop()?.empId;
    this.newEmployee.empId = parseInt(lastOne) + 1 ;

  } // end constructor

  insertRecord = ()  => {

    this.employees.push(new Employee(this.newEmployee.empId, this.newEmployee.empName, this.newEmployee.empSalary));
    this.newEmployee.empId = this.newEmployee.empSalary = 0;this.newEmployee.empName = "";
    const lastOne = [...this.employees].pop()?.empId;
    this.newEmployee.empId = parseInt(lastOne) + 1 ;
    }
  deleteRecord = (empId : number) => {
    if(confirm("Are u sure to remove the record ?")){
      this.employees.splice(empId,1)
    }
  }

  save = () =>{
    alert(this.empname);
  }


}
