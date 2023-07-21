function repeatChar(char: string, times: number): string {
    return char.repeat(times);
  }
  
  function createDiamond(letter: string): void {
    if (letter < 'A' || letter > 'Z') {
      throw new Error("Invalid input. Please provide an uppercase letter between 'A' and 'Z'.");
    }
  
    const distance = letter.charCodeAt(0) - 'A'.charCodeAt(0);
    const diamondSize = 2 * distance + 1;
  
    for (let i = 0; i < diamondSize; i++) {
      const currentLetter = String.fromCharCode('A'.charCodeAt(0) + Math.abs(i - distance));
      const spaces = diamondSize - Math.abs(i - distance) - 1;
      const spacesStr = repeatChar(' ', spaces);
      const row = spacesStr + repeatChar(currentLetter, 2 * Math.abs(i - distance) + 1);
      console.log(row);
    }
  }
  
  createDiamond('C');
  console.log(); 
  createDiamond('E');
  