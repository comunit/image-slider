const images = document.getElementsByClassName('slider-img');
const box = document.getElementsByClassName('box');
const slider = document.getElementsByClassName('slider');

let current = 0;
let imagesArray = [];

// loop through images and push to images array
for (let i = 0; i < images.length; i++) {
  const image = images[i];
  imagesArray.push(image);
}

imagesArray[current].style.left = '0';
slider[0].style.height = imagesArray[current].clientHeight+'px';
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
  slider[0].style.height = imagesArray[current].clientHeight+'px';
  
  if (number || number == 0) {
    for (let i = 0; i < imagesArray.length; i++) {
      const image = imagesArray[i];
      image.style.left = '100%';
    }
    imagesArray[number].style.left = '0';
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
    image.style.left = '-100%';
  }

  if (current >= imagesArray.length - 1) {
    imagesArray[current].style.left = '100%';
    imagesArray[0].style.left = '0';
    current = 0;
  } else {
    imagesArray[current].style.left = '100%';
    current++;
    imagesArray[current].style.left = '0';
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