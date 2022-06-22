// exercicios 01

class student {
	_matricula: string;
	_name: string;
	_notasDaProva: Array<number>;
	_notasDoTrabalho: Array<number>;

	constructor(matricula: string, name: string) {
		this._matricula = matricula;
		this._name = name;
		this._notasDaProva = [];
		this._notasDoTrabalho = [];
	}

	name(_name: string) {
		if (_name.length < 3) throw new Error("no minimo 3 caracteres");
		return (this._name = _name);
	}

	notasDaProva(notas: Array<number>): number[] {
		if (notas.length > 4) throw new Error("so pode possuir 4 notas");
		return (this._notasDaProva = notas);
	}

	notasDoTrabalho(notas: Array<number>): number[] {
		if (notas.length > 2)
			throw new Error(
				"só pode possuir 2 notas de trabalhos."
			);
		return this._notasDoTrabalho = notas;
	}
}

const data = new student('123343', 'yang')
data.notasDaProva([1,2,3])
data.notasDoTrabalho([3,2])
console.log(data)
