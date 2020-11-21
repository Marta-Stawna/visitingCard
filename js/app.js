lottie.loadAnimation({
    container: document.querySelector('.lottie'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'data.json' // the path to the animation json
});

AOS.init();