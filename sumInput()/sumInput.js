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
    list.sort((a,b)=>a-b);
    console.log('Отсортированный массив: ' + list);     
    return sum; 
}
console.log("Сумма = " + sumInput());