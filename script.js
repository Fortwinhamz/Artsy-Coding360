


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
    duration: 2,
    // x: 700,
    rotation: 360,
    // repeat: 2, // the number of repeats - this will play 3 times
    yoyo: true,
    repeatDelay: 1,
    ease: 'bounce.out',
    
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