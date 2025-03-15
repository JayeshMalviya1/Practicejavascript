const body =document.querySelector('body');
const buttons =document.querySelectorAll('.button');

buttons.forEach(function(buttons){
    buttons.addEventListener('click',function(e){
    
        switch (e.target.id) {
            case  'blue':
                body.style.backgroundColor=e.target.id;
                break;
            case  'white':
                body.style.backgroundColor=e.target.id;
                break;
            case  'yellow': 
                body.style.backgroundColor=e.target.id;
                break;
            case  'grey':
                body.style.backgroundColor=e.target.id;
                break;
            default:
                break;}
    })
})
