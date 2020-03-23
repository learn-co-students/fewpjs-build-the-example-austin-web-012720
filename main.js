// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

let hearts = document.querySelectorAll('.like');
console.log(hearts);
for (const heart of hearts){
  heart.addEventListener('click', like);
}

function like(event){
  let heart = event.target;
  console.log(heart);

  mimicServerCall('url')
  .then(function(message){
    console.log(heart.style.color);
    if(heart.innerText == FULL_HEART){
      heart.innerText = EMPTY_HEART;
      heart.style.color = '';
    } else {
      heart.innerText = FULL_HEART;
      heart.style.color = 'red';
    }
  })
  .catch(function(error){
    alert('Something went wrong!');
    // console.log(error);
  })
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
