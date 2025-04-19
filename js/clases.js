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