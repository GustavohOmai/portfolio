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
$(document).ready(function () {
$('.tecnologias-slick').slick({
    dots: false,
    infinite: true,
    slidesToShow: 5,
    speed: 300,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
    ]
  });
});