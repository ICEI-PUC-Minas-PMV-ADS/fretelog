function Frete() {
    let Produto = document.getElementById("Produto");
    let Origem = document.getElementById("Origem");
    let Destino = document.getElementById("Destino");
    let Veiculo = document.getElementById("Veiculo");
    let Valor = document.getElementById("Valor");
    let Data = document.getElementById("Data");
    let msgError = document.getElementById("erro");
    let msgSuccess = document.getElementById("Success");
    let validaFrete = false;
    let validateData = Data.value != null;

    if (Produto.value.length >= 5 && Origem.value.length >= 7 && Destino.value.length >= 9 && Valor.value.length >= 3 && validateData) {
        validaFrete = true;
    } else {
        validaFrete = false;
    }
    
    if (validaFrete) {
        // Atualizado: Mudança da chave 'frete' para 'fretes'
        let fretes = JSON.parse(localStorage.getItem('fretes') || '[]');
        var id = fretes.length;

        fretes.push({
            ID: id + 1,
            prodFrete: Produto.value,
            origemFrete: Origem.value,
            destinoFrete: Destino.value,
            veiculoFrete: Veiculo.value,
            valorFrete: Valor.value,
            dataFrete: Data.value
        });

        // Atualizado: Mudança da chave 'frete' para 'fretes'
        localStorage.setItem('fretes', JSON.stringify(fretes));

        msgSuccess.setAttribute('style', 'display: block');
        msgError.setAttribute('style', 'display: none');
    } else {
        msgError.setAttribute('style', 'display: block');
        msgSuccess.setAttribute('style', 'display: none');
    }
}

function logout() {
    window.location.href = '../paginaLogin/index.html';
}
