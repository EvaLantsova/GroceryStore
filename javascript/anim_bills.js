
document.getElementById('star_1').onclick = function(){
document.getElementById('star_2').style.transform = `translate(${anime.random(0,100)}vw,${anime.random(0,100)}vh) rotate(${anime.random(0, 360)}deg)`;
document.getElementById('star_2').style.display = 'block'
document.getElementById('star_3').style.transform = `translate(${anime.random(0,100)}vw,${anime.random(0,100)}vh) rotate(${anime.random(0, 360)}deg)`;
document.getElementById('star_2').style.display = 'block';
}
