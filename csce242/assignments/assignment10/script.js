async function fetchIceCreams() {
    const response = await fetch('https://portiaportia.github.io/json/ice-creams.json');
    const data = await response.json();
    
    displayIceCreams(data);
}

function displayIceCreams(iceCreams) {
    const container = document.getElementById('ice-cream-container');
    iceCreams.forEach(iceCream => {
        const iceCreamDiv = document.createElement('div');
        iceCreamDiv.classList.add('ice-cream');
        
        const img = document.createElement('img');
        img.src = `https://portiaportia.github.io/json/images/ice-creams/${iceCream.image}`;
        img.alt = iceCream.name;

        const overlay = document.createElement('div');
        overlay.classList.add('overlay');
        overlay.innerText = iceCream.name;
        
        iceCreamDiv.appendChild(img);
        iceCreamDiv.appendChild(overlay);

        container.appendChild(iceCreamDiv);
    });
}

window.onload = fetchIceCreams;