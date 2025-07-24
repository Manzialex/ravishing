
const carousel = document.getElementById("productcarousel");


const Aicons = document.querySelectorAll(".product-nav i");

Aicons.forEach(icon =>{
  icon.addEventListener("click", ()=>{
    const direction = icon.classList.contains("bi-arrow-right-short") ? 1 : -1;
    const scrollAmount = 300;

    carousel.scrollBy({
      left: scrollAmount * direction,
      behavior: "smooth"
    });
    console.log(icon);
    
  })
})
/*
const dragging = (e)=>{
  e.preventDefault();
  carousel.scrollLeft = e.pageX;
  
}

carousel.addEventListener("mouseover", dragging);

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
