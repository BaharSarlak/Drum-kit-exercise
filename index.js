for(let i=0; i<document.querySelectorAll(".drum").length; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        const target=this.innerHTML
        playAudio(target)
        buttonAnimaion(target)
    });

}

document.addEventListener("keydown", event=>{
    let target=event.key;
    playAudio(target);
    buttonAnimaion(target)
});

function buttonAnimaion(key) {
    document.querySelector('.'+key).classList.add('pressed')
    setTimeout(()=>{
        document.querySelector('.'+key).classList.remove('pressed')
    }, 200)
}

function playAudio(key) {
    switch (key) {
        case "w":
            const ton1= new Audio('./sounds/tom-1.mp3');
            ton1.play();
            break;
        case "a":
            const ton2= new Audio('./sounds/tom-2.mp3');
            ton2.play();
            break;
        case "s":
            const ton3= new Audio('./sounds/tom-3.mp3');
            ton3.play();
            break;
        case "d":
            const ton4= new Audio('./sounds/tom-4.mp3');
            ton4.play();
            break;
        case "j":
            const ton5= new Audio('./sounds/crash.mp3');
            ton5.play();
            break;
        case "k":
            const ton6= new Audio('./sounds/kick-bass.mp3');
            ton6.play();
            break;
        case "l":
            const ton7= new Audio('./sounds/snare.mp3');
            ton7.play();
            break;       
        default: break;
    }
    
}
