let checkbox = document.getElementById('checkbox-menu')
let menu = document.getElementById('nav-mob')

function hamburguer() {
  console.log("Foi caralho");
  if (checkbox.checked) {
    menu.classList.remove('display-none')
    console.log("Foi caralho");
  } else {
    menu.classList.add('display-none')
  }
}
$(document).ready(function () {

 
  $('#projetos-destaque').slick({
    
    responsive: [{
      breakpoint: 1000,
      
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      }
    },]
  });
  



  $('#projetos-todos').slick({
    dots: false,
    infinite: true,
    slidesToShow: 4,
    speed: 300,
    responsive: [{
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      },
    ]
  });

  $('#tecnologias-slick').slick({
    slidesToShow: 5,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  });



  if ($(window).width() > 1000) {
    $('#projetos-destaque').slick('unslick');
  }

});