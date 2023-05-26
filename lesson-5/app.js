// Functions
// let const (var)


// const number = '+996 702 270 113'
// let Alastor = checkNumber(number, "+996 702 270 113")

// const number2 = "+996 777 777 777"
// let Alastor2 = checkNumber(number2, "+996 777 777 777")


// console.log(Alastor);
// console.log(Alastor2);

// function checkNumber (num, phone){
//     if (num === phone){
//       return true
//     }
// }

// DOM Document object Modal
// Find Element (h1-h6, p, div)
// getElementById()   #id
// getElementsByTagName() div button img ul
// getElementByTagName()  text-center-class
// ----------New---------------------------
// querySelector()  div.text-center
// querySelectorAll()  div button img


const h1Tag = document.querySelectorAll('h1') // [h1,h1,h1,h1]
console.dir(h1Tag);
// for loop


for(let i = 0; i< h1Tag.length; i++){
    if(i < 2) {
        h1Tag[i].style.background = "red"
    }else if( i < 4){
        h1Tag[i].style.background = "aqua"
    }



    h1Tag[i].innerText = h1Tag[i].innerText + " World"
    h1Tag[i].style.color = "white"
    h1Tag[i].style.fontSize = "56px"
    h1Tag[i].style.textAlign = "center" 
}

const cars = [{
    model:"Audi",
    price: 2220,
    color: 'black',
    img: "https://avatars.mds.yandex.net/get-verba/216201/2a0000017f6e15f4368df3112afb695baac4/cattouchret"
},
{
    model:"BMW",
    price: 4220,
    color: 'blue',
    img: "https://www.bmw-m.com/content/dam/bmw/marketBMW_M/common/all-models/m-performance-automobile/i7-m70-xdrive/bmw-i7-m70-stage-teaser.png.asset.1681387862051.png"
} ]

const div = document.querySelector('#list')

for (const car of cars) {
    div.innerHTML += `
    <div class='card'>
    <div>
        <img src=${car.img} width="200px" />
    </div>
    <div>
    <h1>${car.model}</h1>
    <p>${car.price} $ </p>  
    <p>${car.color}</p>
    </div>
    </div>
    `
}