/*code 1*/
function calculate1() {
    var number1 = document.getElementById("number1").value;
    var percentage1 = document.getElementById("percentage1").value;
    var result1 = number1 * (percentage1 / 100);
    document.getElementById("result1").value = result1;
}

/*------------------------------------------------------------------------------------------------*/

/*code 2*/
function calculate2() {
    var number2 = document.getElementById("number2").value;
    var percentage2 = document.getElementById("percentage2").value;
    var result2 = number2 / (percentage2 / 100);
    document.getElementById("result2").value = result2;
}

/*------------------------------------------------------------------------------------------------*/

/*code 3*/
function calculate3() {
    var percentage3 = document.getElementById("percentage3").value;
    var number3 = document.getElementById("number3").value;
    var result3 = number3 / (1 - percentage3 / 100);
    document.getElementById("result3").value = result3;
}

/*------------------------------------------------------------------------------------------------*/

/*code 4*/
function calculate4() {
    var percentage4 = document.getElementById("percentage4").value;
    var number4 = document.getElementById("number4").value;
    var result4 = number4 / (1 + (percentage4 / 100));
    document.getElementById("result4").value = result4.toFixed(2);
}

/*------------------------------------------------------------------------------------------------*/

/*code 5*/
function calculatePercentageChange() {
    var newNumber = document.getElementById("newNumber").value;
    var originalNumber = document.getElementById("originalNumber").value;
    var percentageChange = ((newNumber - originalNumber) / originalNumber) * 100;
    document.getElementById("result5").value = percentageChange;
}

/*------------------------------------------------------------------------------------------------*/

/*code 6*/
function calculate6() {
    var percentage6 = document.getElementById("percentage6").value;
    var number6 = document.getElementById("number6").value;
    var percentagePercentOfNumber1 = number6 * (percentage6 / 100);
    var result6 = number6 - percentagePercentOfNumber1;
    document.getElementById("result6").value = result6;
}

/*------------------------------------------------------------------------------------------------*/

/*code 7*/
function calculate7() {
    var percentage7 = document.getElementById("percentage7").value;
    var number7 = document.getElementById("number7").value;
    var result7 = +number7 + (number7 * (percentage7 / 100));
    document.getElementById("result7").value = result7;
}