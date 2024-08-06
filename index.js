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



// const inputBtn =  document.getElementById("input-btn")
// const inputEl = document.getElementById("input-el")
// const ulEl = document.getElementById("ul-el")
// myLeads=[]

// //Converting a string into array
// // let myLeads = `["www.eeekfn.com"]`
// // myLeads=JSON.parse(myLeads)
// // myLeads.push("cccdd")
// // console.log(myLeads)

// //Converting an array into string
// // let myLeads = ["www.eeekfn.com"]
// // myLeads=JSON.stringify(myLeads)
// // console.log(myLeads)

// // localStorage.setItem("hello","wwww.ejbrikv")
// // localStorage.getItem("hello")
// // localStorage.clear()

// //Both key and value must be strings in local storage

// // let myLeads = `["www.awesomelead.com"]`

// // 1. Turn the myLeads string into an array
// // 2. Push a new value to the array
// // 3. Turn the array into a string again
// // 4. Console.log the string using typeof to verify that it's a string

// // myLeads=JSON.parse(myLeads)
// // myLeads.push("fhfbcv0")
// // myLeads=JSON.stringify(myLeads)
// // console.log(myLeads)
// // console.log(typeof myLeads)

// inputBtn.addEventListener("click",function(){
//     myLeads.push(inputEl.value)
//     inputEl.value = " "
//     // Save the myLeads array to localStorage 
//     // PS: remember JSON.stringify()
//     localStorage.setItem("myLeads",JSON.stringify(myLeads)) //we are adding all the values under my keys as key value
//     renderLeads()
    
//     // To verify that it works:
//     console.log( localStorage.getItem("myLeads") )
// })

// // Get the leads from the localStorage
// // Store it in a variable, leadsFromLocalStorage
// // Log out the variable

// localStorage.getItem("myLeads") 
// myLeads=JSON.parse(myLeads)
// let leadsFromLocalStorage=myLeads
// console.log(leadsFromLocalStorage)

// // let leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )
// // console.log(leadsFromLocalStorage)


// function renderLeads() {
//     let listItems = ""
//     for(let i=0 ; i<myLeads.length ; i++){
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



// //TRUTHY AND FALSY VALUES



// const credits=0

// if(credits >0 ){
//     console.log("Lets Play")
// } else {
//     console.log("Sorry,You have no credits")
// }

// if(credits){    //this will also work in js and if we put 0 then js will say its
//     //falsy value and go to else. if credits is 12 then for js its true and first if statement is printed
//     console.log("Lets Play")
// } else {
//     console.log("Sorry,You have no credits")
// }

// if("yolo"){
//     console.log("Lets Play")
// } else {
//     console.log("Sorry,You have no credits")
// } //lets is logged out because yolo is truthy value here in js

// if(["prisha","hello"]){
//     console.log("Lets Play")
// } else {
//     console.log("Sorry,You have no credits")
// } //also truthy value

// if(''){
//     console.log("Lets Play")
// } else {
//     console.log("Sorry,You have no credits")
// } //empty string got tranlated to falsy value

// // falsy values

// // false
// // 0
// // ""
// // null -> how you as a developer signalize emptiness
// // undefined -> how JavaScript signalizes emptiness
// // NaN

// let currentViewers = null

// currentViewers = ["jane", "nick"]

// currentViewers = null

// if (true) {
//     // do something , e.g. notify the live streamers
//     console.log("we have viewers")
// }


// //Undefined

// let currentViewers1
// console.log(currentViewers1) //Undefined

// //Tell whether these are truthy or falsy values

// console.log(  Boolean("")   ) // false
// console.log(  Boolean("0")  ) // true
// console.log(  Boolean(100)  ) // true
// console.log(  Boolean(null) ) // false
// console.log(  Boolean([0])  ) // true
// console.log(  Boolean(-0)   ) // false



//BACK TO OUR APP



const inputBtn =  document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
myLeads=[]

let leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )

inputBtn.addEventListener("click",function(){
    myLeads.push(inputEl.value)
    inputEl.value = " "
    localStorage.setItem("myLeads",JSON.stringify(myLeads)) //we are adding all the values under my keys as key value
    renderLeads()
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