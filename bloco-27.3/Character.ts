abstract class Character {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  abstract talk(): void;

  abstract specialMove(): void;
}

export default Character;
