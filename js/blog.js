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
  $(document).ready(function(){
    // IntersectionObserver para revelar elementos al hacer scroll
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          observer.unobserve(e.target);
        }
      });
    }, { threshold: 0.1 });

    // Observar artículos, sidebar y comentarios
    $('.article, .sidebar, .comment').each(function(){
      observer.observe(this);
    });

    // Filtros con jQuery
    $('.filter-btn').click(function(){
      var f = $(this).data('filter');
      $('.filter-btn').removeClass('active');
      $(this).addClass('active');
      if(f === 'all'){
        $('.article').show();
      } else {
        $('.article').hide().filter(function(){
          return $(this).data('tags').toString().split(',').includes(f);
        }).show();
      }
    });
  });