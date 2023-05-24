// // For Loop

// console.log('Hello')
// console.log('Hello')
// console.log('Hello')
// console.log('Hello')
// console.log('Hello')

// for(let  i = 0; i < 150 ; i ++){
//     console.log("Hello", i)
// }

// const names = ['Kirito', 'Raykiri', 'Alastor', 'Sempay' ]
// //       index    0          1          2         3
// // console.log(names[0]); // Kirito
// // console.log(names[1]); // Raykiri
// // console.log(names[2]); // undefined
// // console.log(names[3]); // Sempay

// console.log(names); // [....]

// for(let  i = 0; i < names.length ; i ++) {
//     // console.log("Hello", names[i])
// }
// //      % 5 КОКА
// //      % 3 КОЛА

// for (let san = 0; san < 101; san++) {
//     if (san % 5 === 0 && san % 5 === 0){
//       console.log("KOKA KOLA", san);
//     }
// }

// let name = 'Adahan'

// for (let tamga = 0; tamga< name.length; tamga++){
//     if (name[tamga] .toLowerCase() === 'a'){
//         console.log(name[tamga].toLowerCase());
//     }
// }

// // forof

// for (const t of name) {
//     if(t.toUpperCase() === 'A'){
//       console.log(t.toUpperCase());
//     }
// }

// // for in
// const user = {
//     // key : value
//     name: 'Adahan',
//     age:25,
//     gender: 'male'
// }

// // console.log(user.name); // adahan
// // console.log(user.age); // 25
// // console.log(user['gender']); // male

// for (const key in user) {
//   console.log(key , ":", user[key]);
// }


let btn1 = document.querySelectorAll('button')

for (let i = 0; i < btn1.length; i++){
    btn1[i].onclick = function () {
        document.body.style.background = btn1[i].innerText
    }
}