// ЗАДАНИЕ ЕЩЕ НЕ СДЕЛАНО
let list = []
const brand = document.getElementById('brand');
const level = document.querySelector('.level');
const age = document.querySelectorAll('.year').value;
// console.log(age);

brand.addEventListener('change', (e) => {
    switch (brand.value) {
        case "Skoda":
            list[0] = 600000;
            break;
        case "Audi":
            list[0] = 700000;
            break;
        case "BMW":
            list[0] = 1000000;
            break;  
        case "Renault":
            list[0] = 500000;
            break;  
        case "Nissan":
            list[0] = 800000;
            break;
    }
})

level.addEventListener('change', (e) => {
    switch (level.value) {
        case "basic":
            list[1] = 100000;
            break;
        case "middle":
            list[1] = 150000;
            break;
        case "maxi":
            list[1] = 250000;
            break;  
    }
})






// })
// age.addEventListener('click', () => {
// for (let i=0; i<age.length; i++) {
//     if (age[i].checked) {
//         list[2]=age[i].value;
//         break;
//     }
// }
// })






console.log(list);


// selects.forEach((item, index) => {
// item.addEventListener('change', (e) => {
//     switch (item.value) {
//         case "Skoda":
//             list[0] = 600000;
//             break;
//         case "Audi":
//             list[0] = 700000;
//             break;
//         case "BMW":
//             list[0] = 1000000;
//             break;  
//         case "Renault":
//             list[0] = 500000;
//             break;  
//         case "Nissan":
//             list[0] = 800000;
//             break;
//         case "basic":
//             list[1] = 100000;
//         case "middle":
//             list[1] = 200000; 
//         case "maxi":
//             list[1] = 300000;                             
//     }
    
// })
// })
// console.log(list);



// const year = document.querySelector('.year');
// const price = document.querySelector('.price');
// 
// const options = document.querySelectorAll('.options');
// const btn = document.querySelector('.btn');