function openPopup(name, id, phone, price, size, imageUrl) {
    document.getElementById('popup-name').innerText = name;
    document.getElementById('popup-id').innerText = id;
    document.getElementById('popup-phone').innerText = phone;
    document.getElementById('popup-price').innerText = price;
    document.getElementById('popup-size').innerText = size;
    document.getElementById('popup-image').src = imageUrl;

    document.getElementById('popup').classList.add('active');
    document.getElementById('overlay').classList.add('active');
}

function closePopup() {
    document.getElementById('popup').classList.remove('active');
    document.getElementById('overlay').classList.remove('active');
}
