const wrapper = document.querySelector('.wrapper');
const question = document.querySelector('.question');
const yesBtn = document.querySelector('.yes-btn');
const noBtn = document.querySelector('.no-btn');

const catImg = document.getElementById('cat');

const wrapperRect = wrapper.getBoundingClientRect();
const noBtnRect = noBtn.getBoundingClientRect();

const canvas = document.querySelector('#confetti');
const jsConfetti = new JSConfetti()

yesBtn.addEventListener('click', () => {
    question.innerHTML = 'Thank You :)';

});

yesBtn.addEventListener("click", function() {
    catImg.src="https://storage.googleapis.com/sticker-prod/Esr4U7UCsnTNPcGeUgL0/cover-1.thumb256.png"
});

noBtn.addEventListener('mouseover', () => {
    const i = Math.floor(Math.random() * (wrapperRect.width
         - noBtnRect.width)) + 1;
    const j = Math.floor(Math.random() * (wrapperRect.height
         - noBtnRect.height)) + 1;

    noBtn.style.left = i + 'px';
    noBtn.style.top = j + 'px';

});

noBtn.addEventListener("click", function() {
    console.log('the button was clicked')
})

noBtn.addEventListener("click", function() {
    window.location.href="https://ia801509.us.archive.org/10/items/Rick_Astley_Never_Gonna_Give_You_Up/Rick_Astley_Never_Gonna_Give_You_Up.mp4"
})



var o = document.getElementById("myModal")
  , r = document.getElementById("questions")
  , i = document.getElementsByClassName("close")[0];
        r.onclick = function() {
            o.style.display = "block"
        }
        ,
        i.onclick = function() {
            o.style.display = "none"
        }
        ,
        window.onclick = function(e) {
            e.target == o && (o.style.display = "none")
        }
    
yesBtn.addEventListener('click', () => {
    jsConfetti.addConfetti({
        emojis: ['🌹', ''],
        emojiSize: 50,
        confettiNumber: 70,
        
    })
})




