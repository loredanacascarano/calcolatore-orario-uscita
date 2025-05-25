
function calcolaOrarioUscita(lang = "it") {
    const t = translations[lang];
    console.log(t); // Funziona qui

    const ingresso = document.getElementById('ingresso').value;
    const recupero = document.getElementById('recupero').value;
    const pausa = document.getElementById('pausa').value;
    const straordinarioOggi = document.getElementById('straordinarioOggi').value;
    const straordinarioTotale = document.getElementById('straordinarioTotale').value;
    const standard = document.getElementById('standard').value;

    function parseTimeToSeconds(time) {
        const [h, m] = time.split(':').map(Number);
        return h * 3600 + m * 60;
    }

    const standardSec = parseTimeToSeconds(standard);
    const mezzora = 30 * 60;

    const ingressoSec = parseTimeToSeconds(ingresso);
    const recuperoSec = parseTimeToSeconds(recupero);
    
    const pausaSec = parseTimeToSeconds(pausa);
    const straordinarioOggiSec = parseTimeToSeconds(straordinarioOggi);
    const straordinarioTotaleSec = parseTimeToSeconds(straordinarioTotale);

    const oggi = new Date();
    oggi.setHours(0, 0, 0, 0);
    const ingressoDate = new Date(oggi.getTime() + ingressoSec * 1000);

    let uscitaParziale = new Date(ingressoDate.getTime() + (standardSec + recuperoSec + straordinarioOggiSec) * 1000);
    let uscitaTotale = (pausa === "00:00") ? new Date(uscitaParziale.getTime() + mezzora * 1000) : new Date(uscitaParziale.getTime() + pausaSec * 1000);

    document.getElementById('uscita').textContent = uscitaTotale.toTimeString().slice(0,5);

    const oraCorrente = new Date();
    const ora = uscitaTotale.toTimeString().slice(0,5);

    let straordinarioAggiuntivo = 0;
    let oreAgg;
    let minutiAGG;
    let straordinarioAggFormattato;
    if (oraCorrente > uscitaTotale) {
         straordinarioAggiuntivo = Math.floor((oraCorrente - uscitaTotale) / 1000);
         oreAgg = String(Math.floor(straordinarioAggiuntivo / 3600)).padStart(2, '0');
         minutiAGG = String(Math.floor((straordinarioAggiuntivo % 3600) / 60)).padStart(2, '0');
         straordinarioAggFormattato = `${oreAgg}:${minutiAGG}`;
    }
    if (uscitaTotale > oraCorrente) {
       document.getElementById('messaggio').textContent = t.messaggioAttendi(ora);
       document.getElementById('immagine').src = 'images/bianconiglio_triste.png';
    } else {
        straordinarioOggiCalcolatoSec = Math.floor((oraCorrente - uscitaTotale) / 1000);
    
       
        document.getElementById('messaggio').textContent = t.messaggioTardi(ora, straordinarioAggFormattato);
        document.getElementById('immagine').src = 'images/bianconiglio_felice.png';

    }
    document.getElementById('immagine').hidden = false;
    const nuovoStraordinarioSec = straordinarioTotaleSec + straordinarioOggiSec + straordinarioAggiuntivo;
    const ore = String(Math.floor(nuovoStraordinarioSec / 3600)).padStart(2, '0');
    const minuti = String(Math.floor((nuovoStraordinarioSec % 3600) / 60)).padStart(2, '0');
    document.getElementById('nuovoStraordinario').textContent = `${ore}:${minuti}`;

}



// All'avvio della pagina, imposta la lingua di default (Italiano)
window.addEventListener('load', () => {
  calcolaOrarioUscita();
});

