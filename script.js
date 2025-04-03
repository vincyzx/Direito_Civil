particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });

  
  document.addEventListener("DOMContentLoaded", function() {
    VanillaTilt.init(document.querySelectorAll(".card"), {
        max: 15,
        speed: 400,
        glare: true,
        "max-glare": 0.1,
    });
});

document.addEventListener("DOMContentLoaded", function () {
  const accordions = document.querySelectorAll(".accordion-item");

  accordions.forEach((item) => {
      const header = item.querySelector(".accordion-header");

      header.addEventListener("click", function () {
          const content = item.querySelector(".accordion-content");

          // Fecha todos os outros antes de abrir o clicado
          accordions.forEach((acc) => {
              if (acc !== item) {
                  acc.classList.remove("active");
                  acc.querySelector(".accordion-content").style.height = "0px";
              }
          });

          // Alterna o accordion clicado
          if (item.classList.contains("active")) {
              item.classList.remove("active");
              content.style.height = "0px";
          } else {
              item.classList.add("active");
              content.style.height = content.scrollHeight + "px"; // Define a altura real
          }
      });
  });
});


document.addEventListener("DOMContentLoaded", function() {
  const buttons = document.querySelectorAll(".btn");
  buttons.forEach(button => {
      button.addEventListener("mouseenter", () => {
          button.style.transform = "scale(1.1)";
      });
      button.addEventListener("mouseleave", () => {
          button.style.transform = "scale(1)";
      });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const botaoVerMais = document.getElementById("verMais");
  const secaoDestino = document.getElementById("oq");

  if (botaoVerMais && secaoDestino) {
      botaoVerMais.addEventListener("click", function () {
          secaoDestino.scrollIntoView({
              behavior: "smooth",
              block: "start"
          });
      });
  }
});


