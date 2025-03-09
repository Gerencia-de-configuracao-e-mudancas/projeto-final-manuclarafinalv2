function playSound(file, volume) {
    volume = volume ?? 1;
    let audio = new Audio(file);
    audio.volume = 1;
    audio.play();
}
