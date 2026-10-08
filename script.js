let numbers1=[10,20,30,40,50];
numbers1.forEach(function(num){
    console.log(num);
});
let students2=["Harni","Hepzi","Butter","Prisha"];
students2.forEach(function(name){
    console.log("Hello,"+name);
});
let numbers3=[1,2,3,4,5];
let result3=numbers3.map(function(num){
    return num*2;
});
console.log(result3);
let prices4=[100,200,300,400];
let result4=prices4.map(function(price){
    return price+100;
});
console.log(result4);
let numbers5=[1,2,3,4,5,6];
let evenNumbers5=numbers5.filter(function(num){
    return num%2==0;
});
console.log(evenNumbers5);
let ages6=[15,18,20,16,25];
let adults6=ages6.filter(function(age){
    return age>=18;
});
console.log(adults6);
let numbers7=[20,40,55,70,90];
let result7=numbers7.find(function(num){
    return num>50;
});
console.log(result7);
let students8=[
    {name:"Harni",mark:75},
    {name:"Hepzi",mark:85},
    {name:"Prisha",mark:90}
];
let result8=students8.find(function(student){
    return student.mark>80;
});
console.log(result8);
let numbers9=[10,20,30,40];
let total9=numbers9.reduce(function(sum,num){
    return sum+num;
},0);
console.log(total9);
let prices10=[100,200,300,400];
let total10=prices10.reduce(function(sum,price){
    return sum+price;
},0);
console.log(total10);
let numbers11=[20,40,80,120,50];
let result11=numbers11.some(function(num){
        return num>100;
});
console.log(result11);
let marks12=[45,50,60,70,80];
let result12=marks12.every(function(mark){
    return mark>35;
});
console.log(result12);
let numbers13=[50,20,40,10,30];
numbers13.sort(function(a,b){
    return a-b;
});
console.log("13:",numbers13);
let numbers14=[50,20,40,10,30];
numbers14.sort(function(a,b){
    return b-a;
});
console.log("14:",numbers14);
let students15=["Harni","Hepzi","Prisha","Butter"];
let result15=students15.toString();
console.log("15:",result15);
let names16=["Harni","Hepzi","Prisha","Butter"];
let result16=names16.join("-");
console.log("16:",result16);
let products17=["Laptop","Mobile","Headphone","Keyboard"];
let result17=products17.join(",");
console.log("17:",result17);
let text18="JavaScript";
console.log("18:",text18.charAt(4));
let text19="JavaScript";
console.log("19:",text19.charCodeAt(0));
let text20="Hello JavaScript";
console.log("20:",text20.length);
let text21="JavaScript Developer";
console.log("21:",text18.slice(0,10));
let text22="hello javascript";
console.log("22:",text22.toUpperCase());
let text23="HELLO JAVASCRIPT";
console.log("23:",text23.toLowerCase());
let text24=" Hello JvaScript ";
console.log("24:",text24.trim());
let text25="JavaScript is easy to learn";
console.log("25 includes:",
    text25.includes("easy"));
    console.log("25 indexOf:",
        text25.indexOf("JavaScript"));
        console.log("25 starts With:",
            text25.startsWith("JavaScript"));
            console.log("25 endsWith:",
                text25.endsWith("learn"));
let d26=new Date();
console.log("Year:",d26.getFullYear());
console.log("Month:",d26.getMonth()+1);
console.log("Date:",d26.getDate());
console.log("Day:",d26.getDay());
let d27=new Date();
console.log("Hours:",d27.getHours());
console.log("Minutes:",d27.getMinutes());
console.log("Seconds:",d27.getSeconds());
let d28=new Date("2026-03-11");
console.log("Before:",d28);
d28.setFullYear(2030);
console.log("After:",d28);
let d29=new Date("2026-03-11");
console.log("Before:",d29);
d29.setMonth(11);
d29.setDate(22);
console.log("After:",d29);   
let dob=prompt("Enter your date of birth(YYYY-MM-DD):");
let birthDate=new Date(dob);
let days=[
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thrusday",
    "Friday",
    "Saturday"
];
console.log("Date of Birth:",birthDate);
console.log("Day:",
    days[birthDate.getDay()]);            