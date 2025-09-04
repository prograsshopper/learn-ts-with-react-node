const userName = 'Max';
let age = 30;
age = 29;

// function add(a: number, b: number){
//     let result;
//     result = a + b;
//     return result
// }

// arrow function
// const add = (a: number, b: number) => {
//     return a + b;
// };
// const add = (a: number, b: number = 1) => a + b;
// const printOutput: (a: string | number) => void = output => console.log(output);
// const button = document.querySelector('button')
// if (button){
//     button.addEventListener('click', event => console.log(event))
// } // ts는 addEventListener가 event 객체를 주는걸 알고 있어서 이렇게 작성해도 됨

// printOutput(add(5))

const hobbies = ['sports', 'cooking']
const activeHobbies = ['Hiking']
activeHobbies.push(...hobbies)

const person = {
    firstName: 'Max',
    theAge: 30
}
const copiedPerson = { ...person }

const add = (...numbers: number[]) => {
    return numbers.reduce((curResult, curValue) =>  {
        return curResult + curValue;
    }, 0)
} 

const addNumbers = add(5, 2, 10, 3.7)
console.log(addNumbers)

// destructuring
// const hobby1 = hobbies[0]
// const hobby2 = hobbies[1]
const [hobby1, hobby2] = hobbies
// const [hobby1, hobby2, ...ramainingHobbies] = hobbies
const {firstName, theAge} = person
console.log(hobby1, hobby2)
console.log(firstName, theAge)