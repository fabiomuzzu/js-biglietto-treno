Ciao ragazzi,
esercizio di oggi: calcolo del prezzo del biglietto del treno
cartella/repo js-biglietto-treno
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo) in console.log()
BONUS
1 - Mostrare il risultato a video in html;
2 - Stilizzare con i css la pagina


Svolgimento:

1 - creare prompt per numero di KM da percorrere
2 - creare prompt per età
3 - Creare dati comuni, const per €/km
4 - creare funzione con calcolo del prezzo totale del biglietto (0.21 € al km)
5 - creare "classi" specifiche per la scontistica:
5.a - 20% sc per i < 18 anni
5.b - 40% sc per i > 65 anni
5.c prezzo pieno per >= 18 anni fino a <= 65 anni
6 - creare output utilizzando tofixed