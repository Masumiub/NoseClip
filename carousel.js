        const track = document.getElementById('carouselTrack');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');

        let currentSlide = 0;
        const slides = track.children;
        const totalSlides = slides.length;

        setInterval(() => {
            nextBtn.click();
        }, 2000);

        function updateCarousel() {
            const slideWidth = slides[0].offsetWidth;
            track.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
        }

        nextBtn.addEventListener('click', () => {
            currentSlide = (currentSlide + 1) % totalSlides;
            updateCarousel();
        });

        prevBtn.addEventListener('click', () => {
            currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
            updateCarousel();
        });


        window.addEventListener('resize', updateCarousel);



        const tracking = document.getElementById('carouselTracking');
        const nextBttn = document.getElementById('nextBttn');
        const prevBttn = document.getElementById('prevBttn');
        const slidesall = tracking.children;
        const totalSlidesall = slidesall.length;

        let currentIndex = 0;

        function updateSlide() {
            const slideWidth = slidesall[0].offsetWidth;
            tracking.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
        }

        nextBttn.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % totalSlidesall;
            updateSlide();
        });

        prevBttn.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + totalSlidesall) % totalSlidesall;
            updateSlide();
        });

        window.addEventListener('resize', updateSlide);
