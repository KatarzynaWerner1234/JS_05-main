const images = [];

images.push("https://images.unsplash.com/photo-1557685888-2d3621ddf615?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGNsaW1iaW5nfGVufDB8fDB8fHww");
images.push("https://plus.unsplash.com/premium_photo-1684315354065-337697ae0257?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fGNsaW1iaW5nfGVufDB8fDB8fHww");
images.push("https://images.unsplash.com/photo-1602531762613-e2b9674b9008?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGNsaW1iaW5nfGVufDB8fDB8fHww");
images.push("https://images.unsplash.com/photo-1579769696606-3a52f6d41b95?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fGNsaW1iaW5nfGVufDB8fDB8fHww");

let counter = 0;

const image = document.querySelector("img");
image.setAttribute("src", images[0]);

const buttons = document.querySelectorAll("button");

const buttonPrev = buttons[0];
buttonPrev.setAttribute("id", "prev");

const buttonNext = buttons[1];
buttonNext.setAttribute("id", "next");

buttonNext.addEventListener("click", (e) => {
    counter = counter + 1;
    if (counter >= images.length) {
        counter = 0;
    }
    image.setAttribute("src", images[counter]);

});

buttonPrev.addEventListener("click", (e) => {
    counter = counter - 1;
   if (counter < 0) {
        counter = images.length - 1;
    } 
  
    image.setAttribute("src", images[counter]);


});