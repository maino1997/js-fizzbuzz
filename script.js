// ciclo numeri da 1 a 100 
// immagazzino numero in una variabile 
// se numero multiplo di 3 stampo fizz 
// se multiplo di 5 stampo buzz
// se multiplo di entrambi stampo fizzbuzz 
// altrimenti stampo numero

// Dichiaro variabile number 
let number = '';
const displayElement = document.getElementById('display');


// ciclo da 1 a 100 
for (let i=1; i<=100; i++){
    if (( i % 3 ) == 0 && ( i % 5 ) == 0){
        number = number + "<li> FizzBuzz </li>"
        } else if(( i % 3 ) == 0){
        number = number + "<li> fizz </li>"
        } else if (( i % 5 ) == 0){
        number = number + "<li> Buzz </li>"
        } else{
        number =number + `<li>${i}</li>`;
    }
}

// stampo risultato console 
// console.log(number);

displayElement.innerHTML = number;