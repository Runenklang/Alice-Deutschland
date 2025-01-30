// Zielzeit: 23. Februar 2025, 18:00 Uhr
const targetDate = new Date('2025-02-23T18:00:00').getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = targetDate - now;

    if (timeLeft <= 0) {
        document.querySelector('.countdown').innerHTML = "Countdown abgeschlossen!";
        return;
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    const hundredths = Math.floor((timeLeft % 1000) / 10);

    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
    document.getElementById('hundertstel').textContent = String(hundredths).padStart(2, '0');
}

setInterval(updateCountdown, 10); // Alle 10 Millisekunden aktualisieren
updateCountdown(); // Sofortige Initialisierung