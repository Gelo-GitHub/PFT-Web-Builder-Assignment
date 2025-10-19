function openSidebar() {
  document.getElementById("sidebar").classList.add("open");
}

function closeSidebar() {
  document.getElementById("sidebar").classList.remove("open");
}

window.onload = function() {
  document.querySelector(".more-img").addEventListener("click", openSidebar);
};

document.addEventListener("DOMContentLoaded", function () {
  var searchButton = document.querySelector(".search-img");
  var popup = document.getElementById("searchPopup");
  var closeButton = document.querySelector(".close-popup");

  function openSearchPopup() {
    popup.classList.add("active");
  }

  function closeSearchPopup() {
    popup.classList.remove("active");
  }

  if (searchButton) {
    searchButton.addEventListener("click", openSearchPopup);
  }

  if (closeButton) {
    closeButton.addEventListener("click", closeSearchPopup);
  }

  window.addEventListener("click", function (e) {
    if (e.target === popup) {
      closeSearchPopup();
    }
  });
});


document.addEventListener("DOMContentLoaded", function () {
    const thumbnails = document.querySelectorAll(".thumbnail");
    const mainImage = document.getElementById("main-image");
    const leftArrow = document.querySelector(".gallery-arrow.left");
    const rightArrow = document.querySelector(".gallery-arrow.right");
  
    let currentIndex = 0;
    const imageList = Array.from(thumbnails).map(img => img.src);
  
    function updateMainImage(index, direction) {
      mainImage.style.opacity = 0;
      const offset = direction === "left" ? "-50px" : "50px";
      mainImage.style.transform = `translateX(${offset})`;
  
      setTimeout(() => {
        mainImage.src = imageList[index];
        mainImage.style.opacity = 1;
        mainImage.style.transform = "translateX(0)";
      }, 200);
  
      thumbnails.forEach((t, i) => {
        t.classList.toggle("active", i === index);
      });
  
      currentIndex = index;
    }
  
    thumbnails.forEach((thumb, index) => {
      thumb.addEventListener("click", function () {
        updateMainImage(index, index < currentIndex ? "left" : "right");
      });
    });
  
    if (thumbnails.length > 0) {
      thumbnails[0].classList.add("active");
    }
  
    leftArrow.addEventListener("click", () => {
      let newIndex = currentIndex - 1;
      if (newIndex < 0) newIndex = imageList.length - 1;
      updateMainImage(newIndex, "left");
    });
  
    rightArrow.addEventListener("click", () => {
      let newIndex = (currentIndex + 1) % imageList.length;
      updateMainImage(newIndex, "right");
    });
  });
  