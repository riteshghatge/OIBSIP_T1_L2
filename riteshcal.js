let string= "";
let buttons=document.querySelectorAll('button');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML == "="){
            string = eval(string);
            document.querySelector('.result').value = string;
        }
        else if(e.target.innerHTML == "Clear"){
            string = "";
            document.querySelector('.result').value = string;
        } 
        else{
            console.log(e.target)
            string = string + e.target.innerHTML;
            document.querySelector('.result').value = string;
        } 
         
    })
})