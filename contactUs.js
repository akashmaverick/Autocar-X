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