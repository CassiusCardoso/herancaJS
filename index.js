function BankAccount(saldo, conta, numero){
    this.saldo = saldo;
    this.conta = conta;
    this.numero = numero;
}

BankAccount.prototype.sacar = function(valor){
    if(this.saldo < valor){
        console.log(`Tá sem saldo mano, saldo: ${this.saldo}`)
        return
    }

    this.saldo -= valor
    this.saldoConta()
}

BankAccount.prototype.depositar = function(valor){
    this.saldo += valor
    this.saldoConta()
}

BankAccount.prototype.saldoConta = function(){
    console.log(`${this.conta}, número ${this.numero}, saldo: ${this.saldo}`)
}

const contaPoupanca = new BankAccount(150, 'Poupança', 11)
// contaPoupanca.sacar(1005)
// console.log(contaPoupanca)

function ContaCorrente(saldo, conta, numero, limite){
    BankAccount.call(this, saldo, conta, numero);
    this.limite = limite;
}

ContaCorrente.prototype = Object.create(BankAccount.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

ContaCorrente.prototype.sacar = function(valor){
    if (valor > (this.saldo + this.limite)){
        console.log(`Boa`);
        return;
    }
    this.saldo -= valor;
    this.saldoConta();
};

const contaC = new ContaCorrente(10, 1, 1, 2000)
contaC.sacar(2000)

const frutas = ['maça', 'uva', 'tomate', 'açai', 'banana', 'mamão'];
const [maca, uva, tomate, ...resto] = frutas;
console.log(maca, uva, tomate, resto);
