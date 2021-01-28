function endereco() {
    var cep = document.getElementById("cep");
    var url = "http://viacep.com.br/ws/" + cep.value + "/json/";

    var complemento = document.getElementById("complemento");
    var bairro = document.getElementById("bairro");
    var localidade = document.getElementById("localidade");
    var uf = document.getElementById("uf");
    var logradouro = document.getElementById("logradouro");
    var ddd = document.getElementById("ddd");



    fetch(url, { method: 'GET' })
        .then(
            response => {
                response.json()
                    .then(data => {
                        logradouro.value = data.logradouro;
                        complemento.value = data.complemento;
                        bairro.value = data.bairro;
                        localidade.value = data.localidade;
                        ddd.value = data.ddd;
                        uf.value = data.uf;

                    })
            })
        .catch(err => {
            logradouro.value = "";
            complemento.value = "";
            bairro.value = "";
            localidade.value = "";
            ddd.value = "";
            uf.value = "";
            alert("CEP NAO ENCONTRADO");
        })
}