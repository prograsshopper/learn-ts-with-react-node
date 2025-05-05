// original code
// function add(n1, n2) {
//     return n1 + n2;
// }

// const number1 = 5;
// const number2 = 2.8;

// const result = add(number1, number2);
// console.log(result);

// problem case
// function add(n1, n2) {
//     return n1 + n2;
// }

// const number1 = '5';
// const number2 = 2.8;

// const result = add(number1, number2);
// console.log(result); // result: 52.8. 첫 변수가 문자열이라 뒤의 변수 역시 문자열로 변경

// add type to ts
function add(n1: number, n2: number) {
    // if (typeof n1 != 'number' || typeof n2 != 'number') {
    //     throw new Error('Incorrect input!');
    // }
    return n1 + n2;
}

const number1 = 5;
const number2 = 2.8;

const result = add(number1, number2);
console.log(result);

// 안 맞는 타입을 넣는다면?
// const number3 = '5';
// const number4 = 2.8;

// const result2 = add(number3, number4); // error!

function add2(n1: number, n2: number, showResult: boolean, phrase: string){
    const addresult = n1 + n2;
    if (showResult){
        console.log(phrase + addresult);
    } else {
        return n1 + n2;
    }
}

const printResult = true;
const resultPhrase = 'Result is : '
const result2 = add2(number1, number2, printResult, resultPhrase);
