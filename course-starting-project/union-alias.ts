// function add(n1: number, n2: number) {
//     const result = n1 + n2;
//     return result
// }

// combine type
// function combine(input1: number | string, input2: number | string) {
//     let result;
//     if (typeof input1 == 'number' && typeof input2 == 'number') {
//         result = input1 + input2;
//     } else {
//         result = input1.toString() + input2.toString();
//     }
//     return result;
// }

// const combineAges = combine(30, 26);
// console.log(combineAges);

// const combineNames = combine('Max', 'Anna');
// console.log(combineNames);

type Combinable = number | string;

function combine(
    input1: Combinable, input2: Combinable,
    resultConversion: 'as-number' | 'as-text'
) {
    let result;
    if (
        typeof input1 == 'number' && typeof input2 == 'number' || resultConversion == 'as-number'
    ) {
        // + 를 붙이면 더하기 전에 강제로 숫자로 변환됨
        result = +input1 + +input2;
    } else {
        result = input1.toString() + input2.toString();
    }
}

const combineAges = combine(30, 26, 'as-number');
console.log(combineAges);

const combineNames = combine('Max', 'Anna', 'as-text');
console.log(combineNames);