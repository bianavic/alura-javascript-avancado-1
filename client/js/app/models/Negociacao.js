// Inicia com letra maiuscula para deixar claro que o codigo dentro deste js é uma classe

class Negociacao {
    // define atributos de uma classe com  constructor
    constructor(data, quantidade, valor) {
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
        Object.freeze(this);     // o this representa o n1    
    }

    // criar funcao dentro de uma classe = METODO
    // criar funcao fora da classe = FUNCAO

    get volume() {
        return this._quantidade * this._valor;
    }

    get data() {
        return this._data;
    }
    get quantidade() {
        return this._quantidade;
    }
    get valor() {
        return this._valor;
    }
}