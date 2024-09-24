/* Recuperação Final - Crie um algoritmo de contatos em que se cadastre os clientes, solicitando os seguintes dados:
nome completo, CPF e endereço (cep, logradouro, numero, complemento, bairro, cidade e uf) de 5 até 100 pessoas.

Exiba todos os dados cadastrados e os seus resultados na página HTML.

Regras:
Todos os campos devem ser válidos e cumprir os requisitos mínimos de validação. */
inicio();

// Função de iniciar algoritmo, ela ira iniciar as funções principais, como  cadastrarCliente e exibirCadastroCliente.
function inicio() {
    let nomes = [];
    let cpfs = [];
    let enderecos = [];
    let continuar = true;
    let contador = 0;

    while (continuar && contador < 100) {
        cadastrarCliente(nomes, cpfs, enderecos);
        contador++;
        if (contador >= 1) {
            continuar = confirm("Deseja continuar o cadastro?");
        }
    }
    exibirCadastroCliente(nomes, cpfs, enderecos);
}

// Função de cadastro de cliente, ela ira iniciar as funções auxiliares, como cadastrarNomes, cadastrarCpfs e cadastrarEnderecos.
function cadastrarCliente(nomes, cpfs, enderecos) {
    let nome = cadastrarNomes();
    let cpf = cadastrarCpfs();
    let endereco = cadastrarEnderecos();

    nomes.push(nome);
    cpfs.push(cpf);
    enderecos.push(endereco);
}

// Função de cadastro de nome, não pode deixar o prompt vazio, e o espaço(" ") tem que estar no 3°length ou mais para ser válido.
function cadastrarNomes() {
    let nome;
    do {
        nome = prompt("Informe o Nome completo:").trim();
        if (nome === "" || nome.indexOf(" ") < 3) {
            alert("Nome inválido. Informe o Nome novamente.");
        }
    } while (nome === "" || nome.indexOf(" ") < 3);
    return nome;
}

// Função de cadastro de cpfs, não pode deixar o prompt vazio, tem que ter 11°length, precisa ter números e precisa estar no formato "xxx.xxx.xxx-xx"..
function cadastrarCpfs() {
    let cpf;
    do {
        cpf = prompt("Informe o CPF (apenas números):").trim();
        if (cpf === "" || cpf.length !== 11 || isNaN(cpf)) {
            alert("CPF inválido. Informe o CPF novamente (11 dígitos numéricos).");
        }
    } while (cpf === "" || cpf.length !== 11 || isNaN(cpf));
    return `${cpf.slice(0, 3)}.${cpf.slice(3, 6)}.${cpf.slice(6, 9)}-${cpf.slice(9, 11)}`;
}

// Função de cadastro de endereços.
function cadastrarEnderecos() {
    // Cadastro de cep, não pode deixar o prompt vazio, tem que ter 8°length, precisa ter números e precisa estar no formato "xxxxx-xxx".
    let cep;
    do {
        cep = prompt("Informe o CEP:").trim();
        if (cep === "" || cep.length !== 8 || isNaN(cep)) {
            alert("CEP inválido. Informe o CEP corretamente (8 dígitos numéricos).");
        }
    } while (cep === "" || cep.length !== 8 || isNaN(cep));
    cep = `${cep.slice(0, 5)}-${cep.slice(5, 8)}`

    // Cadastro de logradouro, não pode deixar o prompt vazio. 
    let logradouro;
    do {
        logradouro = prompt("Informe o Logradouro:").trim();
        if (logradouro === "") {
            alert("Logradouro inválido. Informe o Logradouro corretamente.");
        }
    } while (logradouro === "");

    // Cadastro de número, não pode deixar o prompt vazio e precisa ter números.
    let numero;
    do {
        numero = prompt("Informe o Número:").trim();
        if (numero === "" || isNaN(numero)) {
            alert("Número inválido. Informe o Número corretamente.");
        }
    } while (numero === "" || isNaN(numero));

    // Cadastro de complemento, opcional.
    let complemento = prompt("Informe o Complemento (opcional):").trim();

    // Cadastro de bairro, não pode deixar o prompt vazio.
    let bairro;
    do {
        bairro = prompt("Informe o Bairro:").trim();
        if (bairro === "") {
            alert("Bairro inválido. Informe o Bairro corretamente.");
        }
    } while (bairro === "");

    // Cadastro de cidade, não pode deixar o prompt vazio.
    let cidade;
    do {
        cidade = prompt("Informe a Cidade:").trim();
        if (cidade === "") {
            alert("Cidade inválida. Informe a Cidade corretamente.");
        }
    } while (cidade === "");

    // Cadastro de uf, ter que tem uma length igual a 2 e precisa ser válido.
    let uf;
    const enderecouf = ["AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RS", "RO", "RR", "SC", "SP", "SE", "TO"];
    do {
        uf = prompt("Informe a UF (Estado):").trim().toUpperCase();
        if (uf.length !== 2 || !enderecouf.includes(uf)) {
            alert("UF inválido. Informe o Estado com 2 caracteres.");
        }
    } while (uf.length !== 2 || !enderecouf.includes(uf));

    return { cep, logradouro, numero, complemento, bairro, cidade, uf };
}

// Função de exibir cadastro do cliente.
function exibirCadastroCliente(nomes, cpfs, enderecos) {
    document.write("<h2>Cadastro de Clientes</h2>");
    for (let i = 0; i < nomes.length; i++) {
        document.write(`<p>Nome: ${nomes[i]}<br>
            CPF: ${cpfs[i]}<br>
            <h3>Endereço:</h3>
            Logradouro: ${enderecos[i].logradouro}<br>
            Número: ${enderecos[i].numero}<br>
            Complemento: ${enderecos[i].complemento}<br>
            Bairro: ${enderecos[i].bairro}<br>
            Cidade: ${enderecos[i].cidade}<br>
            UF: ${enderecos[i].uf}<br>
            CEP: ${enderecos[i].cep}</p>`);
    }
}
