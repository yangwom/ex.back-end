import { CipherNameAndProtocol } from "tls";

 type soma = {
     a: number;
     b: number;
 }

 type andress = {
     endereço: string
 }

 const valordaSoma = (result: soma ):void => {
     const { a, b } = result
  console.log(a + b) 
 }

 const seuendereço = (andress: andress) => {
 console.log( `seu endereço é ${andress.endereço}`)
 }

 seuendereço({ endereço: 'rua do seu zé' })

 valordaSoma({ a:100, b:200 } )

 function getArray<T>(items : T[]) : void {
    console.log(items) 
}

type orName = {
    name: string;
    age: number;
}

const arrayObject: orName[] = [{ name: 'oi', age: 18 }]

console.log(arrayObject)

getArray([1,2,3,3,4, 'esse são os numeros'])


 enum EyeColor {
    Black = "Pretos",
    Blue = "Azuis",
    Green = "Verdes",
    Brown = "Castanhos",
}