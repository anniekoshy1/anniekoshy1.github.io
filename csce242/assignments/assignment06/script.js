document.addEventListener('DOMContentLoaded', () => {
    const exercise1 = document.getElementById('exercise1');
    const exercise2 = document.getElementById('exercise2');
    const colorSliderSection = document.getElementById('color-slider-section');
    const pictureChooserSection = document.getElementById('picture-chooser-section');
    const slider = document.getElementById('colorSlider');
    const sliderMessage = document.getElementById('sliderMessage');
    const pictureDisplay = document.getElementById('pictureDisplay');
    const toggleArrow = document.getElementById('toggle-arrow');
    const menuItems = document.getElementById('menu-items');

    exercise1.addEventListener('click', () => {
        colorSliderSection.style.display = 'block';
        pictureChooserSection.style.display = 'none';
    });

    exercise2.addEventListener('click', () => {
        pictureChooserSection.style.display = 'block';
        colorSliderSection.style.display = 'none';
    });

    slider.addEventListener('input', (e) => {
        const redValue = e.target.value;
        document.body.style.backgroundColor = `rgb(${redValue}, 0, 0)`;
        if (redValue < 85) {
            sliderMessage.textContent = "Chill";
        } else if (redValue < 170) {
            sliderMessage.textContent = "Warm";
        } else {
            sliderMessage.textContent = "Hot";
        }
    });

    document.querySelectorAll('#picture-chooser-section button').forEach(button => {
        button.addEventListener('click', (e) => {
            let size = '';
            if (e.target.id === 'small') {
                size = '100';
            } else if (e.target.id === 'medium') {
                size = '300';
            } else if (e.target.id === 'large') {
                size = '600';
            }
            pictureDisplay.innerHTML = `<img src="https://picsum.photos/${size}" alt="Random Image">`;
        });
    });

    toggleArrow.addEventListener('click', () => {
        if (menuItems.style.display === 'none' || !menuItems.style.display) {
            menuItems.style.display = 'block';
            toggleArrow.textContent = '▲';
        } else {
            menuItems.style.display = 'none';
            toggleArrow.textContent = '▼';
        }
    });
});