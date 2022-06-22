import Character from "./Character";
import MeleeCharacter from "./MeleeCharacter";


class LongRangeCharacter extends Character {
  talk(): void {
    console.log(`${this.name} esta falando a por muito tempo`);
  }

  specialMove(): void {
    console.log(`${this.name} esta correndo em alta velocidade por muito tempo`);
  }
}

const pedro = new MeleeCharacter('pedro');
const yang = new LongRangeCharacter('yang');

const person = (character: Character): void => {
  character.specialMove()
  character.talk()
}
person(pedro);
person(yang);

export default LongRangeCharacter