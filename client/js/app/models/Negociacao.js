// Inicia com letra maiuscula para deixar claro que o codigo dentro deste js é uma classe

class Negociacao {
    // define atributos de uma classe com  constructor
    constructor(data, quantidade, valor) {
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;        
    }

    // criar funcao dentro de uma classe = METODO
    // criar funcao fora da classe = FUNCAO

    getVolume() {
        return this._quantidade * this._valor;
    }

    getData() {
        return this._data;
    }
    getQuantidade() {
        return this._quantidade;
    }
    getValor() {
        return this._valor;
    }
}