'use strict'

let allDepartments=[];
let arrOfLsInfo=[];

function DepartmentsInfo(name,salary)
{
    this.name=name;
    this.totalSalary=salary;
    this.numOfEmployees=1;
    this.avgSalary=salary;

    allDepartments.push(this);

}

DepartmentsInfo.prototype.addEmployee=function()
{
    this.numOfEmployees++;

}

DepartmentsInfo.prototype.calculateTotalSalary=function(salary)
{
      this.totalSalary+=salary;
}

DepartmentsInfo.prototype.calculateAvgSalary=function()
{
    this.avgSalary = Math.round(this.totalSalary / this.numOfEmployees);
}

function proccessingDepartments()
{
    for (let i = 0; i < arrOfLsInfo.length; i++) {

        const departmentName = arrOfLsInfo[i].department;
        const existingDepartment = allDepartments.find(dep => dep.name === departmentName);
      
        if (!existingDepartment) {
          new DepartmentsInfo(departmentName,arrOfLsInfo[i].salary);

         
        } else {
          existingDepartment.addEmployee();
          existingDepartment.calculateTotalSalary(arrOfLsInfo[i].salary);
          existingDepartment.calculateAvgSalary();
        }
      }
}

function getEmplInfoFromLocalStorga()
{
  let getEmplInfo = localStorage.getItem("EmplInfo");
  
   arrOfLsInfo= JSON.parse(getEmplInfo);


  if (arrOfLsInfo != null)
   {
      proccessingDepartments();
   }
  }
  

function fillTableWithDepartments()
{
    let table = document.createElement("table");

    let thead = document.createElement("thead");
    
    thead.innerHTML =
        `
        <tr>
            <th>Department Name</th>
            <th>Number Of Employees</th>
            <th>Average Salary</th>
            <th>Total Salary</th>
        </tr>
    `;
    table.appendChild(thead);
    
    let tbody = document.createElement("tbody");
    
    let departmentsSalaries = 0;
    let departmentsAverageSalaries = 0;
    
    allDepartments.forEach(department => {
        tbody.innerHTML +=
            `
        <tr>
            <td>${department.name}</td>
            <td>${department.numOfEmployees}</td>
            <td>${department.avgSalary}</td>
            <td>${department.totalSalary}</td>
        </tr>
    `;
        departmentsSalaries += department.totalSalary;
        departmentsAverageSalaries+= department.avgSalary;
    });
    table.appendChild(tbody);
    
    let tfoot = document.createElement("tfoot");
    tfoot.innerHTML = 
    `
        <tr>
            <th>Total:</th>
            <th>${arrOfLsInfo.length}</th>
            <th>${departmentsAverageSalaries}</th>
            <th>${departmentsSalaries}</th>
        </tr>
    `;
    
    table.appendChild(tfoot);
    
    document.getElementsByTagName("main")[0].appendChild(table);
    
}

getEmplInfoFromLocalStorga();
fillTableWithDepartments();

console.log(allDepartments);
 