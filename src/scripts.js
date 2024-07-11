const starField = document.getElementById('starField');
for (let i = 0; i < 200; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.animationDuration = `${Math.random() * 3 + 2}s`;
    star.style.animationDelay = `${Math.random() * 3}s`;
    starField.appendChild(star);
}

document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX / window.innerWidth - 0.5;
    const mouseY = e.clientY / window.innerHeight - 0.5;
    
    starField.style.transform = `translate(${mouseX * 20}px, ${mouseY * 20}px)`;
});

starField.querySelectorAll('.star').forEach(star => {
    const size = Math.random() * 2 + 1;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    star.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    
    star.style.filter = `blur(${Math.random()}px)`;
});

setInterval(() => {
    if (Math.random() > 0.9) {
        const shootingStar = document.createElement('div');
        shootingStar.className = 'star';
        shootingStar.style.left = `${Math.random() * 100}%`;
        shootingStar.style.top = `${Math.random() * 100}%`;
        shootingStar.style.width = '3px';
        shootingStar.style.height = '3px';
        shootingStar.style.backgroundColor = '#fff';
        shootingStar.style.boxShadow = '0 0 10px #fff, 0 0 20px #fff';
        shootingStar.style.animation = `shooting-star 1s linear`;
        
        starField.appendChild(shootingStar);
        
        setTimeout(() => {
            starField.removeChild(shootingStar);
        }, 1000);
    }
}, 100);

const style = document.createElement('style');
style.textContent = `
    @keyframes shooting-star {
        0% { transform: translateX(0) translateY(0); opacity: 1; }
        100% { transform: translateX(1000px) translateY(1000px); opacity: 0; }
    }
`;
document.head.appendChild(style);