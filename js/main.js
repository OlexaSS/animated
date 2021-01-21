let animateElem = document.querySelector('.center'),
    frontSlide = document.querySelector('.front'),
    backSlide = document.querySelector('.back'),
    descrFirst = document.querySelector('.descr__first'),
    descrSecond = document.querySelector('.descr__second');

    window.addEventListener('scroll', animOnScroll);

    function offset(el){
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            return {top: rect.top + scrollTop, left: rect.left + scrollLeft};
    }

    function animOnScroll(){
        const animateElemHeight = animateElem.offsetHeight;
        let screenHeight = window.innerHeight;
        const animateElemOffset = offset(animateElem).top;
        if(pageYOffset > animateElemOffset + (animateElemHeight/2) - (screenHeight/2)){
            frontSlide.classList.remove('frontReverse');
            backSlide.classList.remove('backReverse');
            frontSlide.classList.add('frontForward');
            backSlide.classList.add('backForward');

            descrFirst.style.display = 'none';
            descrSecond.style.display = 'block';
        }else {
            frontSlide.classList.remove('frontForward');
            backSlide.classList.remove('backForward');
            frontSlide.classList.add('frontReverse');
            backSlide.classList.add('backReverse');

            descrFirst.style.display = 'block';
            descrSecond.style.display = 'none';
        }
    }