# Campo Minato

## Milestone 1

L'utente clicca su un bottone che genererà una griglia di gioco quadrata. Ogni cella ha un numero progressivo, da 1 a 100. Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

#### Bonus:

Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;

### Steps:

- Creo una costante per l'elemento DOM del bottone "Play"
- Creo una costante per l'elemento DOM che ospiterà la griglia
- Creo una costante per il markup del singolo elemento della griglia
- Genero tutti gli elementi della griglia
- Inserisco all'interno di ogni elemento un numero casuale da 1 a 100 (senza farli ripetere)
- Genero il container della griglia al click del bottone "Play"
- Creo una costante per l'elemento DOM della cella della griglia
- Al click della cella ne cambio il colore e faccio apparire in console il numero della cella cliccata tramite un event listener

***

## Milestone 2

Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: i funghi magici.

Attenzione: nella stessa cella può essere posizionato al massimo un fungo, perciò nell’array dei funghi non potranno esserci due numeri uguali.

### Steps:

- Creo una lista vuota
- Creo una funzione per generare un numero random tra 1 e il massimo numero di celle definito dalla difficoltà scelta
- Verifico se il numero è già presente nella lista
  - SE non è presente:
    - Inserisco il numero nella lista
- Genero numeri randomici finchè la lista creata non si sarà riempita

***

In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati
- abbiamo calpestato una fungo
- la cella si colora di rosso e la partita termina.

Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.

### Steps:

- Leggo il numero della cella cliccata
- Verifico se il numero della cella cliccata è contenuto nella lista di numeri randomici generati in precedenza
  - SE è contenuto:
    - Coloro la cella di rosso
    - Faccio comparire un fungo nella cella
  - ALTRIMENTI:
    - Coloro la cella di un altro colore

***

La partita termina quando il giocatore clicca su una fungo o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono funghi).

Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una fungo.

### Steps:

- Creo una variabile per tenere il conto del numero di celle cliccate
- SE il numero di celle cliccate è uguale al numero di celle totali meno il numero di celle con funghi:
  - Termino il gioco
  - Disabilito i click delle celle
  - Mostro all'utente il risultato

***

### Tools:

- Variabili e costanti
- Math.floor()
- Math.random()
- Array.push()
- document.getElementById()/document.queryselector()/document.queryselectorAll()
- element.InsertAdjacentHTML()
- for loop
- if/else if/else
- element.AddEventListener()