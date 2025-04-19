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
$(document).ready(function() {
  $('.trainer-card').on('click', function() {
    $(this).find('.trainer-card-inner').toggleClass('is-flipped');
  });
});
$(document).ready(function () {
  $('.progress').each(function () {
    const porcentaje = $(this).data('skill');
    const barra = $(this).find('.progress-bar');

    barra.animate(
      { width: porcentaje + '%' },
      {
        duration: 1000,
        step: function (now) {
          barra.text(Math.floor(now) + '%');
        }
      }
    );
  });
});
$(document).ready(function () {
  // Delay animación al cargar
  setTimeout(function () {
    $('.animate-text').each(function (i) {
      let $el = $(this);
      setTimeout(function () {
        $el.addClass('show');
      }, i * 200);
    });
  }, 300);
});