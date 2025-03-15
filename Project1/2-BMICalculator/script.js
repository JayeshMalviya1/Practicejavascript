//BMI = weight (kg) / height (m)^2//
const form = document.querySelector('form');
form.addEventListener('submit',function(e){
    e.preventDefault();
  const height = parseInt(document.querySelector('#height').value) 
  const weight = parseInt(document.querySelector('#weight').value)
  const result = document.querySelector('#results');
   
  if(height ===''||height<0||isNaN(height)){
        result.innerHTML=`please give the valid hight ${height}`;
    }else if(weight ===''||weight<0||isNaN(weight)){
        result.innerHTML=`please give the valid hight ${weight}`; 
    }else{
        let newheight =height*height
        let output = (weight/newheight*10000).toFixed(2)
        result.innerHTML=` ${output}kg/m2 `; 
    }

})

