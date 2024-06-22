function Frete(){
    
    let Produto = document.getElementById("Produto");
    let Origem = document.getElementById("Origem");
    let Destino = document.getElementById("Destino");
    let Veiculo = document.getElementById("Veiculo");
    let Valor = document.getElementById("Valor");
    let Data = document.getElementById("Data");
    let msgError = document.getElementById("erro");
    let msgSuccess = document.getElementById("Success");
    let validaFrete = false;
    let validateData = false;

    if (Data.value != null) {
        validateData = true;
    } else {
        validateData = false;
    }

    if (Produto.value.length >= 5 && Origem.value.length >= 7 && Destino.value.length >= 9 && Valor.value.length >= 3 && validateData == true) {
        validaFrete = true;
    } else {
        validaFrete = false;
    }
    
    if (validaFrete == true) {
        let listaFrete = JSON.parse(localStorage.getItem('listaFrete') || '[]')
        var id = listaFrete.length;

        listaFrete.push({
            ID: id + 1,
            prodFrete: Produto.value,
            origemFrete: Origem.value,
            destinoFrete: Destino.value,
            veiculoFrete: Veiculo.value,
            valorFrete: Valor.value,
            dataFrete: Data.value
        })

        localStorage.setItem('listaFrete', JSON.stringify(listaFrete))

        msgSuccess.setAttribute('style', 'display: block');
    } else {
        msgError.setAttribute('style', 'display: block')
    }

}

function logout(){
    window.location.href = '../paginaLogin/index.html';
}