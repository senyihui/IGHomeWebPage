// ----------------  Member part ----------------
// var
const yyfBtn = document.getElementById("btn-yyf");
const yyfValOutput = document.getElementById("value-yyf");
const zhouBtn = document.getElementById("btn-zhou");
const zhouValOutput = document.getElementById("value-zhou");
const FerBtn = document.getElementById("btn-430");
const ferValOutput = document.getElementById("value-430");

var member = {
    "yyf" : 0,
    "zhou" : 0,
    "430" : 0
};

// load local storage
let data = localStorage.getItem("Likes");
yyfValOutput.innerText = JSON.parse(data)["yyf"]; 
zhouValOutput.innerText = JSON.parse(data)["zhou"];
ferValOutput.innerText = JSON.parse(data)["430"]

function addLikeNum(output, name) {
    var curVal = parseInt(output.innerText);
    curVal += 1;
    output.innerText = curVal;
    member[name] = curVal;
    localStorage.setItem("Likes", JSON.stringify(member));
}

yyfBtn.addEventListener("click", function() {
    addLikeNum(yyfValOutput, "yyf");
});

zhouBtn.addEventListener("click", function() {
    addLikeNum(zhouValOutput, "zhou");
});

FerBtn.addEventListener("click", function() {
    addLikeNum(ferValOutput, "430");
});

// ----------------  Cart part ----------------
//var
const PRICE = 0.99;

const yyfQuanBtn = document.getElementById("item-yyf");
const zhouQuanBtn = document.getElementById("item-zhou");
const totalPrice = document.getElementById("item-total-price");

function calculate() {
    if (yyfQuanBtn.value < 0) yyfQuanBtn.value = 0;
    if (zhouQuanBtn.value < 0) zhouQuanBtn.value = 0;

    let numOfyyf = yyfQuanBtn.value,
    numOfzhou = zhouQuanBtn.value;

    let sum = numOfyyf * PRICE + numOfzhou * PRICE;
    totalPrice.innerText = "¥" + sum.toFixed(2);
}

yyfQuanBtn.addEventListener("click", function() {
    calculate();
});

zhouQuanBtn.addEventListener("click", function() {
    calculate();
});