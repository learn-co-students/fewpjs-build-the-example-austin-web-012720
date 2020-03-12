// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

document.addEventListener("DOMContentLoaded", (() => {
  const likeGlyphs = document.getElementsByClassName("like-glyph");
  console.log(likeGlyphs);
  change_glyph(likeGlyphs);


})
)


function change_glyph(likeGlyphs){
  console.log(likeGlyphs)
  for(let i = 0; i<likeGlyphs.length; i++){
    console.log(likeGlyphs[i])
    likeGlyphs[i].addEventListener("click", () =>{
      console.log("ITS HAPPENING!!!")
      console.log(FULL_HEART)
event.target.innerText = FULL_HEART
    })
  }
  // likeGlyphs.forEach(glyph => {
  //   console.log(glyph)
  //   glyph.addEventListener("click", () => {
  //   console.log("ITS HAPPENING!!")
  // })
  // })
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
