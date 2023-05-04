const cardImg = document.getElementById('card-img');

const fractionOneId = document.getElementById('fraction_1');
const fractionThreeId = document.getElementById('fraction_3');

const openDetailsFunction = function() {
if (fractionOneId.style.display === 'none') {
  fractionOneId.style.display = "grid";
  fractionOneId.style.position = "relative";
  fractionThreeId.style.display = "none";
} else {
  fractionOneId.style.display = "none";
  fractionThreeId.style.display = "grid";
}
console.log('visibility changed');
}

cardImg.addEventListener('click', (event) => {
  openDetailsFunction();
} )


const form = document.querySelector('form')
form.addEventListener('submit', (event) => {
  event.preventDefault();

  const inputSearchField = event.currentTarget.querySelector('input').value
  const url = `https://world.openfoodfacts.org/api/v0/product/${inputSearchField}.json`
  fetch(url)
  .then(response => response.json())
  .then((data) => {
    document.getElementById('image-change').src = data.product.image_front_small_url
    console.log(data)
  })


})
