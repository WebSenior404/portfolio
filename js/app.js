AOS.init();
var typed = new Typed('#element', {
    strings: ['HTML5', 'CSS' , 'SCSS' , 'BOTSTRAP','TAILWIND CSS' ,'JAVA SCRIPT' ,'VUEJS' , 'NUXTJS' , ],
    typeSpeed: 150,
    backSpeed: 50,
    loop: true,
    backDelay: 1500,
  });
  let dropdownMenu = document.querySelector(".dropdown-menu");
  let dropdown = document.querySelector(".dropdown-trigger");
  dropdown.addEventListener("click" , ()=>{
    dropdownMenu.classList.toggle = "show";
  })