 <script>
        // Mostrar/Esconder Poema
        const btnPoema = document.getElementById('togglePoema');
        const poema = document.getElementById('poema');
        btnPoema.addEventListener('click', () => {
            poema.style.display = poema.style.display === 'none' ? 'block' : 'none';
        });

        // Mostrar/Esconder Playlist
        const toggleBtn = document.getElementById('togglePlaylist');
        const playerDiv = document.getElementById('spotify-player');
        toggleBtn.addEventListener('click', () => {
            playerDiv.style.display = playerDiv.style.display === 'none' ? 'block' : 'none';
        });

        // Corações flutuantes
        const heartsContainer = document.querySelector('.hearts');
        function createHeart() {
            const heart = document.createElement('div');
            heart.className = 'heart';
            const left = Math.random() * 100;
            const delay = Math.random() * 8;
            const duration = 6 + Math.random() * 4;
            heart.style.left = left + 'vw';
            heart.style.animationDelay = delay + 's';
            heart.style.animationDuration = duration + 's';
            heart.innerHTML = `
                <svg viewBox="0 0 32 32">
                    <path d="M23.6,4.6c-2.5,0-4.7,1.5-5.6,3.7C16.1,6.1,13.9,4.6,11.4,4.6C7.6,4.6,4.6,7.6,4.6,11.4
                    c0,6.7,11.4,15.9,11.4,15.9s11.4-9.2,11.4-15.9C27.4,7.6,24.4,4.6,23.6,4.6z" fill="#ff80b5"/>
                </svg>
            `;
            heartsContainer.appendChild(heart);
            setTimeout(() => {
                heart.remove();
            }, duration * 1000 + 1000);
        }
        setInterval(createHeart, 700);
        // Inicializa alguns corações
        for(let i=0; i<10; i++) createHeart();
    </script>
