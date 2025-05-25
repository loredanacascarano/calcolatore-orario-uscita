const translations = {
  ba: {
    title: "Calcolatòre d'a Sciutè",
    ingresso: "Orarije d'entrate",
    recupero: "Ore ca si in debbit",
    pausa: "Orarije da pause",
    durataStandard: "Orarije standard d'u turne",
    straordinarioOggi: "Straordinàrie d'ògghe",
    straordinarioTotale: "Straordinàrie accumulàte",
    calcola: "Calcol' a sciutè",
    uscita: "Orarije d'a sciutè",
    messaggioAttendi: ora => `Aspètt' fin a ${ora}... U cunigliòne bbiangh stè ancora a bbivere 'u cafè! ☕🐰`,
    messaggioTardi: (ora, straordinario) => `Potev' sci' a ${ora}... 🍹🐰\n Straordinàrie accumulàte oggi: ${straordinario}`,
    straordinarioTotaleLabel: "Straordinàrie d'ògghe"
  },
  mi: {
    title: "Calculadur d'ora de sciò",
    ingresso: "Ora d'entrada",
    recupero: "Ora in debit",
    pausa: "Temp de pausa",
    durataStandard: "Durada standard del turn",
    straordinarioOggi: "Straordinari d'incö",
    straordinarioTotale: "Straordinari accumulà",
    calcola: "Calcula l'ora de sciò",
    uscita: "Ora de sciò",
    messaggioAttendi: ora => `Aspetta fina a ${ora}... El Conigli Bianch l'è ancora lì che beve el caffè! ☕🐰`,
    messaggioTardi: (ora, straordinario) => `Pudiv sciò a ${ora}... 🍹🐰\n Straordinari d'incö: ${straordinario}`,
    straordinarioTotaleLabel: "Straordinari d'incö"
  },
  ve: {
    title: "Calcolador de l'Ora de 'ndar via",
    ingresso: "Ora d'entrada",
    recupero: "Ore in debito",
    pausa: "Tempo de pausa",
    durataStandard: "Durada standard del turno",
    straordinarioOggi: "Straordinario de 'ncò",
    straordinarioTotale: "Straordinario cumulà",
    calcola: "Calcola l'ora de 'ndar via",
    uscita: "Ora de 'ndar via",
    messaggioAttendi: ora => `Speta fin a le ${ora}... El Conièo Bian l'è ancora a bevarse el cafè! ☕🐰`,
    messaggioTardi: (ora, straordinario) => `Te podevi 'ndar via alle ${ora}... 🍹🐰\n Straordinario de 'ncò: ${straordinario}`,
    straordinarioTotaleLabel: "Straordinario de 'ncò"
  },
  it: {
    title: "Calcolatore Orario di Uscita",
    ingresso: "Orario di ingresso",
    recupero: "Ore in debito",
    pausa: "Ore di pausa",
    durataStandard: "Durata standard di lavoro",
    straordinarioOggi: "Ore straordinario da fare",
    straordinarioTotale: "Ore straordinario accumulato",
    calcola: "Calcola Orario di Uscita",
    uscita: "Orario di Uscita",
    messaggioAttendi: ora => `Aspetta l'ora ${ora}... Il Bianconiglio non ha ancora finito il cappuccino! ☕🐰`,
    messaggioTardi: (ora, straordinario) => `Potevi uscire alle ${ora}... 🍹🐰\n Straordinario accumulato oggi: ${straordinario}`,
    straordinarioTotaleLabel: "Straordinario Totale"
  },
  pa: {
    title: "Calculaturi d'u tempu pi nesciri",
    ingresso: "Orariu d'intrata",
    recupero: "Ore ca si in debbitu",
    pausa: "U tempu di pausa",
    durataStandard: "Orariu standard d'u turnu",
    straordinarioOggi: "Straordinariu d'oggi",
    straordinarioTotale: "Straordinariu accumulatu",
    calcola: "Calcula l'orariu pi nesciri",
    uscita: "Orariu pi nesciri",
    messaggioAttendi: ora => `Aspetta finu a ${ora}... U cunigghiu biancu ancora si stassi a viviri 'u cafè! ☕🐰`,
    messaggioTardi: (ora, straordinario) => `Putivi nesciri a ${ora}... 🍹🐰\n Straordinariu accumulatu oggi: ${straordinario}`,
    straordinarioTotaleLabel: "Straordinariu d'oggi"
  },
  en: {
    title: "Exit Time Calculator",
    ingresso: "Start time",
    recupero: "Hours in debt",
    pausa: "Break time",
    durataStandard: "Standard work duration",
    straordinarioOggi: "Extra hours today",
    straordinarioTotale: "Accumulated overtime",
    calcola: "Calculate Exit Time",
    uscita: "Exit Time",
    messaggioAttendi: ora => `Wait until ${ora}... The White Rabbit is still sipping coffee! ☕🐰`,
    messaggioTardi: (ora, straordinario) => `You could have left at ${ora}... 🍹🐰\n Overtime accumulated today: ${straordinario}`,
    straordinarioTotaleLabel: "Total Overtime"
  },
  de: {
    title: "Berechnung der Ausstiegszeit",
    ingresso: "Startzeit",
    recupero: "Zeitschuld",
    pausa: "Pausenzeit",
    durataStandard: "Standardarbeitszeit",
    straordinarioOggi: "Überstunden heute",
    straordinarioTotale: "Gesammelte Überstunden",
    calcola: "Ausstiegszeit berechnen",
    uscita: "Ausstiegszeit",
    messaggioAttendi: ora => `Warte bis ${ora}... Der weiße Hase trinkt noch seinen Kaffee! ☕🐰`,
    messaggioTardi: (ora, straordinario) => `Du hättest um ${ora} gehen können... 🍹🐰\n Heute gesammelte Überstunden: ${straordinario}`,
    straordinarioTotaleLabel: "Gesamtüberstunden"
  },
  ru: {
    title: "Калькулятор времени выхода",
    ingresso: "Время начала работы",
    recupero: "Долг по времени",
    pausa: "Время перерыва",
    durataStandard: "Стандартная продолжительность работы",
    straordinarioOggi: "Сверхурочные за сегодня",
    straordinarioTotale: "Накопленные сверхурочные",
    calcola: "Рассчитать время выхода",
    uscita: "Время выхода",
    messaggioAttendi: ora => `Подожди до ${ora}... Белый Кролик еще пьет кофе! ☕🐰`,
    messaggioTardi: (ora, straordinario) => `Ты мог уйти в ${ora}... 🍹🐰\n Накопленные сверхурочные сегодня: ${straordinario}`,
    straordinarioTotaleLabel: "Сверхурочные сегодня"
  },
  pl: {
    title: "Kalkulator czasu wyjścia",
    ingresso: "Czas rozpoczęcia",
    recupero: "Godziny do odpracowania",
    pausa: "Przerwa",
    durataStandard: "Standardowy czas pracy",
    straordinarioOggi: "Nadgodziny dzisiaj",
    straordinarioTotale: "Nagromadzone nadgodziny",
    calcola: "Oblicz czas wyjścia",
    uscita: "Czas wyjścia",
    messaggioAttendi: ora => `Poczekaj do ${ora}... Biały Królik jeszcze pije kawę! ☕🐰`,
    messaggioTardi: (ora, straordinario) => `Mogłeś wyjść o ${ora}... 🍹🐰\n Nadgodziny dzisiaj: ${straordinario}`,
    straordinarioTotaleLabel: "Nadgodziny dzisiaj"
  },
  hu: {
    title: "Kilépési idő kalkulátor",
    ingresso: "Munkakezdés időpontja",
    recupero: "Hátralévő idő",
    pausa: "Szünet ideje",
    durataStandard: "Standard munkaidő",
    straordinarioOggi: "Mai túlóra",
    straordinarioTotale: "Összegyűlt túlóra",
    calcola: "Kilépési idő számítása",
    uscita: "Kilépési idő",
    messaggioAttendi: ora => `Várj ${ora}-ig... A Fehér Nyúl még issza a kávéját! ☕🐰`,
    messaggioTardi: (ora, straordinario) => `${ora}-kor elmehettél volna... 🍹🐰\n Mai túlóra: ${straordinario}`,
    straordinarioTotaleLabel: "Mai túlóra"
  },
  sq: {
    title: "Kalkulatori i Kohës së Daljes",
    ingresso: "Ora e hyrjes",
    recupero: "Orë në borxh",
    pausa: "Koha e pushimit",
    durataStandard: "Kohë pune standarde",
    straordinarioOggi: "Orë jashtë orarit sot",
    straordinarioTotale: "Orë jashtë orarit të grumbulluara",
    calcola: "Llogarit kohën e daljes",
    uscita: "Koha e daljes",
    messaggioAttendi: ora => `Prisni deri në orën ${ora}... Lepuri i Bardhë është ende duke pirë kafenë! ☕🐰`,
    messaggioTardi: (ora, straordinario) => `Mund të kishe dalë në orën ${ora}... 🍹🐰\n Orë jashtë orarit të grumbulluara sot: ${straordinario}`,
    straordinarioTotaleLabel: "Orë jashtë orarit sot"
  }
};


function aggiornaTraduzioni() {
  const lang = document.getElementById('lingua').value;
  const t = translations[lang];

  document.getElementById('titolo').textContent = t.title;
  document.getElementById('label-ingresso').textContent = t.ingresso;
  document.getElementById('label-recupero').textContent = t.recupero;
  document.getElementById('label-pausa').textContent = t.pausa;
  document.getElementById('label-standard').textContent = t.durataStandard;
  document.getElementById('label-straordinarioOggi').textContent = t.straordinarioOggi;
  document.getElementById('label-straordinarioTotale').textContent = t.straordinarioTotale;
  document.getElementById('calcolaBtn').textContent = t.calcola;
  document.getElementById('uscitaLabel').textContent = t.uscita;
  document.getElementById('straordinarioTotaleLabel').textContent = t.straordinarioTotaleLabel;
}

// All'avvio della pagina, imposta la lingua di default (Italiano)
window.addEventListener('load', () => {
  document.getElementById('lingua').value = 'it'; // Italiano di default
  aggiornaTraduzioni();
});

