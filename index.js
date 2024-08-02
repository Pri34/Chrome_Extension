// function save() {
//     console.log("Button clicked")
// }

// let inputBtn =  document.getElementById("input-btn")
// inputBtn.addEventListener("click",function(){
//     console.log("Button clicked again")
// })



// //PRACTICE !!

// // 1. Grab the box from the DOM and store it in a variable
// // 2. Add a click event listener to the box 
// // 3. Log out "I want to open the box!" when it's clicked

// // let box=document.querySelector("#box")
// // box.addEventListener("click",function(){
// //     console.log("I want to open the box!")
// // })

// // Create two variables:
// // myLeads -> should be assigned to an empty array
// // inputEl -> should be assigned to the text input field

// let inputEl = document.getElementById("input-btn")
// let myLeads = [] 

// //PRATICE !!
// const playerName = "Per"
// let credits = 45

// // If possible, use const. If not, use let.

// // Which variables below should be changed from let to const?

// // The customer wants to order some stuff. Here are the details:
// let basePrice = 520  //const
// let discount = 120  //const
// let shippingCost = 12
// let shippingTime = "5-12 days"

// // Whops! Turns out the shipping will be a bit more complex
// shippingCost = 15
// shippingTime = "7-14 days"

// // Calculating the full price
// let fullPrice = basePrice - discount + shippingCost  //const

// // Finally, notifying the customer
// console.log("Total cost: " + fullPrice + ". It will arrive in " + shippingTime)



//BACK TO THE APP


const inputBtn =  document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
let myLeads = ["hello","me"] 

inputBtn.addEventListener("click",function(){
    // Push the value from the inputEl into the myLeads array 
    // instead of the hard-coded "www.awesomeleads.com" value
    // Google -> "get value from input field javascript"
    myLeads.push(inputEl.value)
})

for(let i=0 ; i<myLeads.length ; i++){
    ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"
}