// Exercise 1: Basic Async Function
//Write an async function called greet that returns "Hello, World!". Call the function and print the result.
async function greet(){
    console.log("Hello, World!")
}
// greet();

//Exercise 2: Using await with setTimeout
//Create a function called waitAndGreet that waits 2 seconds before returning "Hello after 2 seconds!". Use setTimeout inside a Promise.
async function waitAndGreet() {
    setTimeout(function(){
        console.log("Hello after 2 seconds!")
    },2000)
}
// waitAndGreet();


//Exercise 3: Fetching Data
//Fetch a random post from the API https://jsonplaceholder.typicode.com/posts/1 using fetch and await, then print its title.
async function FetchApi() {

      const respnose = await fetch("https://jsonplaceholder.typicode.com/posts/1")
      let data  = await respnose.json()
      console.log(data.title)
    
}
// fetchApi()

//Exercise 4: Handling Errors
//Modify Exercise 3 to use try-catch, and print "Something went wrong!" if an error occurs.

//✅ Example Output (if API fails):

async function fetchApi() {

    try{
    const respnose = await fetch("https://jsonplaceholder.typicode.com/posts/1")
    let data  = await respnose.json()
    console.log(data.title)
   }catch{
    console.log("Something went wrong")
   }
  
}
// fetchApi()

async function Api() {//this is not proper implentaion for fetching the multiple api at a same becuse if you it will not run simentansly , we will take different apporch for this 
   
    let respnose1 =  await fetch("https://jsonplaceholder.typicode.com/posts/1")
        let data1 = await respnose1.json()
    let respnose2 =await fetch("https://jsonplaceholder.typicode.com/posts/2")
        let data2 = await respnose2.json()
    
        console.log(data1.title)
        console.log(data2.title)
    
}
// Api();

//Solution for That
async function fetchpost(){
    let [post1, post2] =await Promise.all([
        fetch("https://jsonplaceholder.typicode.com/posts/1").then(res=> res.json()),
        fetch("https://jsonplaceholder.typicode.com/posts/2").then(res=> res.json())
    ])
    console.log(post1.title)
    console.log(post2.title)
}
// fetchpost();

//Create an async function delayedMessage that takes a message and delay (in seconds) as arguments. It should wait for the delay and then print the message.

//Example Call:
async function delayedMessage(message,delay) {
    await new Promise(resolve=>setTimeout(resolve,delay*1000))
    console.log(message)
}
// delayedMessage("hello after 3 seconds",3)

//Exercise 2: Fetch and Display User Data
//Fetch user data from the API https://jsonplaceholder.typicode.com/users/3 and print their name and email.

async function FetchData(){
    let data1 = await fetch("https://jsonplaceholder.typicode.com/users/3")
    let data2 = await data1.json();
    console.log(`Name:${data2.name}`)
    console.log(data2.email)
}
// fetchData();

//Exercise 3: Fetch Multiple Users in Parallel
//Modify Exercise 2 to fetch data for two users (User 3 and User 5) at the same time using Promise.all(). Then, print their names.

async function fetchmultipleApi(){
    let [data1,data2] =await Promise.all([
        fetch("https://jsonplaceholder.typicode.com/users/3").then(res=> res.json()),
        fetch("https://jsonplaceholder.typicode.com/users/5").then(res=> res.json())

    ])
    console.log("user 1:"+data1.name)
    console.log("user 2:"+data2.name)
}
// fetchmultipleApi();

//Exercise 4: Error Handling in Async
//Modify Exercise 2 so that if the API fails, it prints "Error fetching user data!" instead of crashing.

async function fetchData(){
   try{
    let data1 = await fetch("https://jsonplaceholder.typicode.com/users/3")
    let data2 = await data1.json();
    console.log(`Name:${data2.name}`)
    console.log(data2.email)}
    catch{
        console.log("Error fetching user data!")
    }
}
// fetchData();

//Exercise 5: Chained Async Calls
//Fetch post ID 1 from https://jsonplaceholder.typicode.com/posts/1
//Extract the userId from the post.
//Use the userId to fetch the corresponding user data.
//Print the post title and user name.

async function chainedAsnyc(){
    let data1 = await fetch("https://jsonplaceholder.typicode.com/posts/1")
    let data2 = await data1.json();
    let id = data2.id

    let newdata = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    let newdata1 = await newdata.json();
    

    console.log("Post Title "+data2.title)
    console.log("Authar:"+newdata1.name)
}
// chainedAsnyc();
//Exercise 6: Retry Failed API Requests
//We need to create an async function fetchWithRetry(url, retries) that:

//Tries fetching data from the url.
//If the request fails, retry up to retries times.
//If it still fails after retries attempts, print "Failed after X retries".

async function inputFetch(url,retries){
    for(let i =0; i<retries; i++){
        try{
        let response = await fetch(url)
        
        if(!response.ok)throw new Error(`HTTP error! Status: ${response.status}`)
            let data = await response.json()
        return data;
        }catch(error){
            console.log(`attenpt ${i+1} failed. Retrying...`)
        }

    }
    console.log(`Failed after ${retries} retries`)
    return null;
}
inputFetch("https://jsonplaceholder.typicode.com/users/1", 3)
    .then(data => {
        if (data) {
            console.log("Fetched Data:", data);
        } else {
            console.log("No data received.");
        }
    });