
const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() => {

    console.log('loop')

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {

    pipe.style.animation = 'none';
    pipe.style.left = `${pipePosition}px`;

    mario.style.animation = 'none';
    mario.style.bottom = `${marioPosition}px`;

    mario.src = './imagens/game-over.png';
    mario.style.width = '75px'
    mario.style.marginLetf = '50px'

    clearInterval(loop);
    
    }

}, 10)

// APLICAÇÃO DE BOTÃO PARA MOBILE

document.getElementById("myButton").addEventListener('click' , jump);

// AUTERAR VELOCIDADE DO OBSTACULO 

window.addEventListener('resize', resizePipeAnimation);

function resizePipeAnimation() {
 let screenWidth = window.innerWidth;
 let pipeAnimationDuration = 1;

 if (screenWidth > 680) {
    pipeAnimationDuration = 2;
 }

 let pipes = document.querySelectorAll('.pipe');

 pipes.forEach(pipe => {
    pipe.style.animationDuration = pipeAnimationDuration + 's';
 });
}

resizePipeAnimation();