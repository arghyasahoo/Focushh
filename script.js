function checkTime(i) {
    if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
    return i;
}

function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);
    document.querySelector('.time').innerHTML = h + ":" + m + ":" + s;
    let options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
    document.querySelector('.day').innerHTML = today.toLocaleDateString("en-US", options);
    setTimeout(startTime, 1000);
}

function changeBackground() {
    const backgrounds = [
        'url("./static/img/alena-aenami-1920.jpg")',
        'url("./static/img/alena-aenami-close-to-the-sun-1920.jpg")',
        'url("./static/img/alena-aenami-couple1k.jpg")',
        'url("./static/img/alena-aenami-eclipse-1k.jpg")',
        'url("./static/img/alena-aenami-lighthouse1k.jpg")',
        'url("./static/img/alena-aenami-lights1k1.jpg")',
        'url("./static/img/alena-aenami-million-little-pieces-1k.jpg")',
        'url("./static/img/alena-aenami-over-the-city1k.jpg")',
        'url("./static/img/alena-aenami-sky1k.jpg")',
        'url("./static/img/alena-aenami-sundown.jpg")',
        'url("./static/img/alena-aenami-sunset2k.jpg")',
        'url("./static/img/alena-aenami-way.jpg")',
        'url("./static/img/d2hd73xxwvaa1.jpg")'
    ];
    let currentBackgroundIndex = 0;
    
    document.body.style.backgroundImage = backgrounds[currentBackgroundIndex];
    currentBackgroundIndex = (currentBackgroundIndex + 1) % backgrounds.length;

    setInterval(() => {
        document.body.style.backgroundImage = backgrounds[currentBackgroundIndex];
        currentBackgroundIndex = (currentBackgroundIndex + 1) % backgrounds.length;
    }, 120000);
}

changeBackground();


var makeItRain = function () {
    //clear out everything
    $('.rain').empty();

    var increment = 0;
    var drops = "";
    var backDrops = "";

    while (increment < 100) {
        //couple random numbers to use for various randomizations
        //random number between 98 and 1
        var randoHundo = (Math.floor(Math.random() * (98 - 1 + 1) + 1));
        //random number between 5 and 2
        var randoFiver = (Math.floor(Math.random() * (5 - 2 + 1) + 2));
        //increment
        increment += randoFiver;
        //add in a new raindrop with various randomizations to certain CSS properties
        drops += '<div class="drop" style="left: ' + increment + '%; bottom: ' + (randoFiver + randoFiver - 1 + 100) + '%; animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"><div class="stem" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div><div class="splat" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div></div>';
        backDrops += '<div class="drop" style="right: ' + increment + '%; bottom: ' + (randoFiver + randoFiver - 1 + 100) + '%; animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"><div class="stem" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div><div class="splat" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div></div>';
    }

    $('.rain.front-row').append(drops);
    $('.rain.back-row').append(backDrops);
}

$('.splat-toggle.toggle').on('click', function () {
    $('body').toggleClass('splat-toggle');
    $('.splat-toggle.toggle').toggleClass('active');
    makeItRain();
});

$('.back-row-toggle.toggle').on('click', function () {
    $('body').toggleClass('back-row-toggle');
    $('.back-row-toggle.toggle').toggleClass('active');
    makeItRain();
});

$('.single-toggle.toggle').on('click', function () {
    $('body').toggleClass('single-toggle');
    $('.single-toggle.toggle').toggleClass('active');
    makeItRain();
});

function playAudio() {
    var audioFiles = ['./static/audio/audio1.mp3',
                        './static/audio/audio10.mp3',
                        './static/audio/audio11.mp3',
                        './static/audio/audio12.mp3',
                        './static/audio/audio13.mp3',
                        './static/audio/audio2.mp3',
                        './static/audio/audio3.mp3',
                        './static/audio/audio4.mp3',
                        './static/audio/audio5.mp3',
                        './static/audio/audio6.mp3',
                        './static/audio/audio7.mp3',
                        './static/audio/audio8.mp3',
                        './static/audio/audio9.mp3'
                    ];

    var currentTrackIndex = 0;
    var isPlaying = false;
    var audio = new Audio();

    function loadTrack(trackIndex) {
        audio.src = audioFiles[trackIndex];
        audio.load();
    }

    function playTrack() {
        audio.play();
        isPlaying = true;
        $('#playPause').html("<i class='bx bx-pause'></i>");
    }

    function pauseTrack() {
        audio.pause();
        isPlaying = false;
        $('#playPause').html("<i class='bx bx-play'></i>");    }

    $('#prev').click(function() {
        if (currentTrackIndex > 0) {
            currentTrackIndex--;
        } else {
            currentTrackIndex = audioFiles.length - 1;
        }
        loadTrack(currentTrackIndex);
        playTrack();
    });

    $('#next').click(function() {
        if (currentTrackIndex < audioFiles.length - 1) {
            currentTrackIndex++;
        } else {
            currentTrackIndex = 0;
        }
        loadTrack(currentTrackIndex);
        playTrack();
    });

    $('#playPause').click(function() {
        if (isPlaying) {
            pauseTrack();
        } else {
            playTrack();
        }
    });

    loadTrack(currentTrackIndex);
}


// Main

startTime();
changeBackground();
makeItRain();
playAudio();