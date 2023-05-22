const container = document.querySelector('.images');
const images = document.querySelectorAll('.images img');

// buttons

const next = document.querySelector('#next');
const prev = document.querySelector('#prev');

// counter
let counter = 1;
const size = images[0].clientWidth;

container.style.transform = 'translateX(' + (-size * counter) + 'px)';

// Carousel Event Listener
next.addEventListener('click', function(){
    container.style.transition = 'transform 0.4s ease-in-out';
    counter++;
    container.style.transform = 'translateX(' + (-size * counter) + 'px)';
});
prev.addEventListener('click', function(){
    container.style.transition = 'transform 0.4s ease-in-out';
    counter--;
    container.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

container.addEventListener('transitionend', function(){
    if(images[counter].id === 'last'){
        container.style.transition = 'none';
        counter = images.length - 2;
        container.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
});
container.addEventListener('transitionend', function(){
    if(images[counter].id === 'first'){
        container.style.transition = 'none';
        counter = images.length - counter;
        container.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
});

// Smooth Scroll

function smoothScroll(target, duraction){
    var target = document.querySelector(target);
    var targetPosition = target.getBoundingClientRect().top;
    var startPosition = window.pageYOffset;
    var distance = targetPosition - startPosition;
    var startTime = null;

    function animation(currentTime){
        if (startTime === null) startTime = currentTime;
        timeElepsed = currentTime - startTime;
        var run = ease(timeElepsed, startPosition, distance, duraction);
        window.scrollTo(0, run);
        if (timeElepsed < duraction) requestAnimationFrame(animation);
    }
    // ease function
    function ease(t,b,c,d){ // matematiksel fonksiyon
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t* (t - 2) - 1) + b;  
    }

    requestAnimationFrame(animation);
}

const down = document.querySelector('.target1');
down.addEventListener('click', function(){
    smoothScroll('.target2', 3000);
});

// Scroll Effect 
function scroll(){
    var picture = document.querySelector('.images');
    var picturePosition = picture.getBoundingClientRect().top;
    var screenPosition = window.innerHeight/ 1.3;
    if (picturePosition < screenPosition ){
        picture.classList.add('images-appear');
    }    
}
window.addEventListener('scroll', scroll);




