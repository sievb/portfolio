particlesJS('particles-js', {
  "particles": {
    "number": {
      "value": 100,
      "density": {
        "enable": true,
        "value_area": 1000
      }
    },
    "color": {
      "value": ["#f1f1f1", "#4717f6", "#c98fff"]
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
      "value": 0.6,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 0.7,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 4,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 75,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
    },
    "move": {
      "enable": true,
      "speed": 0.4,
      "direction": "none",
      "random": true,
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
        "mode": "bubble"
      },
      "onclick": {
        "enable": true,
        "mode": "repulse"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 800,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 150,
        "size": 4,
        "duration": 1,
        "opacity": 1,
        "speed": 1
      },
      "repulse": {
        "distance": 150,
        "duration": 0.2
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
}
);
