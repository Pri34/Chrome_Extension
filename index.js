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


// const inputBtn =  document.getElementById("input-btn")
// const inputEl = document.getElementById("input-el")
// const ulEl = document.getElementById("ul-el")
// let myLeads = ["hello","me"] 

// inputBtn.addEventListener("click",function(){
//     // Push the value from the inputEl into the myLeads array 
//     // instead of the hard-coded "www.awesomeleads.com" value
//     // Google -> "get value from input field javascript"
//     myLeads.push(inputEl.value)
// })

// for(let i=0 ; i<myLeads.length ; i++){
//     ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"
// }


// //INNERHTML


// // Use .innerHTML to render a Buy! button inside the div container
// const containerEl=document.getElementById("container")
// containerEl.innerHTML = "<button onclick='buy()'>" + "BUY" + "</button>"

// // When clicked, render a paragraph under the button (in the container)
// // that says "Thank you for buying!"

// function buy() {
//     containerEl.innerHTML += "<p>Thank you for buying!</p>"
// }


//BACK TO THE APP



// const inputBtn =  document.getElementById("input-btn")
// const inputEl = document.getElementById("input-el")
// const ulEl = document.getElementById("ul-el")
// let myLeads = []
// let listItems = ""

// inputBtn.addEventListener("click",function(){
//     myLeads.push(inputEl.value)
// })

// // 1. Create a variable, listItems, to hold all the HTML for the list items
// // Assign it to an empty string to begin with
// // 2. Add the item to the listItems variable instead of the ulEl.innerHTML
// // 3. Render the listItems inside the unordered list using ulEl.innerHTML

// for(let i=0 ; i<myLeads.length ; i++){
//     // ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"
//     // create element
//     // set text content
//     // append to ul
//     // Alternative Way

//     // const li = document.createElement("li")
//     // li.textContent = myLeads[i]
//     // ulEl.append(li)

//     listItems += "<li>" + myLeads[i] + "</li>"
//     // console.log(listItems)
// }

// //DOM MANIPULATION IS BEST TO DO ONLY ONCE OUTSIDE FOR LOOP INSTEAD OF DOING IT THREE TIMES IN FOR LOOP
// //DOM MANIPULATION COMES WITH A COST SO ITS BETTER TO DO IT ONE TIME THAN THREE TIMES

// ulEl.innerHTML =  listItems



// const inputBtn =  document.getElementById("input-btn")
// const inputEl = document.getElementById("input-el")
// const ulEl = document.getElementById("ul-el")
// let myLeads = []


// inputBtn.addEventListener("click",function(){
//     myLeads.push(inputEl.value)
//     renderLeads()
//     inputEl.value = " "
// })

// function renderLeads() {
//     let listItems = ""
//     for(let i=0 ; i<myLeads.length ; i++){
//         // listItems += "<li><a href='" + myLeads[i] + "' target='_blank'>" + myLeads[i] + "</a></li>"
//         listItems += `
//         <li>
//             <a href='${myLeads[i]}' target='_blank'>
//                 ${myLeads[i]}
//             </a>
//         </li>
//         `
//     }
//     ulEl.innerHTML =  listItems
// }



// //TEMPLATE STRINGS


// const recipient = "James"
// const sender = "Prisha"

// // Create a new variable, sender, and set its value to your name
// // Use your sender variable instead of "Per"

// // Refactor the email string to use template strings
// // const email = "Hey " + recipient + "! How is it going? Cheers Per"

// const email = `
//     Hey ${recipient}! 
//     How is it going? 
//     Cheers ${sender}
//     `
// console.log(email)



//BACK TO THE APP



const inputBtn =  document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
let myLeads = []


inputBtn.addEventListener("click",function(){
    myLeads.push(inputEl.value)
    renderLeads()
    inputEl.value = " "
})

function renderLeads() {
    let listItems = ""
    for(let i=0 ; i<myLeads.length ; i++){
        listItems += `
        <li>
            <a href='${myLeads[i]}' target='_blank'>
                ${myLeads[i]}
            </a>
        </li>
        `
    }
    ulEl.innerHTML =  listItems
}
