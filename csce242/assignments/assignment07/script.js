document.getElementById('draw-button').addEventListener('click', () => {
    const input = document.getElementById('star-input');
    const numberOfStars = parseInt(input.value);
    const errorMessage = document.getElementById('error-message');
    const starsBox = document.getElementById('stars-box');
    const messageDisplay = document.querySelector('.message-display');

    starsBox.innerHTML = '';
    errorMessage.innerHTML = '';
    messageDisplay.textContent = ''; 

    if (numberOfStars <= 0 || isNaN(numberOfStars)) {
        errorMessage.textContent = 'Invalid Input, # greater than 0';
        return;
    }

    for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement('i');
        star.classList.add('star');
        star.style.top = Math.random() * (starsBox.clientHeight - 30) + 'px'; 
        star.style.left = Math.random() * (starsBox.clientWidth - 30) + 'px'; 
        star.setAttribute('data-star-number', i + 1); 

        star.addEventListener('click', () => {
            const starNumber = star.getAttribute('data-star-number');
            const suffix = getOrdinalSuffix(starNumber);
            messageDisplay.textContent = `I'm the ${starNumber}${suffix} star made!`; 
        });

        starsBox.appendChild(star);
    }
});

const getOrdinalSuffix = (number) => {
    const lastDigit = number % 10;
    const lastTwoDigits = number % 100;

    if (lastTwoDigits >= 11 && lastTwoDigits <= 13) {
        return 'th';
    }
    
    switch (lastDigit) {
        case 1: return 'st'; 
        case 2: return 'nd'; 
        case 3: return 'rd'; 
        default: return 'th';
    }
}