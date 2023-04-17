import dogs from "/data.js";
import Dog from "/Dog.js";

const container = document.getElementById("content-container");
const like_btn = document.getElementById("like");
const dislike_btn = document.getElementById("dislike");
like_btn.addEventListener("click", handleLikeClick);
dislike_btn.addEventListener("click", handleDislikeClick);
let dogIndex = 0;
let likedDogs = 0;
let disLikedDogs = 0;
let isWaiting = false;
let currentDog = new Dog(dogs[dogIndex]);

function handleLikeClick() {
  currentDog.hasBeenLiked = true;
  currentDog.hasBeenSwiped = false;
  like_btn.classList.add("liked");
  dislike_btn.classList.remove("disLiked");
  like_btn.disabled = true;
  dislike_btn.disabled = true;
  likedDogs += 1;
  isWaiting = true;
  render();
  getNewDog();
}

function handleDislikeClick() {
  currentDog.hasBeenLiked = false;
  currentDog.hasBeenSwiped = true;

  like_btn.classList.remove("liked");
  dislike_btn.classList.add("disLiked");
  like_btn.disabled = true;
  dislike_btn.disabled = true;
  disLikedDogs += 1;
  isWaiting = true;
  render();
  getNewDog();
}

function getNewDog() {
  if (isWaiting) {
    setTimeout(() => {
      if (dogIndex < dogs.length - 1) {
        dogIndex += 1;
      } else {
        document.body.innerHTML = `<div class='endingPage'>
      <h1>No hay mas perritos</h1>
       <p>Te gustaron: <span class='likeWord'>${likedDogs} ${
          likedDogs > 1 ? "perritos" : "perritos"
        }</span> y no te gustaron <span class='dislikeWord'>${disLikedDogs} ${
          disLikedDogs > 1 ? "perritos" : "perritos"
        }</span></p>
       <p>Gracias por participar en la prueba de esta app, puedes volver haciendo click >>><a href='/index.html'>aqui</a><<<<
      </div>`;
      }
      currentDog = new Dog(dogs[dogIndex]);
      like_btn.classList.remove("liked");
      dislike_btn.classList.remove("disLiked");
      isWaiting = false;
      dislike_btn.disabled = false;
      like_btn.disabled = false;
      render();
    }, 2000);
  }
}

function render() {
  container.innerHTML = currentDog.setDogHtml();
}
render();
