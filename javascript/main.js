let starsNumber = 10
let stickerStar = document.querySelector('.sticker_star')

for (let i = 0; i < 10; i++) {
	let newStarImg = document.createElement('img')
	newStarImg.classList.add('star')
	newStarImg.src = '../img/star1.svg'
	newStarImg.onclick = function() {
	newStarImg.setAttribute('src', '../img/star2.svg');
	}
	newStarImg.style.transform = `translate(${anime.random(1,100)}vw, ${anime.random(1,100)}vh)`
	stickerStar.append(newStarImg)
}

let stars = document.querySelectorAll('.star')
stars.forEach(function(element) {
	element.onclick = function() {
		element.setAttribute('src', '../img/star2.svg');
	}
})

let infiniteLoopAlternate = anime({
  targets: '.pineapple',
  transl ateX: 250,
	translateY: -250,
	duration: 2000,
  direction: 'alternate',
  loop: true
});


var image = document.getElementsByClassName('kiwi');
new simpleParallax('kiwi', {
	scale: 1.5
});



let btnMakeBananas = document.querySelector('.horizontal_banana_sticker')
btnMakeBananas.onclick = function() {
    let numberOfPictures = 100
    for (let i = 0; i < numberOfBananas; i++) {
        let imgBanana = document.createElement('img')
        imgBanana.classList.toggle('imgBanana.png')
        imgBanana.style.position = 'fixed'
        imgBanana.style.transform = `translate(${anime.random(0,90)}vw, ${anime.random(0,100)}vh)`
        document.body.append(imgBanana)

        imgBanana.addEventListener('mouseenter', function() {
            imgBanana.style.display = 'none';
        });
    }
}
