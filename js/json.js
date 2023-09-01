const person={
    name:"trisha",
    age:24
}
console.log(person);

//stringify
const stringyfied=JSON.stringify(person);
console.log(stringyfied);



//parse (convert to a json object)

const parseShop=JSON.parse(stringyfied)
console.log(parseShop)