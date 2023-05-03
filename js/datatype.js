// data type
// 1. string
let firstName = "Panha"
let lastName = "Long"
let favorite = 'Reserching and Gaming'
let selfIntroduction = `Hi, greeting from Cambodia. I, ${lastName} ${firstName}, my favorite is ${favorite}.`
console.log(selfIntroduction)
console.log(typeof(firstName))
let numberOfApples = '90'

// 2. number
let myApples = 90
console.log(typeof(numberOfApples))
let result = numberOfApples / myApples

//  let result = numberOfApples * myApples
//  let result = numberOfApples - myApples
//  let result = numberOfApples + myApples
console.log('-----Total apples', typeof(result),result)

//---backtick
let HEADER = `
  <h1>Welcome, Develper Cambodia</h1>
  <h2>Welcome</h2>
`  
// document.querySelector('.heading').innerHTML = HEADER //output to scren banner

// 2. number
let num1 = 40
// let num2 = 'abc' // output = Nan 
let num2 = "0"
let output = num1 / num2
console.clear()
console.log(output)

//  Boolean ( true , false) - condition
let loading = true
loading = false
if (loading)
{
    // show skelation
    
}
else
{
    // show real data

}

// object

let student = 
{
    fullname: "Sreyly",
    age: 20,
    profile: "https://cdn.pixabay.com/photo/2023/03/22/03/35/ai-generated-7868573__340.jpg",
    favorite: "Play card",
}
console.log(student.fullname,student.age,student.favorite)
// student = null
console.log(student)

document.querySelector('.row').innerHTML = `
<div class="col-12 col-sm-6 col-md-4 col-lg-3">
<div class="card boder-0 h-100 shadow">
    <img src=${student.profile} class="card-img-top" alt="">
    <div class="card-body">
        <p class="card-text">${student.fullname}</p>
    </div>
</div>

</div>
<div class="col-12 col-sm-6 col-md-4 col-lg-3">
<div class="card boder-0 h-100 shadow">
    <img src=${student.profile} class="card-img-top" alt="">
    <div class="card-body">
        <p class="card-text">${student.fullname}</p>
    </div>
</div>

</div>

<div class="col-12 col-sm-6 col-md-4 col-lg-3">
<div class="card boder-0 h-100 shadow">
    <img src=${student.profile} class="card-img-top" alt="">
    <div class="card-body">
        <p class="card-text">${student.fullname}</p>
    </div>
</div>

</div>

<div class="col-12 col-sm-6 col-md-4 col-lg-3">
<div class="card boder-0 h-100 shadow">
    <img src=${student.profile} class="card-img-top" alt="">
    <div class="card-body">
        <p class="card-text">${student.fullname}</p>
    </div>
</div>

</div>


`