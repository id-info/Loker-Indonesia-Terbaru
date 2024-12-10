document.addEventListener("DOMContentLoaded", function () {
  const marqueeText = document.querySelector(".marquee span");

  // Tambahkan CSS animation secara langsung
  marqueeText.style.display = "inline-block";
  marqueeText.style.animation = "marquee 15s linear infinite";

  // Tambahkan keyframes untuk animasi
  const style = document.createElement("style");
  style.textContent = `
    @keyframes marquee {
      0% { transform: translateX(100%); }
      100% { transform: translateX(-100%); }
    }
  `;
  document.head.appendChild(style);
});
