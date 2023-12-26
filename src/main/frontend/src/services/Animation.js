import { useEffect } from "react";

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.intersectionRatio > 0) {
      entry.target.classList.add("animate");
    }
  });
});

// Product Pages
// Path: src/main/frontend/src/assets/scss/Product.scss
// Path: src/main/frontend/src/pages/Products

const handleAnimation = () => {
  const productItem = document.querySelectorAll(
    ".product .allProducts_item-box"
  );
  console.log(productItem);
  setTimeout(() => {
    if (productItem.length > 0) {
      productItem.forEach((item) => {
        observer.observe(item);
      });
    } else {
      handleAnimation();
    }
  }, 500);
};

handleAnimation();
