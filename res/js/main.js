// document.getElementById(nazev id) - ziskat element z html dokumentu
const cookie = document.getElementById("cookie");
const counter = document.getElementById("counter");

/*const PI = 3.14;  //const - promenna co se nemeni, let - promenna co se muze menit
let number = 0; 
console.log(number);
number = 10;
console.log(number);
console.log(PI);    */
// console.log = vypsani do konzole 

// () => {} arrow funkce

let numberOfCookies = 0;

cookie.onclick = () => {  
    //numberOfCookies = numberOfCookies + 1;
    //numberOfCookies +=1;
    //++ inkrement - zveda cislo o 1
    //dekrement - odecita cislo o 1
    numberOfCookies ++;
    //counter.innerHTML = "Cookies: " + numberOfCookies;
    counter.innerHTML = `Cancer: ${numberOfCookies}`;
    console.log("Click");
}