// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

let heartFilling = {
  '♡': '♥',
  '♥': '♡'
};

let colorShade = {
  "red" : "",
  "": "red"
};

let colorHearts = document.querySelectorAll(".like");

function likeCallback(event) {
  let heart = event.target;
  mimicServerCall("bogusUrl")
  .then(function(serverMessage) {
    heart.innerText = heartFilling[heart.innerText];
    heart.style.color = colorShade[heart.style.color];
  })
  .catch(function(error) {
    document.getElementById("modal").className = "";
  });
}

for (let emoji of colorHearts) {
  emoji.addEventListener("click", likeCallback);
}


//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
