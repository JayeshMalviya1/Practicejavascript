const promise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task is complete");
        resolve();
    },1000)
})
promise1.then(function(){
    console.log("Async task is resolved"); 
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2 is complete");
     resolve();
    })
 }).then(function(){
    console.log("Async task 2 is resolved");

 })

 fetch("https://api.rgpvnotes.in/syllabus").then(function(response){
    return response.json();
 }).then(function(badmosh){
    console.log(badmosh);
 })