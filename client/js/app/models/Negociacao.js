// Inicia com letra maiuscula para deixar claro que o codigo dentro deste js é uma classe

class Negociacao {
    // define atributos de uma classe com  constructor
    constructor(data, quantidade, valor) {
        this.data = data;
        this.quantidade = quantidade;
        this.valor = valor;        
    }

    // criar funcao dentro de uma classe = METODO
    // criar funcao fora da classe = FUNCAO

    obtemVolume() {
        this.quantidade * this.valor;
    }
}