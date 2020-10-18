//Create map
const map = L.map('mapid').setView([-27.2174588,-49.6467507], 15);

//Create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//Create Icon
const icon = L.icon ({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68]
});


let marker;


// Create and add marker
map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    // remove icon
    marker && map.removeLayer(marker);

    // add icon layer
    marker = L.marker([lat, lng], {icon})
    .addTo(map);
});

// add photos field

function addPhotoField() {
    // get photos container #images
    const container = document.querySelector('#images');

    // get container for duplicate .new-image
    const fieldsContainer = document.querySelectorAll('.new-upload');

    // make a clone on the last image added
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true); 
    // last field -1 context matemathics for the last int

    // verify if field is null, if yes, no add container images
    const input = newFieldContainer.children[0];
    if(input.value == "") {
        return;
    }
    // clean field before add container
    input.value = "";

    // add the clone on container #images
    container.appendChild(newFieldContainer);
}

function deleteField(event) {
    const span = event.currentTarget;
    const fieldsContainer = document.querySelectorAll('.new-upload');

    if(fieldsContainer.length <= 1) {
        // clean value of field
        span.parentNode.children[0].value = "";
        return;
    }

    // delete field
    span.parentNode.remove();
}


// select (toogle) yes or no

function toggleSelect(event) {
    // remove class .active (for buttons)
    document.querySelectorAll('.button-select button')
    .forEach(function(button) {
        button.classList.remove('active')
    });

    // put class .active in this button
    const button = event.currentTarget;
    button.classList.add('active');

    // refresh input hidden with value selected
    const input = document.querySelector('[name="open_on_weekends"]');

    // put value 1 or 0 in buttons yes or no
    input.value = button.dataset.value;

}

/* function validate(event) {
    // validar se lat e lng estão preenchidos

    const needsLatAndLng = true;

    if(needsLatAndLng) {
        event.preventDefault()
        alert('Selecione um ponto no mapa')
    }
} */