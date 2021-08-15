const wallpaper = document.querySelector('.wallpaper');
const random = Math.random() * 2;

if (random < 1 ) {
    wallpaper.src="../img/kdb.jpg";
} else{
    wallpaper.src="../img/kdb-1.jpg";
}
