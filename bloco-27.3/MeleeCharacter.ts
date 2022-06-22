import Character from "./Character";

class meleeCharacter extends Character {
  talk(): void {
   console.log(`${this.name} esta falando` )
  } 

  specialMove(): void {
    console.log(`${this.name} esta correndo em alta velocidade`)
  }
}
