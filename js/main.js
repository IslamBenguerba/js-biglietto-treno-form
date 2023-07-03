const bottone = document.getElementById('create')
bottone.addEventListener('click', calcolo);
function calcolo() {
    const utente = document.getElementById('user').value
    const distanza = document.getElementById('distanza').value
    const eta = document.getElementById('anni').valueconst 
    const finaluser = document.getElementById('nomecliente').innerHTML = `${utente}`
    
    let costobiglietto= distanza * 0.21;
    if (eta <18){
        let sconto = ((costobiglietto * 20) / 100)
        let prezzofinale = costobiglietto - sconto;
        return prezzofinale
    } else if(eta >=65){
        let sconto = ((costobiglietto * 40) / 100)
        let prezzofinale = costobiglietto - sconto;
        return prezzofinale
    }
    return prezzofinale
}

const finalprice = document.getElementById('prezzo').innerHTML = `${prezzofinale}`

