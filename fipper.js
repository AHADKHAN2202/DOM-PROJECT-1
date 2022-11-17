

const button = document.getElementById('color');

 button.addEventListener('click', function(){
    const colors ='rgb('+ randomColor(225) + ',' + randomColor(225) + ',' + randomColor(225) +')' 
    document.body.style.backgroundColor = colors;
});


function randomColor(number){
    return Math.floor(Math.random()*(number+1))
}