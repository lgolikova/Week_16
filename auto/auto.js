
// ЗАДАНИЕ ЕЩЕ НЕ СДЕЛАНО

let list = []
const brand = document.getElementById('brand');
const selects = document.querySelectorAll('select')
selects.forEach((item, index) => {
item.addEventListener('change', (e) => {
    switch (item.value) {
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
        case "basic":
            list[1] = 100000;
        case "middle":
            list[1] = 200000; 
        case "maxi":
            list[1] = 300000;                             
    }
    
})
})
console.log(list);



// const year = document.querySelector('.year');
// const price = document.querySelector('.price');
// const level = document.querySelector('.level');
// const options = document.querySelectorAll('.options');
// const btn = document.querySelector('.btn');