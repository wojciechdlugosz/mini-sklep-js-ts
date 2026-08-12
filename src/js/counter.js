// @ts-nocheck
"use strict";

(() => {

    const date = new Date();
    date.setHours(date.getHours() + 1);
    date.setMinutes(date.getMinutes() + 35);

    const endTime = date.toISOString();
    const counter = document.querySelector('#promotion-counter');

    const getSecondsUntillDate = (date) => {        
        const end = new Date(date);
        const seconds = end.getTime() / 1000;
        const startSeconds = Date.now() / 1000;
        return Math.floor(seconds - startSeconds);
    }   
    const getTimerFormat = (seconds) => {
        if (seconds <= 0) return 'Koniec promocji';

        const h = Math.floor(seconds / 3600);
        const m = Math.floor((seconds % 3600) / 60);
        const s = seconds % 60;
        return `${h}h ${m}m ${s}s`;
    }
    const s = getSecondsUntillDate(endTime);
    counter.innerHTML = getTimerFormat(s);
})();