'use strict';
let arrEmployeeObjs = []

function EmployeeInfo(employeeID, fullName, department, level, imageURL) {
    this.employeeID=employeeID;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.imageURL = imageURL;
    this.salary = 0;
    
    arrEmployeeObjs.push(this);
}

function getRandomNumber(min, max) {
   
    return Math.floor(Math.random()*(max-min+1)+min);
}

EmployeeInfo.prototype.calculateNetSalary=function(randomSalary)
{
    let netSalary= randomSalary*(1-0.075) ;
    return Math.ceil(netSalary);
}

EmployeeInfo.prototype.calculateSalary = function () {
    
    let randomSalary;
    if(this.level==="Senior")
    {
        
        randomSalary=getRandomNumber(1500,2000);
        this.salary=  this.calculateNetSalary(randomSalary);

    }else if(this.level==="Mid-Senior")
    {
        randomSalary=getRandomNumber(1000,1500);
        this.salary=  this.calculateNetSalary(randomSalary);
    }
    else{
        randomSalary=getRandomNumber(500,1000);
        this.salary=  this.calculateNetSalary(randomSalary);
    }
    
            
    }

let person = new  EmployeeInfo(1000, 'Ghazi Samer', 'Administration', 'Senior', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIf4R5qPKHPNMyAqV-FjS_OTBB8pfUV29Phg&usqp=CAU');
let person2 = new EmployeeInfo(1001, 'Lana Ali', 'Finance', 'Senior', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZlAcC_1n7gulS21qRrKRo-FYLW4xLt9y2eA&usqp=CAU');
let person3 = new EmployeeInfo(1002, 'Tamara Ayoub', 'Marketing', 'Senior', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIf4R5qPKHPNMyAqV-FjS_OTBB8pfUV29Phg&usqp=CAU');
let person4 = new EmployeeInfo(1003, 'Safi Walid', 'Administration', 'Mid-Senior', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIf4R5qPKHPNMyAqV-FjS_OTBB8pfUV29Phg&usqp=CAU');
let person5 = new EmployeeInfo(1004, 'Omar Zaid', 'Development', 'Senior', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIf4R5qPKHPNMyAqV-FjS_OTBB8pfUV29Phg&usqp=CAU');
let person6 = new EmployeeInfo(1005, 'Rana Saleh', 'Development', 'Junior', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZlAcC_1n7gulS21qRrKRo-FYLW4xLt9y2eA&usqp=CAU');
let person7 = new EmployeeInfo(1006, 'Hadi Ahmad', 'Finance', 'Mid-Senior', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIf4R5qPKHPNMyAqV-FjS_OTBB8pfUV29Phg&usqp=CAU');


EmployeeInfo.prototype.render = function(){

    document.write(`<h2>The employee id is [ ${this.employeeID} ], the name is <span style="color:blue
    ;font-family:Courier New">${this.fullName}</span> and 
     the salary is <span style="color:brown;font-family:Courier New
     ">${this.salary}</span></h2>`);
}




 function renderAllEmployees()
 {
    for (let employee of arrEmployeeObjs) {
        employee.calculateSalary();
       employee.render();
     }
 }
 renderAllEmployees();
 
 console.log(arrEmployeeObjs);
