
const person={
    name:"abdelrahman",
    lastName:"ahmed",
    speak(){
        console.log(this.name,this.lastName);
    },
    faculty:{
        name:"Faculty of engineering Ain Shams university",
        year:"Fourth Year",
        grade:"Very Good"
    }
}
const arr=[10,15,781,2.78,86,3,4,5];
const newArr= arr.sort((num1,num2)=>{
    if(num1>num2){
        return 1;
    }
    else if(num1<num2){
        return -1;
    }
    else
        return 0;
});
arr.for
console.log(newArr);
console.log(person.faculty.grade);

const h1s=document.querySelector('h1');

h1s.style.color='limegreen';
h1s.style.backgroundColor='black';

const box=document.querySelector('.box1');
box.style.width='80%';
box.style.height='200px';
box.style.backgroundColor='lightblue';
h1s.style.textAlign="center";


const button =document.querySelector('.button-select');

button.addEventListener('click',function(){
    alert("you dare click me?");
})

const paragraph=document.querySelector('.paragraph');

document.querySelector('.input-to-copy').addEventListener('keyup',function(event){
    paragraph.innerText=event.target.value;
})

document.querySelector('.button-div').addEventListener('click',function(event){
    if(event.target.tagName==='BUTTON')
        alert(`you clicked at button ${event.target.innerText}`);
})