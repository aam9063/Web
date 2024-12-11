document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
      document.getElementById("welcomePopup").style.display = "block";
    }, 3000);

    document.getElementById("closePopupBtn").addEventListener("click", () => {
      document.getElementById("welcomePopup").style.display = "none";
    });
  });