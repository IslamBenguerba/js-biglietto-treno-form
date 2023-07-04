const bottone = document.getElementById('create')
bottone.addEventListener("click", calcolo)
function calcolo() {
    const card = document.getElementById('card')
    card.classList.remove('d-none')
    const utente = document.getElementById('user').value
    const distanza = document.getElementById('distanza').value
    const eta = document.getElementById('anni').value
    let costobiglietto = distanza * 0.21;
    console.log(eta)
    if (eta < 18) {
        let sconto = ((costobiglietto * 20) / 100)
        let prezzofinale = costobiglietto - sconto;
        let prezzo = document.getElementById('prezzo').innerHTML = `${prezzofinale}`
    } else if (eta >= 65) {
        let sconto = ((costobiglietto * 40) / 100)
        let prezzofinale = costobiglietto - sconto;
        let prezzo = document.getElementById('prezzo').innerHTML = `${prezzofinale}`
    } else{
        let sconto = 0
        prezzofinale = costobiglietto
        let prezzo = document.getElementById('prezzo').innerHTML = `${prezzofinale}`
    }
    let cliente = document.getElementById('nomecliente').innerHTML = `${utente}`
    
} 

const btnAnnulla = document.getElementById('biglietto')
btnAnnulla.addEventListener("click", annulla)
function annulla() {
    const card = document.getElementById('card')
    card.classList.add('d-none')
}