const images = ["1.jpg", "2.jpg", "3.jpg","4.jpg","5.jpg","6.jpg"];
const image = images[Math.floor(Math.random() * images.length)];

document.body.style.backgroundImage = `url(img/${image})`;