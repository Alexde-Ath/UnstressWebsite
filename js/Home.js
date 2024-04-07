window.onload = function() {
    // When back button pressed for browsers like chrome, looks for when active history state changes
    window.onpopstate = function() {
        window.location.reload();
    };
    // When back button pressed for browsers like safari. Uses back and forward cache (bfcache), pageshow event is fired when session history entry is being traversed to (including back/forward navigation)
    window.addEventListener('pageshow', function(event) {
        if (event.persisted) {
            var door = document.getElementById('doorClicked');
            if (door) {
                door.children[0].src = "public/doorClosed.png";
            }
            document.body.classList.remove('fadetoblue');
            window.location.reload();
        }
    });

    function fireflies() {
        for (let i = 0; i < 25; i++) {
            let firefly = document.createElement('div');
            firefly.className = 'firefly';
            document.body.appendChild(firefly);
    
            let x = Math.random() * window.innerWidth;
            let y = Math.random() * window.innerHeight;
            let speed = Math.random() * 10 + 5; 
    
            firefly.style.left = `${x}px`;
            firefly.style.top = `${y}px`;
            firefly.style.animationDuration = `${speed}s`;
        }
    }
    fireflies();

    // Door animations when clicked, once clicked don't hover
    document.querySelector('.door').addEventListener('click', function() {
        this.classList.add('clicked');
    });
    var doorCreak = new Audio('public/doorSound.mp3');
    // Open door animation
    document.getElementById('doorClicked').addEventListener('click', function(){
        doorCreak.play();
        this.children[0].src = "public/doorOpen.gif";
    });

    // Audio
    let isPlaying = false;
    const audio = document.getElementById('hAudio');
    const image = document.getElementById('playRecord');
    document.getElementById('playRecord').addEventListener('click', function() {
        
        if (!isPlaying) {
            audio.volume = 0.2;
            audio.play();
            image.src = "public/record.png";
            image.classList.add('spin');
            isPlaying = true;
        } else {
            audio.pause();
            image.src = "public/record.png";
            image.classList.remove('spin');
            isPlaying = false;
        }
    });
        setTimeout(function() {
            document.body.classList.add('hometransition');
        }, 2000); // ms

    // Delayed load, (problem ran into was event tag pointing to wrong location, to fix need to traverse up the DOM tree to find the right parent anchor tag)
    document.getElementById('delayedload').addEventListener('click', function(event) {
        event.preventDefault();
        let target = event.target;

        while (target != null && target.nodeName !== 'A') {
            target = target.parentNode;
        }
        if (target != null) {
            setTimeout(() => {
                window.location.href = target.href;
            }, 2000); // delay of 2 seconds
        }
    });
    document.getElementById('doorClicked').addEventListener('click', function() {
        document.body.classList.add('fadetoblue');
    });
}