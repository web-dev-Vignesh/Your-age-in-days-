 
function ageInDays(){
    var rem=document.getElementById("rem");
    rem.remove();
    var ageyear = prompt('Enter your Brith Year');
    var year = new Date().getFullYear();
    var ageInDayss=(year-ageyear)*365;
    var age=year-ageyear;
    // console.log(ageInDayss);
    var h1=document.createElement('h1');
    var total=document.createTextNode('You are '+age+ ' years old.'+' You are ' + ageInDayss + ' days old');
    h1.setAttribute('id','rem');
    h1.appendChild(total);
    document.getElementById('flex-box-result').appendChild(h1);
    
}
function reset(){
     
    document.getElementById('rem').innerText = 'Thankyou for Using this to known your age and days';
}