// Inicia com letra maiuscula para deixar claro que o codigo dentro deste js é uma classe

class Negociacao {
    // define atributos de uma classe com  constructor
    constructor(data, quantidade, valor) {
        this._data = new Date(data.getTime()); // programação defensiva
        this._quantidade = quantidade;
        this._valor = valor;
        // freeze é shallow, fica apenas na superfície. nao consegue congelar um objeto ( _data )
        Object.freeze(this);     // o this representa o n1    
    }

    // criar funcao dentro de uma classe = METODO
    // criar funcao fora da classe = FUNCAO

    get volume() {
        return this._quantidade * this._valor;
    }

    get data() {
        return new Date(this._data.getTime());
    }
    get quantidade() {
        return this._quantidade;
    }
    get valor() {
        return this._valor;
    }
}