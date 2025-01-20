// Prevent us from attempting to use variables
// that are not declared
"use strict"

const drinks = ["water", "tea", "coffee", "wine"];

for (let i = 0; i < drinks.length; i++) {
  console.log(drinks[i]);
}


const catNames = ["Mochi", "Boba", "Spyro", "Calamity", "Appa", "Kenobi", "Chalupa"];

for (let catName of catNames) {
    console.log(catName);
}


const desserts = ["ice cream", "cake", "brownie", "pie", "cookie"];

desserts.forEach(function(dessert) {
  console.log(dessert);
})


let dinners = ["spaghetti", "tacos", "casserole"];

for (let dinner of dinners) {
  dinner = "soup", "salad", "steak";
  console.log(dinner);
}


let jobs = ["nurse", "barista", "programmer", "chef", "doctor"];

jobs.forEach((job, index) => {
  job = "cat expert";
  console.log(job);
});