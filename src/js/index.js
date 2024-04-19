import "../sass/main.scss";
import "../img/bg1.webp";
import "../img/bg2.webp";
import "../img/bg3.webp";
import "../img/bg4.webp";
import "../img/bg5.webp";
import "../img/bg6.webp";
import "../img/bg7.webp";
import "../img/bg8.webp";
import "../img/bg9.webp";
import "../img/bg1-mob.webp";
import "../img/bg2-mob.webp";
import "../img/bg3-mob.webp";
import "../img/bg4-mob.webp";
import "../img/bg5-mob.webp";
import "../img/bg6-mob.webp";
import "../img/bg7-mob.webp";
import "../img/bg8-mob.webp";
import "../img/bg9-mob.webp";
import "../img/nave.webp";
import "../img/thum_0365.webp";
import "../img/thum_0372.webp";
import "../img/thum_0420.webp";
import "../img/thum_0487.webp";
import "../img/thum_0507.webp";
import "../img/thum_0526.webp";
import "../img/thum_0542.webp";
import "../img/thum_0602.webp";
import "../img/thum_0638.webp";
import "../img/thum_0662.webp";
import "../img/thum_0673.webp";
import "../img/thum_0687.webp";
import "../img/thum_0697.webp";
import "../img/thum_0721.webp";
import "../img/thum_0802.webp";
import "../img/thum_0821.webp";
import "../img/thum_0857.webp";
import "../img/thum_0884.webp";
import "../img/thum_0972.webp";
import "../img/thum_1200.webp";
import "../img/thum_0982.webp";
import "../img/thum_0918.webp";
import "../img/1200.webp";
import "../img/0982.webp";
import "../img/0972.webp";
import "../img/0918.webp";
import "../img/0884.webp";
import "../img/0365.webp";
import "../img/0372.webp";
import "../img/0420.webp";
import "../img/0487.webp";
import "../img/0507.webp";
import "../img/0542.webp";
import "../img/0602.webp";
import "../img/0638.webp";
import "../img/0662.webp";
import "../img/0673.webp";
import "../img/0687.webp";
import "../img/0802.webp";
import "../img/0821.webp";
import "../img/0857.webp";
import "../img/0697.webp";
import "../img/0721.webp";
import "../img/0526.webp";


const sections = document.querySelectorAll('section');
const el = document.createElement('div');
const elList = document.createElement('ul');

let liSections = [];
let li = [];

let currentSection = 0;


function main() {

    const totalAds = 9; // Número total de anúncios
    const marketinsContainer = document.querySelector('.marketins');
    const svgToClone = document.querySelector('.marketins svg'); // Seleciona o SVG que será clonado dentro de .marketins

    // Clone os elementos de anúncio para preencher a área de exibição
    for (let i = 0; i < totalAds * 40; i++) {
        const originalAd = marketinsContainer.querySelector('p').cloneNode(true);
        marketinsContainer.appendChild(originalAd);

        // Clona o SVG e insere entre os elementos <p>
        const clonedSVG = svgToClone.cloneNode(true);
        marketinsContainer.insertBefore(clonedSVG, originalAd.nextSibling);
    }

    
    window.addEventListener('wheel', scroll);
    navi();

    for (let i = 0; i < liSections.length; i++) {
        liSections[0].classList.add('active'); 
        liSections[i].addEventListener("click", function() {
            navigateToView(sections[i]);
            currentSection = i;
            document.querySelector('.active').classList.remove('active');
            liSections[i].classList.add('active');
        });
    }
}


function scroll(event) {
    if (event.deltaY > 0) {
        navigateSections('down');
    } else {
        navigateSections('up');
    }
}

function navigateSections(direction) {
    const previousSection = sections[currentSection];
    if (direction === 'down') {
        if (currentSection === sections.length - 1) return;
        if (liSections[currentSection]) liSections[currentSection].classList.remove('active');
        currentSection++;
        liSections[currentSection].classList.add('active');
        navigateToView(sections[currentSection]);
    } else if (direction === 'up') {
        if (currentSection === 0) return;
        if (liSections[currentSection]) liSections[currentSection].classList.remove('active');
        currentSection--;
        liSections[currentSection].classList.add('active');
        navigateToView(sections[currentSection]);
    }

    // Definindo opacidade 0 para o .box-sec da seção anterior

    if (window.innerWidth > 780) {
    const previousBoxSec = previousSection.querySelector('.box-sec');
    if (previousBoxSec) {
        previousBoxSec.style.opacity = 0;
    }
    }

}

function navi() {
    for (let i = 0; i < sections.length; i++) {
        li = document.createElement('li');
        let numString = (i + 1).toString().padStart(2, '0');
        li.textContent = numString;
        elList.appendChild(li);
    }
    el.appendChild(elList);
    el.classList.add('menu');
    document.body.appendChild(el);
    naviElements();
}

function naviElements() {
    liSections = [...document.querySelectorAll('li')];
}

function navigateToView(event) {
    event.scrollIntoView({
        behavior: 'smooth',
        block: "start"
    });
}

document.addEventListener('DOMContentLoaded', main);



// Função para atualizar a posição dos elementos com base na classe da seção visível
function updateElementsPosition(entry) {
    const navElement = document.getElementById('nave');
    const explosionElement = document.querySelector('.explosion');
    const starwars = document.querySelector('.starwars');
    const sectionClass = entry.target.classList[0]; // Obtém a classe da seção visível

    // Definindo a opacidade de todas as seções para 0
    const allSections = document.querySelectorAll('.box-sec');
    allSections.forEach(section => {
        section.style.opacity = 0;
    });
    // Definindo opacidade 1 para o .box-sec da seção visível
    const currentSection = entry.target.querySelector('.box-sec');
    if (window.innerWidth < 780 && sectionClass === 'sck9') {
        starwars.style.opacity = 0;
    } else {
        starwars.style.opacity = 1;
    }

    if (currentSection) {
        currentSection.style.opacity = 1;
    } else {
        if (window.innerWidth < 780) {
            currentSection.style.opacity = 0;
        }
    }
    // Atualiza o menu
    const menuItems = document.querySelectorAll('.menu li');
    menuItems.forEach((menuItem, index) => {
        if (`sck${index + 1}` === sectionClass) {
            menuItem.classList.add('active');
        } else {
            menuItem.classList.remove('active');
        }
    });

    const position = {
        'sck1': 50,
        'sck2': 150,
        'sck3': 250,
        'sck4': 350,
        'sck5': 450,
        'sck6': 550,
        'sck7': 650,
        'sck8': 750,
        'sck9': 850
    };
    navElement.style.top = `${position[sectionClass]}%`;
    explosionElement.style.top = `${position[sectionClass]}%`;
}

// Observador de interseção para detectar quando uma seção está totalmente visível
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            updateElementsPosition(entry); // Atualiza a posição dos elementos
        }
    });
}, { threshold: 0.7 }); // Defina o limiar como 1 para detectar quando a seção está completamente visível

// Observar cada seção
sections.forEach(section => {
    observer.observe(section);
});



// Função para adicionar evento de clique aos cartões
function addClickEventToCards() {
    // Get all cards
    var cards = document.querySelectorAll(".card");
  
    // Loop through each card
    cards.forEach(function(card) {
      // Add click event listener to open corresponding modal
      card.addEventListener('click', function() {
        var modalContentPath = this.getAttribute('data-modal-content');
        // var productUrl = this.getAttribute('data-modal-url');
  
        // modalContentUrl.href = productUrl;
        modalContent.src = modalContentPath;
        modal.style.display = "block";
      });
    });
  }
  
  // Adicionar evento de clique aos cartões após a inicialização do Slick
  $('.carousel').on('afterChange', function(event, slick, currentSlide) {
    addClickEventToCards();
  });


// Adicionar evento de clique aos cartões no carregamento inicial da página
$(document).ready(function(){
    $('.carousel').slick({
      slidesToShow: 6, // Alterado para 6 para desktops
      slidesToScroll: 1,
      arrows: true,
      dots: false,
      prevArrow: '<button type="button" class="slick-prev"><i class="fa-solid fa-angle-left"></i></button>',
      nextArrow: '<button type="button" class="slick-next"><i class="fa-solid fa-angle-right"></i></button>',
      // Chame a função para adicionar o evento de clique aos cartões no carregamento inicial
      init: function(event, slick) {
        addClickEventToCards();
      },
      responsive: [
        {
          breakpoint: 780, // Para dispositivos móveis
          settings: {
            slidesToShow: 3 // Alterado para 3 para dispositivos móveis
          }
        }
      ]
    });
});

// Get the modal
var modal = document.getElementById("myModal");

// Get the modal content element
var modalContent = document.getElementById("modalImg");
// var modalContentUrl = document.getElementById("productUrl");

// Get the close button
var span = document.getElementsByClassName("close")[0];

// Get all cards
var cards = document.querySelectorAll(".card");

// Loop through each card
cards.forEach(function(card) {
  // Add click event listener to open corresponding modal
  card.addEventListener('click', function() {
    var modalContentPath = this.getAttribute('data-modal-content');
    var productUrl = this.getAttribute('data-modal-url');


    // modalContentUrl.href = productUrl;
    modalContent.src = modalContentPath;
    modal.style.display = "block";
  });
});

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
