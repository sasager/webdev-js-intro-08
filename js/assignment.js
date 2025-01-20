"use strict";

const submissionBtn = document.getElementById("submission-btn");
const smallestNumberElement = document.getElementById("smallest-number");
const largestNumberElement = document.getElementById("largest-number");
const averageNumberElement = document.getElementById("average-number");

const myNumbers = [35, 130, 354, 100, 25, 134, 99, 200, 35];

function findSmallestNumber(array) {
    let smallestNumber = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] < smallestNumber) {
            smallestNumber = array[i];
        }
    }
    return smallestNumber;
}

function findLargestNumber(array) {
    let largestNumber = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > largestNumber) {
            largestNumber = array[i];
        }
    }
    return largestNumber;
}

function findAverage(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum / array.length;
}

function render () {
    smallestNumberElement.innerText = findSmallestNumber(myNumbers);
    largestNumberElement.innerText = findLargestNumber(myNumbers);
    averageNumberElement.innerText = findAverage(myNumbers);
}

submissionBtn.addEventListener("click", function () {
    render();
  });