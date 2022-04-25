 
function ageInDays(){
    var rem=document.getElementById("demo");
    rem.remove();
    var ageyear = prompt('Enter your Brith Year');
    var year = new Date().getFullYear();
    var ageInDayss=(year-ageyear)*365;
    // console.log(ageInDayss);
    var h1=document.createElement('h1');
    var Total =document.createTextNode('You are '+ageInDayss+' days old');
    h1.setAttribute('id','ageInDay');
    h1.appendChild(Total);
    document.getElementById('flex-box-result').appendChild(h1);

}
function reset(){
    document.getElementById('ageInDay').innerText = 'Thankyou for Using this to known how old are you in days.To Continue please Refresh/Reload the page......';
     
}