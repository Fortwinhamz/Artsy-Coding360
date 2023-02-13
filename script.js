

const homeId = document.getElementById('home')

gsap.registerPlugin(ScrollTrigger)

gsap.to('.row-info', { 
    rotation: 360,
    duration:5, 
    x: 700, 
    ease: '"elastic.out(1, 0.3)"',
    ScrollTrigger: ".features"
})
gsap.to('.row-image', { 
    rotation: 360,
    duration:5, 
    x: 700, 
    ease: '"elastic.out(1, 0.3)"',
    ScrollTrigger: ".features"
})

homeId.addEventListener('click', function(){ //For when i click the Home Button
    document.querySelectorAll('.image-slider').forEach(option => {
        gsap.from('.image-slider', {  duration:5, x: '-100%', ease: 'bounce'})
        gsap.from('.auction-section', { duration:7, x: '50%', ease: 'bounce'})
        gsap.from('.slider-img', { rotation: 360, duration:2, x: '100%', ease: 'power3'})

        // gsap.to('.rows', { 
        //     rotation: 360,
        //      duration:2, 
        //      x: '100%', 
        //      ease: 'power3',
        //      ScrollTrigger: ".rows"
        //     })
        gsap.from('.featured-products', { duration:3, y: '100%', ease: 'bounce'})
        gsap.from('.rows', { duration:3, x: '100%', ease: 'bounce'})
        gsap.from('.row-1', { duration:3, y: '100%', ease: "elastic.out(1, 0.3)"})
        
    })
})

const arrowId = document.getElementById('fa-arrow-right')
const arrow2Id = document.getElementById('js-to-auction')

arrowId.addEventListener('click', function(){
    document.querySelectorAll('.image-slider').forEach(option => {
        gsap.from('.js-to-marketplace', { rotation: 180, duration:5, y: '100%', ease: "elastic.out(1, 0.3)"})
        // gsap.from('.js-to-auction', { rotation: -360, duration:5, y: '100%', ease: "bounce"})
        gsap.from('.js-to-auction', { rotation: -360, duration:5, y: '100%', ease: "bounce"})
    })
})
// arrow2Id.addEventListener('click', function(){
//     document.querySelectorAll('.image-slider').forEach(option => {
//         gsap.from('.js-to-auction', { rotation: -180, duration:5, y: '100%', ease: "elastic.out(1, 0.3)"})
//     })
// })