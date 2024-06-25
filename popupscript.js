document.addEventListener("DOMContentLoaded", function() {
    const thumbnails = document.querySelectorAll(".thumbnail");
    const popup = document.getElementById("imagePopup");
    const popupImg = document.getElementById("popupImg");
    const popupCaption = document.getElementById("popupCaption");
    const popupClose = document.getElementById("popupClose");
    const popupOverlay = document.getElementById("popupOverlay");

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener("click", function() {
            const imgSrc = this.querySelector("img").src;
            const imgAlt = this.querySelector("img").alt;
            console.log("Works?");
            popup.style.display = "block";
            popupImg.src = imgSrc;
            popupCaption.innerHTML = imgAlt;
        });
    });

    popupClose.addEventListener("click", function() {
        popup.style.display = "none";});

        popupOverlay.addEventListener("click", function() {
            popup.style.display = "none";
        });
    });
