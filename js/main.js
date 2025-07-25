console.log("JS writting...");

const addCardBtns = document.querySelectorAll(".add-card-btn");

addCardBtns.forEach( element => {
    element.addEventListener("click", () =>{
        alert("Flower Added to Cart");
    });
});