const nav = document.querySelector(".nav");
const logo1 = document.querySelector(".first-logo");
const logo2 = document.querySelector(".res-logo");
window.addEventListener("scroll", () => {
  if (window.scrollY > nav.offsetHeight) {
    nav.classList.add("added");
    logo1.style.display = "none";
    logo2.style.display = "block";
  } else {
    nav.classList.remove("added");
    logo1.style.display = "block";
    logo2.style.display = "none";
  }
});
// hero title
const heroTitle = document.querySelector(".hero-title h1");
window.addEventListener("load", function () {
  let j = 0;
  const test = setInterval(function () {
    heroTitle.innerHTML = "HZEL";
    heroTitle.classList.add("tada");
    if (j >= 4) {
      heroTitle.innerHTML = "MINIMALIST";
      heroTitle.classList.add("tada");
    }
    if (j >= 8) {
      heroTitle.innerHTML = "POWERFUL";
      heroTitle.classList.add("tada");
    }
    j++;
  }, 1000);
});
// icon box
let i = 0;
let servicesTitle = document.querySelector(".services-title-icon h3");
let servicesP = document.querySelector(".services-title-icon p");
const demo = setInterval(() => {
  document.getElementById("1").style.animation = "resizeBox 1s infinite";
  servicesTitle.innerHTML = "Brand New Features";
  servicesP.innerHTML = `Competently transform proactive internal or "organic".`;
  i++;
  console.log(i);
  if (i > 5) {
    document.getElementById("1").style.animation = "unset";
    document.getElementById("2").style.animation = "resizeBox 1s infinite";
    servicesTitle.innerHTML = "Done Awesomely";
    servicesP.innerHTML =
      "Quicquam fratrum declivia graviate.Nam coegit alto unda";
  }
  if (i >= 10) {
    document.getElementById("2").style.animation = "unset";
    document.getElementById("3").style.animation = "resizeBox 1s infinite";
    servicesTitle.innerHTML = "100% Mobile Ready";
    servicesP.innerHTML =
      "Pumaro divino toto prima ensis. Cingebant uno pluvialibus.";
  }
  if (i >= 15) {
    document.getElementById("3").style.animation = "unset";
    document.getElementById("4").style.animation = "resizeBox 1s infinite";
    servicesTitle.innerHTML = "Award Winning";
    servicesP.innerHTML =
      "Nitidis locum auroram dissaepserat ulla dextra rapidisque";
  }
  if (i >= 20) {
    document.getElementById("4").style.animation = "unset";
    document.getElementById("5").style.animation = "resizeBox 1s infinite";
    servicesTitle.innerHTML = "New Technology";
    servicesP.innerHTML =
      "Phosfluorescently redefine plug-and-play best practices";
  }
  if (i >= 25) {
    document.getElementById("5").style.animation = "unset";
    document.getElementById("6").style.animation = "resizeBox 1s infinite";
    servicesTitle.innerHTML = "Ultimate Solution";
    servicesP.innerHTML = "Nam coegit alta unda austro liberioris effigiem?";
  }
  if (i >= 30) {
    document.getElementById("6").style.animation = "unset";
    i = 0;
  }
}, 1000);
document.querySelector("body").addEventListener("pointerover", function (e) {
  const demo2 = setTimeout(function () {
    if (e.target.id === "1") {
      document.getElementById("1").style.animation = "resizeBox 1s infinite";
      servicesTitle.innerHTML = "Brand New Features";
      document.querySelector(
        ".services-title-icon p"
      ).innerHTML = `Competently transform proactive internal or "organic".`;
      document.getElementById("2").style.animation = "unset";
      document.getElementById("3").style.animation = "unset";
      document.getElementById("4").style.animation = "unset";
      document.getElementById("5").style.animation = "unset";
      document.getElementById("6").style.animation = "unset";
      clearTimeout(demo);
    }
    if (e.target.id === "2") {
      document.getElementById("2").style.animation = "resizeBox 1s infinite";
      document.getElementById("1").style.animation = "unset";
      document.getElementById("3").style.animation = "unset";
      document.getElementById("4").style.animation = "unset";
      document.getElementById("5").style.animation = "unset";
      document.getElementById("6").style.animation = "unset";
      servicesTitle.innerHTML = "Done Awesomely";
      servicesP.innerHTML =
        "Quicquam fratrum declivia graviate.Nam coegit alto unda";
    }
    if (e.target.id === "3") {
      document.getElementById("3").style.animation = "resizeBox 1s infinite";
      document.getElementById("2").style.animation = "unset";
      document.getElementById("1").style.animation = "unset";
      document.getElementById("4").style.animation = "unset";
      document.getElementById("5").style.animation = "unset";
      document.getElementById("6").style.animation = "unset";
      servicesTitle.innerHTML = "100% Mobile Ready";
      servicesP.innerHTML =
        "Pumaro divino toto prima ensis. Cingebant uno pluvialibus.";
    }
    if (e.target.id === "4") {
      document.getElementById("4").style.animation = "resizeBox 1s infinite";
      document.getElementById("2").style.animation = "unset";
      document.getElementById("1").style.animation = "unset";
      document.getElementById("3").style.animation = "unset";
      document.getElementById("5").style.animation = "unset";
      document.getElementById("6").style.animation = "unset";
      servicesTitle.innerHTML = "Award Winning";
      servicesP.innerHTML =
        "Nitidis locum auroram dissaepserat ulla dextra rapidisque";
    }
    if (e.target.id === "5") {
      document.getElementById("5").style.animation = "resizeBox 1s infinite";
      document.getElementById("2").style.animation = "unset";
      document.getElementById("1").style.animation = "unset";
      document.getElementById("3").style.animation = "unset";
      document.getElementById("4").style.animation = "unset";
      document.getElementById("6").style.animation = "unset";
      servicesTitle.innerHTML = "New Technology";
      servicesP.innerHTML =
        "Phosfluorescently redefine plug-and-play best practices";
    }
    if (e.target.id === "6") {
      document.getElementById("6").style.animation = "resizeBox 1s infinite";
      document.getElementById("2").style.animation = "unset";
      document.getElementById("1").style.animation = "unset";
      document.getElementById("3").style.animation = "unset";
      document.getElementById("5").style.animation = "unset";
      document.getElementById("4").style.animation = "unset";
      servicesTitle.innerHTML = "Ultimate Solution";
      servicesP.innerHTML = "Nam coegit alta unda austro liberioris effigiem?";
    }
  }, 1000);
});
// menu
let burgerMenu = document.querySelector(".nav .menu");
let windowSize = window.innerWidth;
windowSize = 1100;
document.querySelector("body").addEventListener("click", function (event) {
  if (event.target.id === "burgerMenu") {
    burgerMenu.classList.toggle("toggl-display");
  } else {
    burgerMenu.classList.remove("toggl-display");
    // burgerMenu.style.display = "flex";
    // burgerMenu.style.flexDirection = "row";
    console.log("hi");
  }
});
// form validation in contact
const name2 = document.getElementById("name");
const email = document.getElementById("email");
const textArea2 = document.getElementById("textarea");
const subject = document.getElementById("subject");
const submitForm = document.querySelector(".form-control .btn");
if (submitForm) {
  submitForm.addEventListener("click", function (e) {
    e.preventDefault();
    if (document.myForm.Name.value == "") {
      name2.style.border = "1px solid red";
    }
    let check = document.myForm.Email.value.includes("@gmail.com");
    if (document.myForm.Email.value == "" && !check) {
      email.style.border = "1px solid red";
    }
    if (document.myForm.Textarea.value == "") {
      textArea2.style.border = "1px solid red";
    }
    if (document.myForm.Subject.value == "") {
      subject.style.border = "1px solid red";
    }
    return true;
  });
}
if (name2) {
  name2.addEventListener("keyup", function () {
    if (document.myForm.Name.value !== "") {
      name2.style.border = "1px solid green";
    }
  });
}
if (email) {
  email.addEventListener("keyup", function () {
    let check = document.myForm.Email.value.includes("@gmail.com");
    if (document.myForm.Email.value !== "" && check) {
      email.style.border = "1px solid green";
    }
  });
}
if (textArea2) {
  textArea2.addEventListener("keyup", function () {
    if (document.myForm.Textarea.value !== "") {
      textArea2.style.border = "1px solid green";
    }
  });
}
if (subject) {
  subject.addEventListener("keyup", function () {
    if (document.myForm.Subject.value !== "") {
      subject.style.border = "1px solid green";
    }
  });
}
if (submitForm) {
  submitForm.addEventListener("click", function () {
    if (
      document.myForm.Name.value !== "" &&
      document.myForm.Email.value !== ""
    ) {
      submitForm.innerHTML = "submitting...";
      const setInput = setInterval(function () {
        email.value = "";
        name2.value = "";
        textArea2.value = "";
        subject.value = "";
        subject.style.border = "1px solid var(--line-color)";
        textArea2.style.border = "1px solid var(--line-color)";
        email.style.border = "1px solid var(--line-color)";
        name2.style.border = "1px solid var(--line-color)";
        submitForm.innerHTML = "submitted";
      }, 4000);
    }
  });
}
// jquery
$(function () {
  // let burgerMenu = document.querySelector(".nav .menu");
  // let windowSize = window.innerWidth;
  // $("body").click(function (event) {
  //   if (event.target.id === "burgerMenu") {
  //     burgerMenu.toggleClass("toggl-display");
  //   } else {
  //     burgerMenu.removeClass("toggl-display");
  //   }
  //   if (windowSize > 1100) {
  //     burgerMenu.removeClass("toggl-display");
  //   }
  // });
  // menu
  $(function () {
    $(".nav ul li a").click(function () {
      const go = $(this.hash).offset().top - $(".nav").height();
      $("body ,html").animate({ scrollTop: go }, 500);
    });
  });
  //  color links change
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    let windowResize = $(window).innerWidth();
    if (scroll >= 100 && windowResize > 1100) {
      $(".menu .home").css("color", "white");
      $(".menu .about2").css("color", "var(--text-light)");
      $(".menu .servicess").css("color", "var(--text-light)");
      $(".menu .work2").css("color", "var(--text-light)");
      $(".menu .client2").css("color", "var(--text-light)");
      $(".menu .contact2").css("color", "var(--text-light)");
    }
    if (scroll > 675 && windowResize > 1100) {
      $(".menu .about2").css("color", "white");
      $(".menu .home").css("color", "var(--text-light)");
    }
    if (scroll > 1371 && windowResize > 1100) {
      $(".menu .about2").css("color", "var(--text-light)");
      $(".menu .servicess").css("color", "white");
    }
    if (scroll > 2827 && windowResize > 1100) {
      $(".menu .servicess").css("color", "var(--text-light)");
      $(".menu .work2").css("color", "white");
    }
    if (scroll > 4063.5 && windowResize > 1100) {
      $(".menu .work2").css("color", "var(--text-light)");
      $(".menu .client2").css("color", "white");
    }
    if (scroll > 4913.5 && windowResize > 1100) {
      $(".menu .client2").css("color", "var(--text-light)");
      $(".menu .contact2").css("color", "white");
    } else if (scroll < 100) {
      $(".menu .home").css("color", "var(--text-light)");
    }
  });
  // hero img
  let topLeftPic = parseInt($(".hero-left-pic").css("top"));
  let topRightPic = parseInt($(".hero-right-pic").css("top"));
  let topAnimate = parseInt($(".hero-animate").css("top"));
  $(window).scroll(function () {
    let currTopLeftPic = topLeftPic - $(this).scrollTop();
    let currTopRightPic = topRightPic - $(this).scrollTop();
    let currTopAnimate = topAnimate + $(this).scrollTop() / 2;
    $(".hero-left-pic").css("top", currTopLeftPic + "px");
    $(".hero-right-pic").css("top", currTopRightPic + "px");
    $(".hero-animate").css("top", currTopAnimate + "px");
  });
  // clients
  $(".clients-profile .any-profile").mouseover(function () {
    $(this)
      .parents(".clients-profile")
      .children(".any-profile")
      .removeClass("active-clients");
    $(this).addClass("active-clients");
    $(".all-clients .clients-description").hide();
    console.log();
    $(".all-clients ." + $(this).data("shape")).show();
  });
  // work
  $(".our-work ul li").click(function () {
    $(this).parents("ul").children("li").removeClass("active");
    $(this).addClass("active-clients");
    $(this).addClass("active");
    $(".our-work .all").fadeOut();
    $(".our-work ." + $(this).data("select")).fadeIn();
  });
  // slider
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });
  // elevator
  $(".elevator").click(function () {
    $("body , html").animate({ scrollTop: 0 }, 1000);
  });
  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      $(".elevator").fadeIn();
    } else {
      $(".elevator").fadeOut();
    }
  });
  // loader
  $(window).on("load", function () {
    $(".loader").fadeOut();
  });
});
