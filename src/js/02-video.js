import Player from "@vimeo/player";
import throttle from "lodash.throttle";
const iframe = document.querySelector('iframe');
const player = new Player(iframe);
player.on('timeupdate', throttle(onTimeUpdate, 1000));
function onTimeUpdate(currentTime) {
    localStorage.setItem("videoplayer-current-time", JSON.stringify(currentTime.seconds));
};
const savedTime = JSON.parse(localStorage.getItem("videoplayer-current-time"));
player.setCurrentTime(JSON.parse(savedTime)).then(function(seconds) {
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            break;
        default:
            break;
    }
});