const canvas = document.getElementById('matrix-canvas');
const ctx = canvas.getContext('2d');

// Tuvali tüm ekranı kaplayacak şekilde ayarlıyoruz
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

const matrixChars = ['0', '1'];
const fontSize = 18;
const columns = canvas.width / fontSize;
const rainDrops = Array(Math.floor(columns)).fill(1);

function drawMatrix() {
    // Sitenin arka plan rengiyle uyumlu, harika bir dijital iz efekti
    ctx.fillStyle = 'rgba(11, 12, 16, 0.06)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#66fcf1';
    ctx.font = fontSize + 'px monospace';

    for (let i = 0; i < rainDrops.length; i++) {
        const text = matrixChars[Math.floor(Math.random() * matrixChars.length)];
        const x = i * fontSize;
        const y = rainDrops[i] * fontSize;

        ctx.fillText(text, x, y);

        // Ekranın en altına inen sütunlar rastgele zamanlarda en tepeye döner
        if (y > canvas.height && Math.random() > 0.975) {
            rainDrops[i] = 0;
        }
        rainDrops[i]++;
    }
}

// Akış hızı (Jet Hızı)
setInterval(drawMatrix, 22);