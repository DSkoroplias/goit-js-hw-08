import Player from '@vimeo/player';

import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const LOCALSTORAGE_KEY = 'videoplayer-current-time';

const onPlay = function (data) {
  localStorage.setItem(LOCALSTORAGE_KEY, data.seconds);
  console.log('Seconds ' + data.seconds);
};

player.on('timeupdate', throttle(onPlay, 1000));

player.setCurrentTime(localStorage.getItem(LOCALSTORAGE_KEY) || null);
