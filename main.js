// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const likes = document.getElementsByClassName('like-glyph');
const errorDiv = document.getElementById('modal')

function colorHeart(e) {
  let heart = e.target;
  // console.log(e.target)
  mimicServerCall("url")
  .then(response => {
    if (heart.className == "activated-heart") {
      heart.className = "";
    } else {
      heart.className = "activated-heart";
    console.log("hello");
    }
    
  })
  .catch(error => {
    errorDiv.className = "";
    setTimeout(() => {errorDiv.className = "hidden"}, 5000)
  })
}

for(const key in likes) {
  // console.log(likes[key])
  likes[key].addEventListener("click", colorHeart)
    
  
}


// console.log(typeof likes)

// for(const key in likes) {
//   likes[key].addEventListener("click", () => {
    
//     likes[key].style.color = "red";
//   })
// }




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




