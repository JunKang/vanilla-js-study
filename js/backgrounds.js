const images = ["0.JPG", "1.JPG", "2.JPG", "3.JPG", "4.JPG", "5.JPG", "6.JPG"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.id = "bg-image";
bgImage.src = `img/${chosenImage}`;
bgImage.width = 600;
bgImage.height = 600;
document.body.appendChild(bgImage);
