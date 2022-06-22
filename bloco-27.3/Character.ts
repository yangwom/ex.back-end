abstract class Character {
  constructor(public name: string) {}
  
  abstract talk(): void;

  abstract specialMove(): void;
}


export default Character
