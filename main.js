document.querySelector('.menu-btn').addEventListener('click', () => {
	document.querySelector('.nav-menu').classList.toggle('show');
});

const clip = document.querySelectorAll(".hover-to-play");
for (let i = 0; i < clip.length; i++) { clip[i].addEventListener("mouseenter", function (e) { clip[i].play();
  }); clip[i].addEventListener("mouseout", function (e) { clip[i].pause(); }); }


/* import { Ripple, initMDB } from "mdb-ui-kit";

initMDB({ Ripple }); */