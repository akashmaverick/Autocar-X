AOS.init({ once: false });

document.getElementById("hamburgerBtn").onclick = () => {
  document.getElementById("mobileMenu").classList.add("active");
};
document.getElementById("closeMenu").onclick = () => {
  document.getElementById("mobileMenu").classList.remove("active");
};

function selectLocation(name) {
  document.getElementById("locationText").textContent = name;
}

$(".mobile-sidebar .btn-login").on("click", function () {
  $("#mobileMenu").removeClass("active");
});

// Counter Animation
document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".counter");
  const speed = 200;

  const animateCounter = (counter) => {
    const updateCount = () => {
      const target = +counter.getAttribute("data-target");
      const count = +counter.innerText;
      const increment = target / speed;

      if (count < target) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(updateCount, 20);
      } else {
        counter.innerText = target;
      }
    };
    updateCount();
  };

  const observer = new IntersectionObserver(
    (entries, observerRef) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observerRef.unobserve(entry.target);
        }
      });
    },
    { threshold: 1 }
  );

  counters.forEach((counter) => observer.observe(counter));
});

// location

const locationSwiper = new Swiper(".locations-swiper", {
  loop: true,
  spaceBetween: 20,
  slidesPerView: "auto",
  speed: 3000,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
  freeMode: true,
  grabCursor: true,
});

// Swiper

const swiper = new Swiper(".testimonials-swiper", {
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  speed: 1000,
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
    1280: {
      slidesPerView: 4,
    },
  },
});
