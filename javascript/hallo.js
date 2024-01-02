document.addEventListener('DOMContentLoaded', function () {
    const contentHead = document.querySelector('.content-head');
    const cursor = document.querySelector('.custom-cursor');
    const hiddenText = document.querySelector('.hidden-text');
    const projectImages = document.querySelectorAll('.project-img');
    const aboutText = document.querySelector('.About-text'); // Ensure correct capitalization
      

    const imageArray = ['kapi/cover_01.jpg', 'kapi/cover_02.jpg', 'kapi/kapi_original.jpg'];
    let currentIndex = 0;

    document.addEventListener('mousemove', function (e) {
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        cursor.style.left = mouseX + 'px';
        cursor.style.top = mouseY + 'px';
    });

    contentHead.addEventListener('mouseenter', function () {
        document.body.style.cursor = 'none';
    });

    contentHead.addEventListener('mouseleave', function () {
        document.body.style.cursor = 'auto';
    });

    const plus = document.querySelector('.plus');
    const about = document.querySelector('.about');

    plus.addEventListener('click', function (e) {
        e.stopPropagation();
        toggleHiddenText();
        togglePlusMinus();
    });

    about.addEventListener('click', function (e) {
        e.stopPropagation();
        toggleAboutText();
    });

    const glowOnHover = document.querySelectorAll('h1, p');

    glowOnHover.forEach(element => {
        element.addEventListener('mouseenter', function () {
            cursor.style.width = '10px';
            cursor.style.height = '10px';
        });

        element.addEventListener('mouseleave', function () {
            cursor.style.width = '0';
            cursor.style.height = '0';
        });
    });

    function toggleImage() {
        // projectImage.src = imageArray[currentIndex];
        // projectImage.style.display = 'block';
        projectImages.forEach(image => {
            image.style.display = 'block';
        });

        // Cycle to the next image
        currentIndex = (currentIndex === imageArray.length - 1) ? 0 : currentIndex + 1;
    }
    
    function toggleHiddenText() {
        hiddenText.style.opacity = (hiddenText.style.opacity === '0' || hiddenText.style.opacity === '') ? '1' : '0';
        aboutText.style.opacity = '0';
    }

    function togglePlusMinus() {
        const plusSign = document.querySelector('.plus-sign');
        plusSign.textContent = (hiddenText.style.opacity === '0') ? '+' : '-';
        
        // Add or remove mix-blend-mode based on the condition
        plusSign.style.mixBlendMode = (hiddenText.style.opacity === '0') ? 'difference' : 'normal';
    }
    

    function toggleAboutText() {
        aboutText.style.opacity = (aboutText.style.opacity === '0' || aboutText.style.opacity === '') ? '1' : '0';
        hiddenText.style.opacity = '0';
        togglePlusMinus();
    }

    // Ensure that the toggleImage function is in the same scope
    window.toggleImage = toggleImage;

    function applyMixBlendMode() {
        const plusSign = document.querySelector('.plus-sign');
        plusSign.style.color = (hiddenText.style.opacity === '0') ? 'white' : '#40ff00';
    }
    
    // Call the function when the page loads
    document.addEventListener('DOMContentLoaded', applyMixBlendMode);
    
    
});
