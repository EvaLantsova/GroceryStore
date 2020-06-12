
document.getElementById('click_stick').onclick = function() {
document.getElementById('click_banana').style.opacity = '100%';
}

document.querySelector('.green_kiwi_sticker').onclick = function() {
  document.querySelector('.my-modal').classList.toggle('is-hidden')
}


// const btns = document.querySelectorAll('.btn');
// const modalOverlay = document.querySelector('.modal-overlay');
//
// btns.forEach((el) => {
//   el.addEventListener('click',(e) => {
//     let path = e.currentTarget.getAttribute('data-path');
//     console.log('path');
//     document.querySelector(`[data-target="${path}"]`).classList.add('modal--visible');
//     modalOverlay.classList.add('modal-overlay--visible');
//
//   });
// });


// let btnMakeBananas = document.querySelector('.horizontal_banana_sticker')
// btnMakeBananas.onclick = function() {
//     let numberOfPictures = 100
//     for (let i = 0; i < numberOfPictures, i++) {
//         let imgBanana = document.createElement('img')
//         imgBanana.classList.toggle('imgBanana.png')
//         imgBanana.style.position = 'fixed'
//         imgBanana.style.transform = `translate(${anime.random(0,90)}vw, ${anime.random(0,100)}vh)`
//         document.body.append(imgBanana)
//
//         imgBanana.addEventListener('mouseenter', function() {
//             imgBanana.style.display = 'none';
//         });
//     }
// }

// $(document).ready(function(){
//
// $(".mymagicoverbox").click(function()
// {
//  $('#myfond_gris').fadeIn(300);
//  var iddiv = $(this).attr("iddiv");
//  $('#'+iddiv).fadeIn(300);
//  $('#myfond_gris').attr('opendiv',iddiv);
//  return false;
// });
//
// $('#myfond_gris, .mymagicoverbox_fermer').click(function()
// {
//  var iddiv = $("#myfond_gris").attr('opendiv');
//  $('#myfond_gris').fadeOut(300);
//  $('#'+iddiv).fadeOut(300);
// });
