class Employee {
    empId: any;
    empName: string;
    empSalary: number;
    constructor(empId: number, empName: string, empSal: number) {
        this.empId = empId;
        this.empName = empName;
        this.empSalary = empSal;
    }
}
export default Employee;
