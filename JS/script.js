let checkbox = document.getElementById('checkbox-menu')
let menu = document.getElementById('nav-mob')

function hamburguer() {
  if (checkbox.checked) {
    menu.classList.remove('display-none')
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
        breakpoint: 1550,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        }
      },
      {
        breakpoint: 1050,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        }
      },
      {
        breakpoint: 00,
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
        breakpoint: 1050,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 600,
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

var image = document.getElementsByClassName('thumbnail');
new simpleParallax(image, {
	scale: 1.8,
  overflow: true
});


var typed = new Typed(".auto-type", {
  strings: ['Olá, meu nome é <br> <span class="bold name">Gustavo Omai</span>'],
  typeSpeed: 100,
  backSpeed:80,
  loop: false
});