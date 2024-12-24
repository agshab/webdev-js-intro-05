"use strict";

const todos = [
    "Wash the dishes",
    "Clean the gutters",
    "Mow the yard",
    "Do some coding",
    "Rake the leaves",
];

// Declare your two mutable variables
let shiftValue;
let popValue;

// Declaring constant variables to store references to the elements
// that will be updated by your code.
const answerOneEl = document.getElementById("answer-one");
const answerTwoEl = document.getElementById("answer-two");
const answerThreeEl = document.getElementById("answer-three");
const answerFourEl = document.getElementById("answer-four");
const answerFiveEl = document.getElementById("answer-five");
const answerSixEl = document.getElementById("answer-six");
const submissionBtn = document.getElementById("submission-btn");

function updateAnswerOne() {
    // Display the current first item in the todo list
    answerOneEl.textContent = `Current first item: ${todos[0]}`;
}

function updateAnswerTwo() {
    // Display the current last item in the todo list
    answerTwoEl.textContent = `Current last item: ${todos[todos.length - 1]}`;
}

function removeLastValue() {
    // Remove the last value from the todos array and assign it to popValue
    popValue = todos.pop();
}

function removeFirstValue() {
    // Remove the first value from the todos array and assign it to shiftValue
    shiftValue = todos.shift();
}

function addShiftAndPopValues() {
    removeFirstValue();
    removeLastValue();
    
    // Display the removed values in the corresponding answer elements
    answerOneEl.textContent = `First item removed: ${shiftValue}`;
    answerTwoEl.textContent = `Last item removed: ${popValue}`;
}

function updateAnswerFour() {
    // Display the current todo list after modifications
    answerFourEl.textContent = `Updated Todo List: ${todos.join(", ")}`;
}

function reverseTodoList() {
    // Reverse the todos array and display the result in answerFourEl
    const reversedTodos = todos.reverse();
    answerFourEl.textContent = `Reversed Todo List: ${reversedTodos.join(", ")}`;
}

function updateAnswerFive() {
    // Display the number of items remaining in the todo list
    answerFiveEl.textContent = `Number of items remaining: ${todos.length}`;
}

function updateAnswerSix() {
    // Display whether the todo list is empty or not
    answerSixEl.textContent = `Is the todo list empty? ${todos.length === 0 ? "Yes" : "No"}`;
}

function render() {
    // Call the functions to update the answers when the submission button is clicked
    updateAnswerOne();
    updateAnswerTwo();
    updateAnswerFour();
    updateAnswerFive();
    updateAnswerSix();
    addShiftAndPopValues();
}

submissionBtn.addEventListener("click", function () {
    render();
});
