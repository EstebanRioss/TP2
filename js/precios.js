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
  

$(document).ready(function () {
    // Inicializar tooltips
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.forEach(function (el) {
      new bootstrap.Tooltip(el);
    });

    // Función para setear precios según toggle
    function updatePrices() {
      var isMonthly = $('#monthly').is(':checked');
      $('.plan-price').each(function () {
        var $this = $(this);
        var monthly = $this.data('monthly-price');
        var annual = $this.data('annual-price');
        $this.text(isMonthly ? '$' + monthly : '$' + annual);
      });
    }

    // Al cargar y al cambiar toggle
    updatePrices();
    $('input[name="pricing-toggle"]').change(updatePrices);
  });