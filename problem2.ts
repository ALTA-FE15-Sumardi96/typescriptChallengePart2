function cetakTablePerkalian(number: number): void {
    if (number < 1 || number > 30) {
      throw new Error("Invalid input. Number should be between 1 and 30.");
    }
  
    for (let i = 1; i <= number; i++) {
      let row = "";
  
      for (let j = 1; j <= number; j++) {
        const product = i * j;
        row += product.toString().padStart(3, " ") + " ";
      }
  
      console.log(row.trim());
    }
  }
  
  cetakTablePerkalian(9);
  