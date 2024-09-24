// CLASSE
class carro {
    constructor(modelo, marca, ano) {
        this.modelo;
        this.marca;
        this.ano;
    }
}

//----------------------------------------------------------------------------

// OBJETO
let person = new Object ();
person.nome =  "Noemi";
person.idade = "16";
person.prosfficao = "Estudante";

//----------------------------------------------------------------------------

//ATRIBUTO
    this.modelo;
    this.marca;
    this.ano;
    
//----------------------------------------------------------------------------

//MÉTODO
let caculadora = {
    somar: function(a, b){
        return a + b;
    }
}

//----------------------------------------------------------------------------
//HERANÇA
function Person(first, last, age, gender, interests) {
  this.name = {
    first,
    last,
  };
  this.age = age;
  this.gender = gender;
  this.interests = interests;
}

//----------------------------------------------------------------------------
//POLIMORFISMO
Class carroEsportivo extends  carro {
    public contructor(modelo, marca, ano, velocidadeMaxima) {
        super();
        this.modelo = modelo;
        this.marca = marca;
        this.ano = ano;
        this.velocidadeMaxima = velocidadeMaxima;
    }
}

//----------------------------------------------------------------------------
//LIGAÇÃO DINÂMICA
void Falar (Falar, f) {
    f.Falar();
}