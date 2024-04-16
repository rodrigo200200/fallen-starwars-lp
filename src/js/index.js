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
import "../img/prod-thumb-1.webp";



const sections = document.querySelectorAll('section');
const el = document.createElement('div');
const elList = document.createElement('ul');

let liSections = [];
let li = [];

let currentSection = 0;
let touchStartY = 0;
let touchEndY = 0;

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
    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchend', handleTouchEnd);
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

function handleTouchStart(evt) {
    touchStartY = evt.touches[0].clientY;
};

function handleTouchEnd(evt) {
    touchEndY = evt.changedTouches[0].clientY;
    const touchTarget = evt.target;

    // Verificar se o toque ocorreu dentro da área do Slick Carousel
    if (touchTarget.closest('.slick-slider')) {
        // Se sim, não execute a ação de passar sessões
        return;
    }

    // Executar ação de passar sessões apenas se o toque não estiver na área do Slick Carousel
    if (touchStartY > touchEndY) {
        navigateSections('down');
    } else {
        navigateSections('up');
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
    const previousBoxSec = previousSection.querySelector('.box-sec');
    if (previousBoxSec) {
        previousBoxSec.style.opacity = 0;
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
function updateElementsPosition(sectionClass) {
    const navElement = document.getElementById('nave');
    const explosionElement = document.querySelector('.explosion');
    const starwars = document.querySelector('.starwars');

        // Definindo a opacidade de todas as seções para 0
        const allSections = document.querySelectorAll('.box-sec');
        allSections.forEach(section => {
            section.style.opacity = 0;
        });
    const currentSection = document.querySelector(`.${sectionClass} .box-sec`);
    currentSection.style.opacity = 1;
    if (window.innerWidth < 780) {
        const positionStaTop = {
            'sck1': 2,
            'sck2': 124,
            'sck3': 225,
            'sck4': 319,
            'sck5': 427,
            'sck6': 525,
            'sck7': 624,
            'sck8': 724,
            'sck9': 819
        };
        const positionStaLeft = {
            'sck1': 39,
            'sck2': 52,
            'sck3': 52,
            'sck4': 52,
            'sck5': 52,
            'sck6': 56,
            'sck7': 54,
            'sck8': 52,
            'sck9': 12
        };
        starwars.style.top = `${positionStaTop[sectionClass]}%`;
        starwars.style.left = `${positionStaLeft[sectionClass]}%`;
      } else {
        const positionStaTop = {
            'sck1': 3,
            'sck2': 145,
            'sck3': 245,
            'sck4': 322,
            'sck5': 445,
            'sck6': 539,
            'sck7': 633,
            'sck8': 715.1,
            'sck9': 819
        };
        const positionStaLeft = {
            'sck1': 46,
            'sck2': 34,
            'sck3': 53,
            'sck4': 12,
            'sck5': 12,
            'sck6': 12,
            'sck7': 12,
            'sck8': 55.8,
            'sck9': 12
        };
        starwars.style.top = `${positionStaTop[sectionClass]}%`;
        starwars.style.left = `${positionStaLeft[sectionClass]}%`;
      }
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
            const sectionClass = entry.target.classList[0]; // Obtém a classe da seção visível
            updateElementsPosition(sectionClass); // Atualiza a posição dos elementos
        }
    });
}, { threshold: 1 }); // Defina o limiar como 1 para detectar quando a seção está completamente visível

// Observar cada seção
sections.forEach(section => {
    observer.observe(section);
});



$(document).ready(function(){
    $('.carousel').slick({
      slidesToShow: 6,
      slidesToScroll: 1,
      arrows: true,
      dots: false,
      prevArrow: '<button type="button" class="slick-prev"><i class="fa-solid fa-angle-left"></i></button>',
      nextArrow: '<button type="button" class="slick-next"><i class="fa-solid fa-angle-right"></i></button>'

    });
  });


// Get the modal
var modal = document.getElementById("myModal");

// Get the modal content element
var modalContent = document.getElementById("modalImg");
var modalContentUrl = document.getElementById("productUrl");

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


    modalContentUrl.href = productUrl;
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
