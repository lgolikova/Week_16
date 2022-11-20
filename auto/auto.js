// ЗАДАНИЕ ЕЩЕ НЕ СДЕЛАНО
const list = []
// const brand = document.getElementById('brand');
const level = document.querySelector('.level');
const age = document.getElementsByClassName('year');
const result = document.querySelector('#result');
const brand = document.querySelector('.brand');
const btn = document.getElementById('btn');
const options = document.getElementsByClassName('options');


brand.addEventListener('change', () => {
    switch (brand.value) {
        case "Skoda":
            // list[0] = 600000;
            list.push(600000);
            break;
        case "Audi":
            list.push(700000);
            // list[0] = 700000;
            break;
        case "BMW":
            list.push(1000000);
            // list[0] = 1000000;
            break;  
        case "Renault":
            list.push(500000);
            // list[0] = 500000;
            break;  
        case "Nissan":
            list.push(800000);
            // list[0] = 800000;
            break;
    }
})

for (let i=0; i<age.length; i++) { 
    age[i].addEventListener('change', () => {
        if (age[i].checked) {
            list.push(+age[i].value);
        }
    })
}

level.addEventListener('change', () => {
    switch (level.value) {
        case "basic":
            list.push(100000);
            break;
        case "middle":
            list.push(150000);
            break;
        case "maxi":
            list.push(250000);
            break;  
    }
})


// options.forEach((item) => {
//     if (item.checked) {
//         list.push(+item.value);
//     }
// })



console.log(list)
console.log(options)

btn.addEventListener('click', () => {
    let sum = 0;
    list.forEach((item) => {
        sum += item;
        })
    alert("Стоимость автомобиля: " + sum)
    })





