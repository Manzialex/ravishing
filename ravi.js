
window.addEventListener('DOMContentLoaded', () => {
  let index = 0;

  const productcarousel = document.getElementById("productcarousel");
  const slideWidth = productcarousel.children[0].offsetWidth;
  const visibleCards = 4; // adjust based on your layout
  const totalCards = productcarousel.children.length;
  const maxScrolls = totalCards - visibleCards;

  console.log({ slideWidth, totalCards, maxScrolls });

  function updateSlide() {
    productcarousel.style.transform = `translateX(-${index * slideWidth}px)`;
    productcarousel.style.transition = 'transform 0.5s ease-in-out';
  }

  window.scrollNext = function () {
    if (index < maxScrolls) {
      index++;
      updateSlide();
    }
  };

  window.scrollPrev = function () {
    if (index > 0) {
      index--;
      updateSlide();
    }
  };
});
/*

 let index = 0;

  window.onload = function() {
    const carousel = document.getElementById("productcarousel");
    const item = carousel.children[0];
    const slideWidth = item.offsetWidth;
    const visibleCards = 4;
    const totalCards = carousel.children.length;
    const maxScrolls = totalCards - visibleCards;

    console.log({ slideWidth, totalCards, maxScrolls });


    function updateSlide() {
      carousel.style.transform = `translateX(-${index * slideWidth}px)`;
    }

    window.scrollNext = function() {
      if (index < maxScrolls) {
        index++;
        updateSlide();
      }
    };
   
    

    window.scrollPrev = function() {
      if (index > 0) {
        index--;
        updateSlide();
      }
    };
  };
*/
  document.getElementById("messageForm").addEventListener("submit", function(e){
            e.preventDefault();

            const name = document.getElementById("name").value;
            const number = document.getElementById("number").value;
            const subject = document.getElementById("subject").value;
            const query = document.getElementById("query").value;
            const whatsAppNumber = "256769474658";

            const message = `Hello, I'd like to make an inquiry:\n\nName: ${name}\nNumber: ${number}\nSubject: ${subject}\nQuery: ${query}`;
      const url = `https://wa.me/${whatsAppNumber}?text=${encodeURIComponent(message)}`;

      window.open(url, '_blank');


        });
