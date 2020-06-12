// let starsNumber = 10
// let stickerStar = document.querySelector('.sticker_star')
//
// for (let i = 0; i < 10; i++) {
// 	let newStarImg = document.createElement('img')
// 	newStarImg.classList.add('star')
// 	newStarImg.src = '../img/star2.svg'
// 	newStarImg.onclick = function() {
// 	newStarImg.setAttribute('src', '../img/star2.svg');
// 	}
// 	newStarImg.style.transform = `translate(${anime.random(1,100)}vw, ${anime.random(1,100)}vh)`
// 	stickerStar.append("newStarImg")
// }


// let starsNumber = 10
// let stickerStar = document.querySelector('.sticker_star')
//
// for (let i = 0; i < 10; i++) {
// let newStarImg = document.createElement('img')
// newStarImg.classList.add('star')
// newStarImg.src = '../img/star1.svg'
// newStarImg.onclick = function() {
// newStarImg.setAttribute('src', '../img/star1.svg');
// }
// newStarImg.style.transform = `translate(${anime.random(1,100)}vw, ${anime.random(1,100)}vh)`
// stickerStar.append('newStarImg')
// }
//
// let starr = document.querySelectorAll('.star')
// starr.forEach(function(element) {
// element.onclick = function() {
// element.setAttribute('src', '../img/star2.svg');
// }
// })
//
// let stars = document.querySelectorAll('.star')
// stars.forEach(function(element) {
// 	element.onclick = function() {
// 		element.setAttribute('src', '../img/star2.svg');
// 	}
// })

document.getElementById('star_1').onclick = function(){
document.getElementById('star_2').style.transform = `translate(${anime.random(0,100)}vw,${anime.random(0,100)}vh) rotate(${anime.random(0, 360)}deg)`;
document.getElementById('star_2').style.display = 'block'
document.getElementById('star_3').style.transform = `translate(${anime.random(0,100)}vw,${anime.random(0,100)}vh) rotate(${anime.random(0, 360)}deg)`;
document.getElementById('star_2').style.display = 'block';
}

// let infiniteLoopAlternate = anime({
//   targets: '.pineapple',
//   translateX: 250,
// 	translateY: -250,
// 	duration: 2000,
//   direction: 'alternate',
//   loop: true
// });
//
//
// var image = document.getElementsByClassName('kiwi');
// new simpleParallax('kiwi', {
// 	scale: 1.5
// });
