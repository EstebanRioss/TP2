document.addEventListener("DOMContentLoaded", () => {
  const includeHTML = (selector, url) => {
    fetch(url)
      .then(res => res.text())
      .then(data => {
        document.querySelector(selector).innerHTML = data;
      });
  };

  includeHTML("header", "../layouts/header.html");
  includeHTML("footer", "../layouts/footer.html");
});

const toggleTheme = () => {
  const current = document.documentElement.getAttribute("data-theme");
  document.documentElement.setAttribute("data-theme", current === "dark" ? "light" : "dark");
  localStorage.setItem("theme", current === "dark" ? "light" : "dark");
};

window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    document.documentElement.setAttribute("data-theme", savedTheme);
  } else {
    document.documentElement.setAttribute("data-theme", "light");
  }
});
$(window).on('scroll', function() {
  var scrollPos = $(window).scrollTop();
  var sectionTop = $('.hero').offset().top;
  var sectionHeight = $('.hero').outerHeight();

  if (scrollPos > sectionTop - sectionHeight / 2) {
    // Activar animaciones si se está viendo la sección
    $('.hero-title').removeClass('d-none').addClass('animate__fadeInUp');
    $('.hero-subtitle').removeClass('d-none').addClass('animate__fadeInUp');
    $('.hero-button').removeClass('d-none').addClass('animate__fadeInUp');
  }
});

$(document).ready(function() {
  // Animar las tarjetas al hacer scroll
  $(window).scroll(function() {
    $('.card').each(function() {
      var cardPos = $(this).offset().top;
      var windowScroll = $(window).scrollTop();
      if (cardPos < windowScroll + $(window).height() - 100) {
        $(this).addClass('animate__animated animate__fadeInUp');
      }
    });
  });
});

$(document).ready(function () {
  let animated = false;

  function isScrolledIntoView(elem) {
    let docViewTop = $(window).scrollTop();
    let docViewBottom = docViewTop + $(window).height();
    let elemTop = $(elem).offset().top;
    let elemBottom = elemTop + $(elem).height();

    return (elemBottom <= docViewBottom && elemTop >= docViewTop);
  }

  $(window).on("scroll", function () {
    if (!animated && isScrolledIntoView('.counter-value')) {
      animated = true;

      $(".counter-value").each(function () {
        let $this = $(this);
        let target = parseInt($this.attr("data-target"));
        $({ countNum: 0 }).animate(
          { countNum: target },
          {
            duration: 2000,
            easing: "swing",
            step: function () {
              $this.text(Math.floor(this.countNum));
            },
            complete: function () {
              $this.text(this.countNum);
            }
          }
        );
      });
    }
  });
});
$(document).ready(function () {
  function fadeElementsOnScroll() {
    $('.fade-on-scroll').each(function () {
      if ($(this).offset().top < $(window).scrollTop() + $(window).height() - 50) {
        $(this).addClass('fade-in');
      }
    });
  }

  $(window).on('scroll', fadeElementsOnScroll);
  fadeElementsOnScroll(); // por si ya están visibles al cargar
});

$(document).ready(function () {
  function fadeElementsOnScroll() {
    $('.fade-on-scroll').each(function () {
      if ($(this).offset().top < $(window).scrollTop() + $(window).height() - 50) {
        $(this).addClass('fade-in');
      }
    });
  }

  $(window).on('scroll', fadeElementsOnScroll);
  fadeElementsOnScroll();
});

(function($) {
  'use strict';

  const $form = $('#newsletterForm');
  const $btn = $form.find('button[type="submit"]');
  const $spinner = $btn.find('.spinner-border');
  const $btnText = $btn.find('.btn-text');

  $form.on('submit', function(e) {
    e.preventDefault();
    e.stopPropagation();

    // disparar validación Bootstrap
    if (this.checkValidity() === false) {
      $(this).addClass('was-validated');
      return;
    }

    // Form válido → mostrar spinner
    $form.addClass('was-validated');
    $btn.prop('disabled', true);
    $spinner.removeClass('d-none');
    $btnText.text('Enviando...');

    // Simular envío AJAX (aquí reemplazas con tu llamado real)
    setTimeout(function() {
      // una vez terminado:
      $spinner.addClass('d-none');
      $btnText.text('¡Listo!');
      // opcional: resetear form
      // $form[0].reset();
      // $form.removeClass('was-validated');
    }, 2000);
  });
})(jQuery);

$(document).ready(function () {
  // Animaciones al hacer scroll
  function fadeElementsOnScroll() {
    $('.fade-on-scroll').each(function () {
      if ($(this).offset().top < $(window).scrollTop() + $(window).height() - 50) {
        $(this).addClass('fade-in');
      }
    });
  }

  $(window).on('scroll', fadeElementsOnScroll);
  fadeElementsOnScroll();

  // Filtro de clases
  $('.filter-btn').click(function () {
    let filter = $(this).data('filter');

    $('.filter-btn').removeClass('active');
    $(this).addClass('active');

    if (filter === "all") {
      $('.class-card').show();
    } else {
      $('.class-card').hide();
      $('.' + filter).fadeIn();
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const gridItems = document.querySelectorAll(".grid-item");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); // Solo una vez
        }
      });
    },
    { threshold: 0.1 }
  );

  gridItems.forEach((item) => {
    observer.observe(item);
  });
});
$(document).ready(function () {
  const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
          if (entry.isIntersecting) {
              $(entry.target).addClass("visible");
              observer.unobserve(entry.target);
          }
      });
  }, { threshold: 0.1 });

  $(".animate-on-scroll").each(function () {
      observer.observe(this);
  });
});
$(document).ready(function () {
  const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
          if (entry.isIntersecting) {
              $(entry.target).addClass("visible");
              observer.unobserve(entry.target);
          }
      });
  }, { threshold: 0.1 });

  $(".animate-on-scroll").each(function () {
      observer.observe(this);
  });
});