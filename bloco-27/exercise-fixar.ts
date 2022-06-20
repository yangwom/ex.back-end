class Person {
	name: string;
	idade: number;
	cor: string;
	rg: number;

	constructor(name: string, idade: number, cor: string, rg: number) {
		this.name = name;
		this.idade = idade;
		this.cor = cor;
		this.rg = rg;
	}

	idetificar() {
		console.log(`ola seja bem vindo ${this.name}`);
		console.log(`sua idade ${this.idade}`);
		console.log(`sua cor ${this.cor}`);
		console.log(`seu rg ${this.rg}`);
	}
}

const seusDados = new Person("yang", 22, "preta", 29837345563);

seusDados.idetificar();
