/*
* File: app.ts/js
* Author: Hermányi Gergely
* Copyright: 2021, Hermányi Gergely
* Group: Szoft II/N
* Date: 2021-10-20
* Github: https://github.com/TheRealGerriii/
* Licenc: GNU GPL
*/

const feet = document.querySelector("#feet") as HTMLInputElement;
const result = document.querySelector("#result") as HTMLInputElement;

const calcButton = document.querySelector("#calcButton");

function calcFeet(feet:number):number {
    return feet * 0.3048;
}

calcButton.addEventListener('click', event => {

    let res = calcFeet(+feet.value,);
    result.value = String(res + " méter");
});