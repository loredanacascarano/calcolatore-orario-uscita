
function calcolaOrarioUscita() {
    const ingresso = document.getElementById('ingresso').value;
    const recupero = document.getElementById('recupero').value;
    const pausa = document.getElementById('pausa').value;
    const straordinarioOggi = document.getElementById('straordinarioOggi').value;
    const straordinarioTotale = document.getElementById('straordinarioTotale').value;

    function parseTimeToSeconds(time) {
        const [h, m] = time.split(':').map(Number);
        return h * 3600 + m * 60;
    }

    const setteQuarantadue = 7 * 3600 + 42 * 60; // 7 ore e 42 minuti
    const mezzora = 30 * 60;

    const ingressoSec = parseTimeToSeconds(ingresso);
    const recuperoSec = parseTimeToSeconds(recupero);
    const pausaSec = parseTimeToSeconds(pausa);
    const straordinarioOggiSec = parseTimeToSeconds(straordinarioOggi);
    const straordinarioTotaleSec = parseTimeToSeconds(straordinarioTotale);

    const oggi = new Date();
    oggi.setHours(0, 0, 0, 0);
    const ingressoDate = new Date(oggi.getTime() + ingressoSec * 1000);

    let uscitaParziale = new Date(ingressoDate.getTime() + (setteQuarantadue + recuperoSec + straordinarioOggiSec) * 1000);
    let uscitaTotale = (pausa === "00:00") ? new Date(uscitaParziale.getTime() + mezzora * 1000) : new Date(uscitaParziale.getTime() + pausaSec * 1000);

    document.getElementById('uscita').textContent = uscitaTotale.toTimeString().slice(0,5);

    const oraCorrente = new Date();
    if (uscitaTotale > oraCorrente) {
        document.getElementById('messaggio').textContent = `Aspetta l'ora ${uscitaTotale.toTimeString().slice(0,5)}... Il Bianconiglio non ha ancora finito il cappuccino! ☕🐰`;
        document.getElementById('immagine').src = 'images/bianconiglio_triste.png';
    } else {
        document.getElementById('messaggio').textContent = `Potevi uscire alle ${uscitaTotale.toTimeString().slice(0,5)}... 🍹🐰`;
        document.getElementById('immagine').src = 'images/bianconiglio_felice.png';
    }
    document.getElementById('immagine').hidden = false;

    const nuovoStraordinarioSec = straordinarioTotaleSec + straordinarioOggiSec;
    const ore = String(Math.floor(nuovoStraordinarioSec / 3600)).padStart(2, '0');
    const minuti = String(Math.floor((nuovoStraordinarioSec % 3600) / 60)).padStart(2, '0');
    document.getElementById('nuovoStraordinario').textContent = `${ore}:${minuti}`;
}
