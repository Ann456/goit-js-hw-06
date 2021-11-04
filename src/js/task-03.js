const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },

];
//Вариант1
// const imagesEl = document.querySelector('.gallery')

// const imagesElGallery = images.reduce((previousValue, image) =>
//   previousValue+`<li><img src="${image.url}" alt="${image.alt}" width="300px"></li>`,""
// );
// console.log(imagesElGallery)
// imagesEl.insertAdjacentHTML("beforeend", imagesElGallery);


//Вариант2
const imagesEl = document.querySelector('.gallery')

const imagesElGallery = images.map((element) =>
  `<li><img src="${element.url}" alt="${element.alt}" width="300px"></li>`
).join("");
console.log(imagesElGallery)
imagesEl.insertAdjacentHTML("beforeend", imagesElGallery);

