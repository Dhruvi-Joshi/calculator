let res=document.getElementById("ans");

let que=(number)=>{
    res.value=res.value+number
}

let result=()=>{
     try{
        res.value=eval(res.value);
     }
     catch(err){
            alert("Enter the valid input");
     }
}
function clr(){
    res.value=" ";
}
function back(){
    res.value=res.value.slice(0,-1)
}

const themetogglebtn=document.querySelector('.theme-toggler');
const calculator=document.querySelector('.cal');
const togglericon=document.querySelector('.toggler-icon');

let isdark=true;
themetogglebtn.onclick = () =>{
    calculator.classList.toggle('dark');
    themetogglebtn.classList.toggle('active');
    isdark=!isdark;
    if (isdark) {
                calculator.classList.add('dark'); // Add a class for dark mode
                backButton.innerHTML = '<img src="back.png" height="35%">'; // Change the image source to "back.png"
            } else {
                calculator.classList.remove('dark'); // Remove the class for default mode
                backButton.innerHTML = '<img src="backwhite.png" height="35%">'; // Change the image source to "backwhite.png"
            }
};
