
const slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    nav: false,
    navPosition: "bottom",
    controls: false,
    autoplay: false,
    // responsive: {
    //     640: {

    //     },
    //     700: {

    //     },
    //     900: {
    //         items: 1,
    //         slideBy: 'page',
    //         nav: true,
    //         controls: true,
	// 		controlsContainer: false,
    //     }
    //   }
  });
  document.querySelector('.prev').addEventListener('click', function () {
    slider.goTo('prev');
  });
  document.querySelector('.next').addEventListener('click', function () {
    slider.goTo('next');
});
