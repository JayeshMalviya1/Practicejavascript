const input = document.getElementById("display")
function appendValue(value){
    display.value +=value
}
function clearDisplay(){
    display.value =""
}
function calculateResult(){
    try{display.value = eval(display.value)

    }catch{
        display.value= "Error"
        setTimeout(()=>(display.value=""),1500)
    }
}
