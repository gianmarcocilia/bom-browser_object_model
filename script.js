/*PROPRIETA' SCREEN*/

/*Ci permette di ottenere l'altezza/ larghezza disponibile dello schermo*/
// const height = screen.availHeight;
// const width = screen.availWidth;
// console.log(height, width); 

/*Ci permette di ottenere l'altezza/larghezza del viewport in tempo reale (al reload della pagina)*/
// const liveHeight = window.innerHeight;
// const liveWidth = window.innerWidth;
// console.log(liveHeight, liveWidth);

/**PROPRIETA' LOCATION*/

/**Ci permette di accedere all'URL della pagina web*/
const url = window.location.href
console.log(url);

/**Con questo metodo possiamo rimpiazzare l'url della nostra pagina*/
// window.location.replace("https://boolean.careers/");

/**Può essere utilizzato per vari scopi, come ad esempio:
Per reindirizzare l'utente a una pagina diversa senza aggiungere la nuova pagina alla cronologia del browser.
Per impedire all'utente di tornare a una pagina precedente, ad esempio dopo aver inviato un modulo. */

/** WINDOW*/
/**Ci permette di aprire una nuova finestra */
// window.open("https://boolean.careers/");


// window.open(url, name, params);

let params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,
width=600,height=300,left=100,top=100`;

window.open('https://boolean.careers/', 'test', params);


/**Ci permette di chiudere la pagina corrente */
// window.close() 

/**Ci permette di eseguire una funzione dopo il caricamento della pagina */
window.onload = function() {
  
}


// PROPRIETA' HISTORY
// history.back() - Stessa cosa di premere la freccia indietro nel browser
// history.forward() - Stessa cosa di premere la freccia avanti nel browser






