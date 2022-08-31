
var images = document.querySelectorAll('.para');
new simpleParallax(images, {

    delay: .2,
	// transition: 'cubic-bezier(0,0,0,1)',
    scale: 1.5,
    overflow: true,
});