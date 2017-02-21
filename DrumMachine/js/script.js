function playSound(audio, key){
    key.classList.add('playing');

    audio.currenTime = 0;
    audio.play();
}

function playDrumOnKey(e){
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

    if(audio){
        playSound(audio, key);
    }
}

function playDrumOnClick(e){
    let keyCode = e.target.getAttribute('data-key');
    let key = e.target;

    if(!keyCode){
        keyCode = e.target.parentNode.getAttribute('data-key');
        key = e.target.parentNode;
    }
    const audio = document.querySelector(`audio[data-key="${keyCode}"]`);

    if(audio){
        playSound(audio, key);
    }
}

function finishPlaying(e){
    e.target.classList.remove('playing');
}

var keys = document.querySelectorAll('.key');
keys.forEach(function(k){
    k.addEventListener('click', playDrumOnClick);
    k.addEventListener('transitionend', finishPlaying);
});
window.addEventListener('keydown', playDrumOnKey);