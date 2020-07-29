var parrafos = document.getElementsByTagName("p");
var claseBlack = document.getElementsByClassName("black");
var navBar = document.getElementById("nav-bar");
var divs = document.getElementsByTagName("div");
var images = document.getElementsByClassName("images");


/*// Consigna 1
console.log(parrafos[0]); 
// Consigna 1

// Consigna 2
console.log(navBar); 
// Consigna 2

// Consigna 3
for(i=0; i < claseBlack.length; i++){
    claseBlack[i].style.width = "100px";
    claseBlack[i].style.height = "100px";
    claseBlack[i].style.backgroundColor = "green";
}  
// Consigna 3

// Consigna 4
var footer = document.getElementById("footer");
var footerBlack = footer.getElementsByClassName("black");

for(i=0; i < footerBlack.length; i++){
footerBlack[i].style.width = "100px";
footerBlack[i].style.height = "100px";
footerBlack[i].style.backgroundColor = "green";
} 
// Consigna 4

// Consigna 5
for(i=0; i< divs.length; i++){
   if (divs[i].id != 0){
        console.log(divs[i].id);
    }
    else {
        console.log("este elemento div no posee id");
    } 
}
// Consigna 5)

// Consigna 6
for(i=0; i< images.length; i++){
    var imagesImg = images[i].getElementsByTagName("img");
    for(a=0; a< imagesImg.length; a++){
        console.log(imagesImg[a].src);
    }
}
// Consigna 6


// Consigna 7
var divs = document.getElementsByTagName("div");
for (i = 0; i < divs.length; i++) {
    if (divs[i].className == "images"){
        var divsImages = divs[i].getElementsByTagName("img")
        for (ii = 0; ii < divsImages.length; ii++) {
            console.log(divsImages[ii].src);
        }
    }
}
// Consigna 7

*/
// Consigna 8
var parrafos = document.getElementsByTagName("p");
for (i = 0; i < parrafos.length; i++) {
    var boton = document.createElement("button");
    boton.innerHTML = "Presioname";
    boton.type = "button";
    parrafos[i].appendChild(boton);    
}
// Consigna 8 
/*
// Consigna 9
var footer = document.getElementById("footer");
var span = footer.getElementsByTagName("span");
for (i = 0; i < span.length; i++) {
    var content = span[i].innerHTML;
    var li1 = document.createElement("li");
    li1.innerHTML = content;
    navBar.appendChild(li1);
}
// Consigna 9*/

// Consigna 10
console.log(window.location);
// Consigna 10