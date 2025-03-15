const RandomNumber = function (){
    const hex ="0123456789ABCDEF"
    let color = "#";
    for(let i=0; i<6; i++){
        color += hex[Math.floor(Math.random()*16)]
    }
    return color
}

document.querySelector("#start").addEventListener("click",function(){
  const start =  setInterval(function(){
        document.body.style.backgroundColor = RandomNumber()
    },1000)
        document.querySelector("#stop").addEventListener("click",function(){
        clearInterval(start)
    }
,1000)})
