let checkbox = document.getElementById('checkbox-menu')
let menu = document.getElementById('nav-mob')

function hamburguer(){
    console.log("Foi caralho");
    if(checkbox.checked){
        menu.classList.remove('display-none')
        console.log("Foi caralho");
    }
    else{
        menu.classList.add('display-none')
    }
}