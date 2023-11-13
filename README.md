

###BOM - Browser Object Model:

L'oggetto window è l'oggetto principale del modello a oggetti del browser (BOM). Rappresenta la finestra del browser corrente e contiene proprietà e metodi per manipolare le dimensioni della finestra, navigare tra le pagine e altro ancora. Il BOM è tutta la finestra del browser copresa la barra degli indirizzi ed è rappresentato dall'oggetto window. che ha tante proprietà tra le quali c'è document che rappresenta il DOM.                    
![](/img/schema.jpeg.png)

Alcune delle proprietà più comuni dell'oggetto window includono:
- **Document**: è il documento HTML che abbiamo caricato nella pagina web. *window.document.getEleentById( ) essendo sottinteso che quando parliamo di document ci riferiamo all'oggetto window. non lo scriviamo*
- **History**: rappresenta la cronologia di navigazione del browser.
- **Screen**: rappresenta le informazioni sullo schermo del dispositivo.
- **Navigator**: rappresenta le informazioni sul browser utilizzato.
- **Location**: rappresenta l'URL della pagina web corrente.
---


Alcuni dei metodi più comuni dell'oggetto window includono:
- **open**: crea una nuova finestra del browser.
- **alert**: visualizza un messaggio di avviso all'utente.
- **confirm**: visualizza un messaggio di conferma all'utente e richiede un input.
- **prompt**: visualizza un messaggio di input all'utente e richiede un input.
---
**esempio per screen.availHeight/availWidth**

```
const height = screen.availHeight;
const width = screen.availWidth;
console.log(height, width); 
```
*Ci permette di ottenere l'altezza/ larghezza disponibile dello schermo*

---
**esempio per inner.Height/Width**
```
const liveHeight = window.innerHeight;
const liveWidth = window.innerWidth;
console.log(liveHeight, liveWidth);
```
*Ci permette di ottenere l'altezza/larghezza del viewport in tempo reale (al reload della pagina)*

---
**esempio per location.href**
```
const url = window.location.href
console.log(url);
```
*Ci permette di accedere all'URL della pagina web*

---
**esempio per location.replace**
```
window.location.replace("https://boolean.careers/");
```
*Può essere utilizzato per vari scopi:*
*- Per reindirizzare l'utente a una pagina diversa senza aggiungere la nuova pagina alla cronologia del browser.*
*- Per impedire all'utente di tornare a una pagina precedente, ad esempio dopo aver inviato un modulo.*

---
**apertura nuova finestra**
```
window.open() 
```
*riassunto parametri principali e dei loro valori:*
![](/img/Cattura.1.PNG)

---
**chiusura della finestra**
```
window.close()
```
*non accetta parametri in ingresso*

---
**eseguire una funzione dopo il caricamento della pagina**
```
window.onload = function() {

}
```

---
**alcuni metodi per la proprietà history**
```
history.back()
```
*equivale a premere la freccia, legata alla cronologia, indietro nel browser*

```
history.forward()
```
*equivale a premere la freccia, legata alla cronologia, avanti nel browser*






