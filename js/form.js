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
$(function(){
    // Scroll reveal
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if(e.isIntersecting) {
          e.target.classList.add('visible');
          observer.unobserve(e.target);
        }
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  
    // Form validation & submission
    $('#contactForm').on('submit', function(e){
      e.preventDefault();
      let valid = true;
      const $form = $(this);
  
      // Reset previous state
      $form.find('.form-control').removeClass('is-invalid');
  
      // Validate each input
      $form.find('.form-control').each(function(){
        const $input = $(this);
        if(!this.checkValidity()) {
          $input.addClass('is-invalid');
          valid = false;
        }
      });
  
      if(!valid) return;
  
      // Show spinner & disable button
      const $btn = $('#submitBtn');
      $btn.prop('disabled', true).find('.spinner-border').removeClass('d-none');
  
      // Simulate async
      setTimeout(() => {
        $btn.prop('disabled', false).find('.spinner-border').addClass('d-none');
        // Reset form
        $form[0].reset();
        // Show modal
        const modal = new bootstrap.Modal($('#confirmationModal'));
        modal.show();
      }, 1500);
    });
  });