// let button = document.querySelector('button');
// button.addEventListener("click", sumInput());

function sumInput() {
    let list = [];
    while (true) {
        let number = prompt("Введите число", '');
        if (!isFinite(number) || number === "" || number === null) break;
        list.push(+number);
    }
    let sum = 0;
    for (let num of list) {
        sum += num;
    }
    return sum;
    let sortedList = list.sort();
    
    
    
}

console.log("Сумма = " + sumInput());
console.log(sortedList);
    // alert(sumInput());