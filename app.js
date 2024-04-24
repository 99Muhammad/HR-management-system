

'use strict';
let arrEmployeeObjs = []

function EmployeeInfo( fullName, department, level, imageURL) {
   
    this.employeeID=createID();
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.imageURL = imageURL;
    this.salary = 0;
    alculateSalary
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

EmployeeInfo.prototype.c = function () {
    
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

 
let person = new  EmployeeInfo('Ghazi Samer', 'Administration', 'Senior', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIf4R5qPKHPNMyAqV-FjS_OTBB8pfUV29Phg&usqp=CAU');
let person2 = new EmployeeInfo('Lana Ali', 'Finance', 'Senior', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZlAcC_1n7gulS21qRrKRo-FYLW4xLt9y2eA&usqp=CAU');
let person3 = new EmployeeInfo('Tamara Ayoub', 'Marketing', 'Senior', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIf4R5qPKHPNMyAqV-FjS_OTBB8pfUV29Phg&usqp=CAU');
let person4 = new EmployeeInfo('Safi Walid', 'Administration', 'Mid-Senior', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIf4R5qPKHPNMyAqV-FjS_OTBB8pfUV29Phg&usqp=CAU');
let person5 = new EmployeeInfo('Omar Zaid', 'Development', 'Senior', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIf4R5qPKHPNMyAqV-FjS_OTBB8pfUV29Phg&usqp=CAU');
let person6 = new EmployeeInfo('Rana Saleh', 'Development', 'Junior', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZlAcC_1n7gulS21qRrKRo-FYLW4xLt9y2eA&usqp=CAU');
let person7 = new EmployeeInfo('Hadi Ahmad', 'Finance', 'Mid-Senior', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIf4R5qPKHPNMyAqV-FjS_OTBB8pfUV29Phg&usqp=CAU');



 function createID()
{
return getRandomNumber(1000,9999);
}

let sectionEl = document.getElementById("showEmployeeInfo");

let btnSubmit=document.getElementById('submit');
let imgDiv=document.getElementById("imgDiv");
let formEl=document.getElementById("formID");
// console.log(btnSubmit);



EmployeeInfo.prototype.render = function()
{
    let divEl = document.createElement("div");
    divEl.classList.add('card');
 
  let imag=document.createElement("img");
  imag.src= this.imageURL;
  imag.alt="picture of an employee";
 
   divEl.appendChild(imag);

  let fullName=document.createElement('h4');
  fullName.textContent=`Name: ${this.fullName}- ID: ${this.employeeID}`;
 
 divEl.appendChild(fullName);


  let department=document.createElement('h4');
  department.textContent=`Departmenrt:${this.department} - Level: ${this.level}`;

divEl.appendChild(department);


  this.calculateSalary();
  let salary=document.createElement('h4');
  salary.textContent=`Salary:${this.salary}`;
  divEl.appendChild(salary);

    sectionEl.appendChild(divEl);
    sectionEl.classList.add("showEmployeeInfo");
  
}


formEl.addEventListener("submit",handleSubmit);

function handleSubmit(event)
{
  event.preventDefault();
  
  let fullName=event.target.fullName.value;
  let imageURL=event.target.imageURL.value;
  let department=event.target.department.value;
  let level=event.target.level.value;

  let newEmployee=new EmployeeInfo(fullName,department,level,imageURL);

    newEmployee.render();
   
  }

  arrEmployeeObjs.forEach((emp)=>
  {
    emp.render();
  });
   
 

