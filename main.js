const images = document.getElementsByClassName('slider-img');
const box = document.getElementsByClassName('box');

let current = 0;
let imagesArray = [];

// loop through images and push to images array
for (let i = 0; i < images.length; i++) {
  const image = images[i];
  imagesArray.push(image);
}

imagesArray[current].style.display = 'block';
box["0"].style.backgroundColor = "#0054a4";

function plus(number) {
  if (current >= imagesArray.length - 1) {
    showHide(0);
    return;
  }
  current = current += number;
  showHide(current);
}

function plusLeft(number) {
  current = +current - number;
  if (current <= -1) {
    current = imagesArray.length - 1;
  }
  showHide(current);
}

function showHide(number) {
  if (number || number == 0) {
    for (let i = 0; i < imagesArray.length; i++) {
      const image = imagesArray[i];
      image.style.display = 'none';
    }
    imagesArray[number].style.display = 'block';
    for (let i = 0; i < box.length; i++) {
      const boxes = box[i];
      if (boxes.classList.contains(number)) {
        boxes.style.backgroundColor = "#0054a4";
      } else {
        boxes.style.backgroundColor = "white";
      }
    }
    clearInterval(interval);
    interval = setInterval(function () {
      showHide();
    }, 5000);
    current = number++;
    return;
  }

  for (let i = 0; i < imagesArray.length; i++) {
    const image = imagesArray[i];
    image.style.display = 'none';
  }

  if (current >= imagesArray.length - 1) {
    imagesArray[current].style.display = 'none';
    imagesArray[0].style.display = 'block';
    current = 0;
  } else {
    imagesArray[current].style.display = 'none';
    current++;
    imagesArray[current].style.display = 'block';
  }


  for (let i = 0; i < box.length; i++) {
    const boxes = box[i];
    if (boxes.classList.contains(current)) {
      boxes.style.backgroundColor = "#0054a4";
    } else {
      boxes.style.backgroundColor = "white";
    }
  }
}

for (let i = 0; i < box.length; i++) {
  box[i].addEventListener('click', function () {
    number = box[i].classList[1];
    showHide(number);
  })
}

let interval = setInterval(function () {
  showHide();
}, 5000);