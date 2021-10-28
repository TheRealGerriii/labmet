"use strict";
/*
* File: app.ts/js
* Author: Hermányi Gergely
* Copyright: 2021, Hermányi Gergely
* Group: Szoft II/N
* Date: 2021-10-20
* Github: https://github.com/TheRealGerriii/
* Licenc: GNU GPL
*/
var feet = document.querySelector("#feet");
var result = document.querySelector("#result");
var calcButton = document.querySelector("#calcButton");
function calcFeet(feet) {
    return feet * 0.3048;
}
calcButton.addEventListener('click', function (event) {
    var res = calcFeet(+feet.value);
    result.value = String(res + "méter");
});
