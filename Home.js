window.onload = function() {
    function fireflies() {
        for (let i = 0; i < 20; i++) {
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
    document.getElementById('doorClicked').addEventListener('click',function(){
        this.children[0].src = "public/doorOpen.gif";
    });
}