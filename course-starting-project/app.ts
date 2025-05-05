// const person: {
//     name: string;
//     age: number;
// } // 이렇게 직접적으로 명시하기보단 TS가 추론하게 둬라!
const person = {
    name: 'Maximilian',
    age: 30,
    hobbies: ['Sports', 'Cooking']
};

let FavoriteActivities: string[] = ['Playing instruments', 'reading'];
// 혼합된 array를 선언하려면?
// let FavoriteActivities2 = any[] 

console.log(person);
// console.log(person.nickname); // error!

for (const hobby of person.hobbies){
    console.log(hobby)
}