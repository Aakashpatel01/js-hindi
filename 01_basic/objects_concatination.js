const user = {1 : "101", 2 : "Aakash"}
const emp = {3 : "102", 4 : "prakash" }

// const add = Object.assign(user, emp)
const add = {...user, ...emp}
console.log(add);
