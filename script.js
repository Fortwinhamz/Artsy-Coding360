


const menuBtn = document.querySelector(".menu-icon span");
const searchBtn = document.querySelector(".search-icon");
const cancelBtn = document.querySelector(".cancel-icon");
const items = document.querySelector(".nav-items");
const form = document.querySelector("form");
menuBtn.onclick = ()=>{
    items.classList.add("active");
    menuBtn.classList.add("hide");
    searchBtn.classList.add("hide");
    cancelBtn.classList.add("show");
}
cancelBtn.onclick = ()=>{
    items.classList.remove("active");
    menuBtn.classList.remove("hide");
    searchBtn.classList.remove("hide");
    cancelBtn.classList.remove("show");
    form.classList.remove("active");
    cancelBtn.style.color = "#ff3d00";
}
searchBtn.onclick = ()=>{
    form.classList.add("active");
    searchBtn.classList.add("hide");
    cancelBtn.classList.add("show");
}

const arrow = document.querySelector('.fa-angle-up');
const arrowCtn = document.querySelector('.artist-bottom')

// arrow.onclick = ()=>{
//     arrowCtn.classList.remove("hide");
// }


// Category Function toggle code

function catFunction() {
    var x = document.getElementById("category-bottom");
    var y = document.querySelector('.fa-angle-up')
    var z = document.querySelector('.fa-angle-down')
    if (x.style.display === "none") {
      x.style.display = "block";
      y.style.display ="none";
    //   element.classList.remove("fa-angle-up");
    } else {
      x.style.display = "none"; 
      z.style.display ="block";
      y.style.display ="none";
    }

    
}

function removeCatFunction() {
    var x = document.getElementById("category-bottom");
    var y = document.querySelector('.fa-angle-up')
    var z = document.querySelector('.fa-angle-down')
    if (x.style.display === "block") {
      z.style.display = "none";
      x.style.display ="block";
      element.classList.remove(".fa-angle-up");
    } else {
      x.style.display = "block"; 
      z.style.display ="block";
    }
    
}



function priceFunction() {
    var x = document.getElementById("price-bottom");
    var y = document.querySelector('.fa-angle-up')
    var z = document.querySelector('.fa-angle-down')
    if (x.style.display === "none") {
      x.style.display = "block";
      y.style.display ="none";
    //   element.classList.remove("fa-angle-up");
    } else {
      x.style.display = "none"; 
      z.style.display ="block";
      y.style.display ="none";
    }

    
}

function removePriceFunction() {
    var x = document.getElementById("price-bottom");
    var y = document.querySelector('.fa-angle-up')
    var z = document.querySelector('.fa-angle-down')
    if (x.style.display === "block") {
      z.style.display = "none";
      x.style.display ="block";
      element.classList.remove(".fa-angle-up");
    } else {
      x.style.display = "block"; 
      z.style.display ="block";
    }
    
}



function artFunction() {
    var x = document.getElementById("artist-bottom");
    var y = document.querySelector('.fa-angle-up')
    var z = document.querySelector('.fa-angle-down')
    if (x.style.display === "none") {
      x.style.display = "block";
      y.style.display ="none";
    //   element.classList.remove("fa-angle-up");
    } else {
      x.style.display = "none"; 
      z.style.display ="block";
      y.style.display ="none";
    }

    
}

function removeArtFunction() {
    var x = document.getElementById("artist-bottom");
    var y = document.querySelector('.fa-angle-up')
    var z = document.querySelector('.fa-angle-down')
    if (x.style.display === "block") {
      z.style.display = "none";
      x.style.display ="block";
      element.classList.remove(".fa-angle-up");
    } else {
      x.style.display = "block"; 
      z.style.display ="block";
    }
    
}



// function colFunction() {
//     var x = document.getElementById("collection-bottom");
//     var y = document.querySelector('.fa-angle-up')
//     var z = document.querySelector('.fa-angle-down')
//     if (x.style.display === "none") {
//       x.style.display = "block";
//       y.style.display ="none";
//     //   element.classList.remove("fa-angle-up");
//     } else {
//       x.style.display = "none"; 
//       z.style.display ="block";
//       y.style.display ="none";
//     }

    
// }

// function removeColFunction() {
//     var x = document.getElementById("collection-bottom");
//     var y = document.querySelector('.fa-angle-up')
//     var z = document.querySelector('.fa-angle-down')
//     if (x.style.display === "block") {
//       z.style.display = "none";
//       x.style.display ="block";
//       element.classList.remove(".fa-angle-up");
//     } else {
//       x.style.display = "block"; 
//       z.style.display ="block";
//     }
    
// }



































const f = document.getElementById('form');
const q = document.getElementById('query');
const google = 'https://twitter.com/notifications';
const site = 'pagedart.com';

    function submitted(event) {
    event.preventDefault();
    const url = google + site + '+' + q.value;
    const win = window.open(url, '_blank');
    win.focus();
    }

    f.addEventListener('submit', submitted);




// gsap.to(".main-text", {duration: 5, x: 300});
// gsap.fromTo(".logo", {duration: 5, x: 300}, {duration: 5, y: 300} );

// create a timeline
// let tl = gsap.timeline()

// //store the tween or timeline in a variable

// let tween = gsap.to(".logo", {duration: 1, x: 100});
// tween.pause();
// tween.reverse();

// add the tweens to the timeline - Note we're using tl.to not gsap.to
// tl.to(".text1", { x: 600, duration: 2,} );
// tl.to(".purple", { x: 600, duration: 1 }, 1);
// // tl.to("h1", { x: 600, duration: 1 , delay: 1 });


gsap.to(".logo", { 
    duration: 6,
    // x: 700,
    rotation: 360,
    // repeat: 2, // the number of repeats - this will play 3 times
    yoyo: true,
    repeatDelay: 1,
    ease: 'stagger',
    
});

gsap.from(".flower", {
    scale: .1, 
    y: 60,
    yoyo: false, 
    rotation: 360,
    ease: "power1.inOut",
    delay:2,
    // backgroundColor : '#0cd7df',
    // color: '#fff',
    
    // onComplete: () => alert("the tween is complete"),
    
    stagger: {
      amount: 1, 
      grid: "auto",
      from: "center"
    }
});