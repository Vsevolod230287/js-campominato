// Il computer deve generare 16 numeri casuali tra 1 e 100.

// I numeri non possono essere duplicati.

// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.

// L’utente non può inserire più volte lo stesso numero.

// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
// Bonus (da fare solo se funziona tutto il resto)
// all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali: con difficoltà 0 => tra 1 e 100 con difficoltà 1 => tra 1 e 80 con difficoltà 2 => tra 1 e 50
var difficolta = parseInt(prompt("Scegli la difficolta: 0 1 2 ?"));

      switch (difficolta) {
        case 0:
          var numeriRandom = [];
          while (numeriRandom.length < 16) {
            var num = randomNumberInRange(1, 100);
            if (!numeriRandom.includes(num)) {
              numeriRandom.push(num);
            }
          }
          console.log(numeriRandom);

          var arrayUtente = [];
          var trovato = false;
          while (arrayUtente.length <= (100 - 16) && !trovato) {
            var numeroUtente = parseInt(prompt("Dammi un numero da 0 - 100: "));
            if (numeriRandom.includes(numeroUtente)) {
              console.log("Hai perso, beccando una bommba!");
              console.log("il tuo punteggio e: " + arrayUtente.length);
              trovato = true;
            } else if (arrayUtente.length == (100 - 16)) {
              console.log("Hai vinto");
              console.log("il tuo punteggio e: " + arrayUtente.length);
            } else if (!arrayUtente.includes(numeroUtente) && 1 <= numeroUtente && numeroUtente <= 100) {
              arrayUtente.push(numeroUtente);
            } else {
              alert("Non ripettere i numeri, e inserisci un numero da 1 a 100!")
            }

          }
          console.log(arrayUtente);
          break;

        case 1:
          var numeriRandom = [];
          while (numeriRandom.length < 16) {
            var num = randomNumberInRange(1, 80);
            if (!numeriRandom.includes(num)) {
              numeriRandom.push(num);
            }
          }
          console.log(numeriRandom);

          var arrayUtente = [];
          var trovato = false;
          while (arrayUtente.length <= (80 - 16) && !trovato) {
            var numeroUtente = parseInt(prompt("Dammi un numero da 0 - 80: "));
            if (numeriRandom.includes(numeroUtente)) {
              console.log("Hai perso, beccando una bommba!");
              console.log("il tuo punteggio e: " + arrayUtente.length);
              trovato = true;
            } else if (arrayUtente.length == (80 - 16)) {
              console.log("Hai vinto");
              console.log("il tuo punteggio e: " + arrayUtente.length);
            } else if (!arrayUtente.includes(numeroUtente) && 1 <= numeroUtente && numeroUtente <= 80) {
              arrayUtente.push(numeroUtente);
            } else {
              alert("Non ripettere i numeri, e inserisci un numero da 1 a 80!")
            }

          }
          console.log(arrayUtente);
          break;

        case 2:
          var numeriRandom = [];
          while (numeriRandom.length < 16) {
            var num = randomNumberInRange(1, 50);
            if (!numeriRandom.includes(num)) {
              numeriRandom.push(num);
            }
          }
          console.log(numeriRandom);

          var arrayUtente = [];
          var trovato = false;
          while (arrayUtente.length <= (50 - 16) && !trovato) {
            var numeroUtente = parseInt(prompt("Dammi un numero da 0 - 50: "));
            if (numeriRandom.includes(numeroUtente)) {
              console.log("Hai perso, beccando una bommba!");
              console.log("il tuo punteggio e: " + arrayUtente.length);
              trovato = true;
            } else if (arrayUtente.length == (50 - 16)) {
              console.log("Hai vinto");
              console.log("il tuo punteggio e: " + arrayUtente.length);
            } else if (!arrayUtente.includes(numeroUtente) && 1 <= numeroUtente && numeroUtente <= 50) {
              arrayUtente.push(numeroUtente);
            } else {
              alert("Non ripettere i numeri, e inserisci un numero da 1 a 50!")
            }

          }
          console.log(arrayUtente);
          break;

      }








      function randomNumberInRange(min, max) {
        if (isNaN(min) || isNaN(max)) {
          console.log("Non sono numeri");
        } else {
          return Math.floor(Math.random() * (max - min + 1)) + min;
        }
      }
