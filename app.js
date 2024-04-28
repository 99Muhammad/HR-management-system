
'use strict';
 let arrEmployeeObjs = [];
 let arrEmpl=[];
 let sectionEl = document.getElementById("showEmployeeInfo");
let btnSubmit=document.getElementById('submit');
let imgDiv=document.getElementById("imgDiv");
let formEl=document.getElementById("formID");

function EmployeeInfo( id,fullName, department, level, imageURL,salary) {
   
    this.id=id;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.imageURL = imageURL;
    this.salary=salary;
 
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
        return this.salary;
                
        }

 
 function addOldEmployeeToLocalStorage()
        {
          let person = new  EmployeeInfo(10,'Ghazi Samer', 'Administration', 'Senior', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIf4R5qPKHPNMyAqV-FjS_OTBB8pfUV29Phg&usqp=CAU',600);
          let person2 = new EmployeeInfo(20,'Lana Ali', 'Finance', 'Senior', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZlAcC_1n7gulS21qRrKRo-FYLW4xLt9y2eA&usqp=CAU',588);
          let person3 = new EmployeeInfo(30,'Tamara Ayoub', 'Marketing', 'Senior', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIf4R5qPKHPNMyAqV-FjS_OTBB8pfUV29Phg&usqp=CAU',800);
          let person4 = new EmployeeInfo(40,'Safi Walid', 'Administration', 'Mid-Senior', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIf4R5qPKHPNMyAqV-FjS_OTBB8pfUV29Phg&usqp=CAU',300);
          let person5 = new EmployeeInfo(50,'Omar Zaid', 'Development', 'Senior', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIf4R5qPKHPNMyAqV-FjS_OTBB8pfUV29Phg&usqp=CAU',200);
          let person6 = new EmployeeInfo(60,'Rana Saleh', 'Development', 'Junior', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZlAcC_1n7gulS21qRrKRo-FYLW4xLt9y2eA&usqp=CAU',400);
          let person7 = new EmployeeInfo(70,'Hadi Ahmad', 'Finance', 'Mid-Senior', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIf4R5qPKHPNMyAqV-FjS_OTBB8pfUV29Phg&usqp=CAU',500);
          saveEmplInfoInLocalStorga(arrEmployeeObjs);
          
        }




 function createID()
{
return getRandomNumber(1000,9999);
}


EmployeeInfo.prototype.render = function()
{
    let divEl = document.createElement("div");
    divEl.classList.add('card');
 
  let imag=document.createElement("img");
  imag.src= this.imageURL;
  imag.alt="picture of an employee";
 
   divEl.appendChild(imag);

  let fullName=document.createElement('h4');
  fullName.textContent=`Name: ${this.fullName}- ID: ${this.id}`;
 
 divEl.appendChild(fullName);


  let department=document.createElement('h4');
  department.textContent=`Departmenrt:${this.department} - Level: ${this.level}`;

divEl.appendChild(department);


 
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
  let ID=createID();
  
  

  let newEmployee=new EmployeeInfo(ID,fullName,department,level,imageURL,0);
  newEmployee.calculateSalary();
    newEmployee.render();

    saveEmplInfoInLocalStorga(arrEmployeeObjs);
  }


  
  function saveEmplInfoInLocalStorga(arrEmplInfo)
{
  let strEmplInfo=JSON.stringify(arrEmplInfo);
  localStorage.setItem("EmplInfo",strEmplInfo);
}

function getEmplInfoFromLocalStorga()
{
  let getEmplInfo = localStorage.getItem("EmplInfo");
  
   arrEmpl= JSON.parse(getEmplInfo);
    console.log(arrEmpl)
  
  if (arrEmpl != null) 
  {
    
    for (let i = 0; i < arrEmpl.length; i++) 
    {

      new EmployeeInfo(arrEmpl[i].id,arrEmpl[i].fullName, arrEmpl[i].department,
      arrEmpl[i].level, arrEmpl[i].imageURL, arrEmpl[i].salary);

    }
  }else
  {
    addOldEmployeeToLocalStorage();
  }
  

  printAllEmployeesInfo();
}

function printAllEmployeesInfo()
{
  for (let i = 0; i < arrEmployeeObjs.length; i++) 
  {
    arrEmployeeObjs[i].render();
  }
}

getEmplInfoFromLocalStorga();

console.log(arrEmployeeObjs);


