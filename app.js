// function User(name, age, company,salary){
//     this.name=name;
//     this.age=age;
//     this.company=company;
//     this.salary=salary;
// }
// let user1=new User("manu",20,"qspidrers",3000);
// console.log(user1);
 
// var lan=["java","python"]
// lan.pop();
// console.log(lan);
// var lan1=["java","python"]
//  lan1.splice(1,1,"js");
//  console.log(lan1);
// var v=["phython","java","c","js"]
// v.splice(1,0,"react");
// console.log(v);
// var v1=["phython","java","c","js"]
// v.forEach(function(value,index,array){
// console.log(`${index}:${value}`)
// });

var employee=[
    {
    emp_id:"cap101",
    emp_name:"manu",
    emp_photo:"https://pixabay.com/photos/man-white-shirt-male-person-young-1342457/",
    emp_age:20,
    emp_gender:"male",
    emp_company:"capgemini",
    emp_sal:300000,
    emp_designation:"web developer",
    emp_doj:new Date('2015/05/05'),
    emp_location:"mandya",
    emp_education:"BE"


},{
    emp_id:"cap101",
    emp_name:"anu",
    emp_photo:"https://pixabay.com/photos/woman-grown-up-within-people-3083386/",
    emp_age:21,
    emp_gender:"female",
    emp_company:"capgemini",
    emp_sal:300000,
    emp_designation:"web developer",
    emp_doj:new Date('2015/05/05'),
    emp_location:"Mysuru",
    emp_education:"BE"
},{
    emp_id:"cap101",
    emp_name:"thanu",
    emp_photo:"https://pixabay.com/vectors/avatar-people-person-business-user-3637561/",
    emp_age:22,
    emp_gender:"male",
    emp_company:"LTI",
    emp_sal:300000,
    emp_designation:"web developer",
    emp_doj:new Date('2016/05/05'),
    emp_location:"Madikeri",
    emp_education:"BE"
},{
    emp_id:"cap101",
    emp_name:"Rama",
    emp_photo:"https://pixabay.com/vectors/woman-women-business-woman-female-1353825/",
    emp_age:22,
    emp_gender:"female",
    emp_company:"Narture",
    emp_sal:300000,
    emp_designation:"web developer",
    emp_doj:new Date('2015/05/05'),
    emp_location:"mangaluru",
    emp_education:"BE"
},{
    emp_id:"cap101",
    emp_name:"thyag",
    emp_photo:"https://cdn.pixabay.com/photo/2019/11/18/10/49/office-4634538__340.jpg",
    emp_age:20,
    emp_gender:"male",
    emp_company:"facebook",
    emp_sal:300000,
    emp_designation:"web developer",
    emp_doj:new Date('2015/05/05'),
    emp_location:"Puttur",
    emp_education:"BE"
}];
var emp=[];
    
employee.forEach(empData =>{
    emp.push(`
    <div class="card" >
  <img src="${empData.emp_photo}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${empData.emp_name}</h5>
    <span class="badge badge-success float-right">${empData.emp_id}></span>
    <span class="badge badge-success float-right">${empData.emp_designation}></span>
    <li class="list-group-item">salary:${empData.emp_sal}</li>
    <li class="list-group-item"> Location:${empData.emp_location}</li>
    <li class="list-group-item">education:${empData.emp_education}</li>
    <li class="list-group-item">Age:${empData.emp_age}</li>
    <li class="list-group-item">company:${empData.emp_gender}</li>
    <li class="list-group-item">Gender:${empData.emp_gender}</li>
    <li class="list-group-item">Date of joining:${empData.emp_doj.toString()}</li>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    `);

});
document.getElementById('template').innnerHTML=emp;

var names =["manu","anu","shashi","varun"];
var num=[10,50,30,60,1,30,54];
var st="abcfsghhakjk";

var test=names.sort();
var n=num.sort(function(a,b){ //interview
    return b-a;
});
var stringrev=[...st].reverse().join("");
console.log(stringrev);
function username(str){
    return[...st].reverse().join("");
}
console.log(username("jspiders"));
console.log(n);
console.log(test);
