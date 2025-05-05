// const person: {
//     name: string;
//     age: number;
// } // 이렇게 직접적으로 명시하기보단 TS가 추론하게 둬라!
// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     roles: [number, string]
// } = {
enum Role { ADMIN, READ_ONLY, AUTHOR };

const person = {
    name: 'Maximilian',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
};

let FavoriteActivities: string[] = ['Playing instruments', 'reading'];
// 혼합된 array를 선언하려면?
// let FavoriteActivities2 = any[] 

console.log(person);
// console.log(person.nickname); // error!

for (const hobby of person.hobbies){
    console.log(hobby)
}

// person.roles.push('admin') // 튜플은 갯수가 불변이어야하는데..TS가 이 오류는 못 잡는다.
// person.roles = [0, 'admin', 'teacher']; // 이거는 잡아낼 수 있음
if (person.role === Role.AUTHOR){
    console.log('is author');
}