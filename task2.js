const numbers = [2, 4, 6, 7, 8, 5];
const newArr = numbers.map(myfunction);

document.getElementById("result").innerHTML= newArr;

function myfunction(num) {
    return num*2;
}

//<!---------------------- .MAP() Question no 01(a) ------------------------->
let Colors =['Yellow', 'Brown', 'Orange', 'Red', 'Blue', 'Black', 'Gray'];
let newArr1 =Colors.map(Color); 
 document.getElementById('result1').innerHTML =newArr1;
 function Color(col) {
    return col;
 }

//<!---------------------- .MAP() Question no 01(b) ------------------------->
Colors.map(color => {
     if (color === 'Red') {
        document.getElementById('result2').innerHTML = color;
    }
 });

//<!---------------------- .MAP() Question no 02(a) ------------------------->
const persons = [
    {firstname : "Malcom", lastname: "Reynolds"},
    {firstname : "Kaylee", lastname: "Frye"},
    {firstname : "Jayne", lastname: "Cobb"}
];
let lastname = persons.map(people => people.lastname) 
    document.getElementById("result3").innerHTML = `${lastname}`;

//<!---------------------- .MAP() Question no 02(b) ------------------------->
const modifiedNames = persons.map(people => ({ ...people, lastname: "Mr " + people.lastname }));
const modifiedNamesString = modifiedNames.map(person => ` ${person.lastname}`);
document.getElementById("result4").innerHTML = modifiedNamesString;

//<!---------------------- .MAP() Question no 03(a) ------------------------->
let array = ['javaScript' , 'CSS', 'HTML' , 'react js' , 'data structures and algorithms'];
let newArr2 = array.map(new_Subject);
document.getElementById("result5").innerHTML=newArr2;
function new_Subject(Sub){
    return Sub;
}

//<!---------------------- .MAP() Question no 03(b) ------------------------->

const Present = array.filter(element => element === 'react js');
document.getElementById("result6").innerHTML= Present;



//<!---------------------- .MAP() Question no 04(a) ------------------------->
let array1  = ['rameen' , 'rashid', 'ali' , 'alina' , 'aliya' , 'mahnoor' , 'mehwish' , 'sana' , 'tahira' , 'taimoor'];
let newArr3 = array1.map(new_function1);
document.getElementById("result7").innerHTML= newArr3;

function new_function1(Check) {
return Check;
}

//<!---------------------- .MAP() Question no 04(b) ------------------------->
document.getElementById("button1").addEventListener('click', function() {
    let str = document.getElementById("field1").value.toLowerCase();
    let filteredNames = array1.filter(name => name.toLowerCase().includes(str));
    document.getElementById("result8").innerHTML = filteredNames.length ? filteredNames.join(', ') : 'No matching names found';
})

//<!---------------------- .MAP() Question no 05 ------------------------->
const number = [2, 3, 1, 5, 10, 15, 12, 4, 34];
const newarray = number.filter(number => number > 5);
document.getElementById("greater5").innerHTML = `Numbers that are only greater than 5 = ${newarray}`;

//<!---------------------- .MAP() Question no 06 ------------------------->

const number1 = [2, 3, 1, 5, 10, 15, 12, 4, 34];
const newarray1 = number1.filter(number1 => number1%2 ===0);
document.getElementById("even").innerHTML = `New Array with only even Numbers = ${newarray1}.`;

//<!---------------------- .MAP() Question no 07 ------------------------->
//const number = [2, 3, 1, 5, 10, 15, 12, 4, 34];
//const newarray = number.filter(number => number > 5);
//document.getElementById("greater5").innerHTML = `Numbers that are only greater than 5 = ${newarray}`;

//<!---------------------- .MAP() Question no 07(b) ------------------------->
let numbers2 = [2, 4, 5, 10, 12, 15, 35, 39, 59, 99];
let newstr = numbers2.map(number => number.toString());
document.getElementById("ArrtoStr").innerHTML= `${newstr}`;
//console.log(newstr);

//<!---------------------- .MAP() Question no 08 ------------------------->

let names2 = ['ammad', 'saifullah', 'umair', 'tufial', 'shahab'];
let newnames = names2.map(names => { 
let A1=  names.charAt(0).toUpperCase();
let newstr1 = names.slice(1).toLowerCase();
return A1 + newstr1;
});
document.getElementById("upercase").innerHTML = `${newnames}`;

//<!-------------------------- Question no 09 ------------------------->

let number3 = [2, 5, 6, 7, 8, 9, 10, 11];
let squarevalue = number3.map(x => x**2);
document.getElementById("squar").innerHTML= squarevalue;

//<!------------------------- Question no 10 ---------------------------->

const array2 = [0, 1, 3, 7, -5, -2, 10, -12];
let Checkpositivenumbers = array2.filter(array2 => array2>0);
document.getElementById("positivenmbr").innerHTML= `The positive numbers are : ${Checkpositivenumbers}`;
let sumpositivenumber = Checkpositivenumbers.reduce((a,b)=>{
    return a+b;
});
document.getElementById("sumpositivenmbr").innerHTML= `The sum of positive numbers is : ${sumpositivenumber}`;

//<!------------------------- Question no 11 ----------------------------->




