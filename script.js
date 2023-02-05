

const homeId = document.getElementById('home')


// homeId.addEventListener('click', function(){ //For when i click the Home Button
    document.querySelectorAll('.image-slider').forEach(option => {
        gsap.from('.image-slider', {  duration:5, x: '-100%', ease: 'bounce'})
        // gsap.from('.auction-section', { duration:7, x: '50%', ease: 'bounce'})
        // gsap.from('.flower', { rotation: -360, duration:7, y: '-50%', ease: 'bounce'})
        // gsap.from('.girl', {  duration:7, y: '50%', ease: 'bounce'})
        // gsap.from('.kangaroo', {  duration:7, y: '-50%', ease: 'bounce'})
        gsap.from('.slider-img', { rotation: 360, duration:2, x: '100%', ease: 'power3'})
        // gsap.from('.featured-products', { duration:3, y: '100%', ease: 'bounce'})
    })
// })