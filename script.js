const navLinks = document.querySelectorAll('header nav a');
const logoLink = document.querySelector('.logo')
const sections = document.querySelectorAll('section');


const activePage = () => {
    navLinks.forEach(link =>  {
        link.classList.remove( 'active' );
    });

    sections.forEach(section =>  {
        section.classList.remove( 'active' );
    });
}

navLinks.forEach((link, idx) => {
    link.addEventListener('click', () => {
        if (!link.classList.contains('active')) {
            activePage();
            link.classList.add('active');
        }

        setTimeout(() => {
            sections[idx].classList.add('active');
        },1);
    });
});


logoLink.addEventListener('click', () => {
    if(!navLinks[0].classList.contains('active')) {
        activePage();
        navLinks[0].classList.add('active');
    }
});

const resumeBtns = document.querySelectorAll('.resume-btn');

resumeBtns.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
        const resumeDetails = document.querySelectorAll('.resume-detail');

        // Remove 'active' class from all buttons
        resumeBtns.forEach(btn => {
            btn.classList.remove('active');
        });
        // Add 'active' class to the clicked button
        btn.classList.add('active');

        // Remove 'active' class from all details
        resumeDetails.forEach(detail => {
            detail.classList.remove('active');
        });
        // Add 'active' class to the corresponding resume detail
        resumeDetails[idx].classList.add('active');
    });
});


const arrowRight = document.querySelector('.portfolio-box .navigation .arrow-right');
const arrowLeft = document.querySelector('.portfolio-box .navigation .arrow-left');
let index = 0; // Assuming 'e' is not defined, initializing index to 0.

const activePortfolio = () => {
    const imgSlide = document.querySelector('.portfolio-carousel .img-slide'); // Fixed typo here.
    const portfolioDetails = document.querySelectorAll('.portfolio-detail')

    imgSlide.style.transform = `translateX(calc(${index * -100}% - ${index * 2}rem))`; // Fixed transform calculation.

    portfolioDetails.forEach(detail => {
        detail.classList.remove('active');
    });
    portfolioDetails[index].classList.add('active');
};

arrowRight.addEventListener('click', () => {
    if (index < 4) {
        index++;
    } else {
        index = 0; // Reset to 0 when reaching the end.
    }

    activePortfolio();
});

arrowLeft.addEventListener('click', () => {
    if (index > 0) {
        index--;
    } else {
        index = 4; // Reset to 4 when at the start.
    }
    activePortfolio();
});