$(window).on("load", function () {
  //preloader
  $(".pre-loader").fadeOut("500", function () {
    $("body").removeClass("overflow");
    $(this).remove();
  });

  if ($(".pre-loader").length == 0) {
    $("body").removeClass("overflow");
  }

  // animate on scroll

  AOS.init({
    duration: 700,
    mirror: true,
    once: true,
    disable: function () {
      var maxWidth = 992;
      return window.innerWidth < maxWidth;
    },
    easing: "ease-in-out",
  });

  //nava toggle
  $("#nava-icon").click(function (e) {
    $("#nava").toggleClass("nava-active");
    $("html").toggleClass("overflow");
  });

  $("#nava").click(function (e) {
    if (
      e.target.id == "nava" ||
      e.target.id == "close-nava" ||
      e.target.parentNode.id == "close-nava"
    ) {
      $(this).removeClass("nava-active");
      $("html").removeClass("overflow");
    }
  });

  //search toggle
  $("#search-btn").click(function (e) {
    $("#search-form").toggleClass("search-form-active");
    $("html").toggleClass("overflow");
  });

  $("#search-form").click(function (e) {
    if (
      e.target.id == "search-form" ||
      e.target.id == "close-search" ||
      e.target.parentNode.id == "close-search"
    ) {
      $(this).removeClass("search-form-active");
      $("html").removeClass("overflow");
    }
  });

  $(".slide").on("click", function (e) {
    if (
      (e.target.classList.contains("drop") &&
        e.target.parentNode.classList.contains("slide")) ||
      e.target.classList.contains("slide")
    ) {
      e.stopPropagation();
      $(this).toggleClass("slide-active");
      $(this).children(".top-dropDown").slideToggle();
    }
  });

  function changeSlide() {
    if (window.innerWidth <= 992) {
      $(".sm-slide").removeClass("top-setting");
      $(".sm-slide").addClass("slide");
      $(".sm-slide .top-dropDown").css("display", "none");

      // add swipers
      $('.swiper-container-here').addClass('s-swiper-container');
      $('.swiper-container-here .swiper-wrapper-here').addClass('swiper-wrapper');
      $('.swiper-container-here .swiper-slide-here').addClass('swiper-slide');
    } else {
      $(".sm-slide").addClass("top-setting");
      $(".sm-slide").removeClass("slide");
      $(".sm-slide .top-dropDown").css("display", "flex");

       // remove swipers
       $('.swiper-container-here').removeClass('s-swiper-container');
       $('.swiper-container-here .swiper-wrapper-here').removeClass('swiper-wrapper');
       $('.swiper-container-here .swiper-slide-here').removeClass('swiper-slide');
    }
  }

  changeSlide();

  window.addEventListener("resize", changeSlide);

  // add footer collabse
  function addCollapse() {
    if (window.innerWidth <= 992) {
      $(".footer-list").attr("data-toggle", "collapse");
      $(".footer-list .slide-down").addClass("collapse");
    } else {
      $(".footer-list").attr("data-toggle", "none");
      $(".footer-list .slide-down").removeClass("collapse");
      $(".footer-list .slide-down").css("height", "auto");
    }
  }

  $('.footer-list a').click(function (e) { 
    e.stopPropagation();
  });

  addCollapse();
  window.addEventListener("resize", addCollapse);

  $(".footer-list").on("click", function (e) {
    if (window.innerWidth <= 992) {
      e.preventDefault();
      $(this).toggleClass("footer-list-active");
    }
  });

  var mySwiper = new Swiper("header .swiper-container", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    updateOnWindowResize: true,
    autoplay: {
      delay: 5000,
    },

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var mySwiper1 = new Swiper(".brands-swiper-container", {
    direction: "horizontal",
    loop: true,
    updateOnWindowResize: true,
    slidesPerView: 6,
    spaceBetween: 35,
    autoplay: {
      delay: 5000,
    },

    breakpoints: {
      1200: {
        slidesPerView: 6,
      },
      992: {
        slidesPerView: 4,
      },
      576: {
        slidesPerView: 3,
      },
      0: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
    },

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var mySwiper2 = new Swiper('.s-swiper-container', {
    direction: 'horizontal',
    loop: true,
    updateOnWindowResize: true,
    slidesPerView: 4,
    spaceBetween: 20,
    autoplay: false,
    allowTouchMove: false,

    breakpoints: {
      1200: {
        slidesPerView: 4,
      },
      576: {
        slidesPerView: 2,
        allowTouchMove: true,
        autoplay: {
          delay: 4000,
        }
      },
      0: {
        slidesPerView: 1,
        allowTouchMove: true,
        autoplay: 4000,
      }
    },

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

  });

  if (window.innerWidth <= 1200 && $('.s-swiper-container').length) {
    setInterval(function () {
      mySwiper2.forEach(element => {
        element.slideNext();
      });
    }, 4000);
  }

  window.addEventListener("scroll", scrolled);

  function scrolled() {
    let up = document.getElementById("up");
    if (this.scrollY > 200) {
      up.classList.add("active-up");
    } else {
      up.classList.remove("active-up");
    }
  }

  //gallery
  lightGallery(document.getElementById('lightgallery'));

});
