function playSound(file, volume) {
    volume = volume ?? 1;
    let audio = new Audio(file);
    audio.volume = volume;
    audio.play();
}
