const primaryHeader = document.querySelector('.primary-header')
const navToggle = document.querySelector('.mobile-nav-toggle')
const primaryNav = document.querySelector('.primary-navigation')

navToggle.addEventListener('click', ()=>{
    primaryNav.hasAttribute('data-visible') 
        ? navToggle.setAttribute('aria-expanded', false)
        : navToggle.setAttribute('aria-expanded', true)
        
    primaryNav.toggleAttribute('data-visible')
    primaryHeader.toggleAttribute('data-overlay')
	document.body.classList.toggle('fixed-position')
})




 const slider = new A11YSlider(document.querySelector('.slider'), {
		arrows: false,
		adaptiveHeight: false,
		dots: true,
		
		responsive: {
			480: {
				dots: false,
				arrows: false,
			},
		},
 })

