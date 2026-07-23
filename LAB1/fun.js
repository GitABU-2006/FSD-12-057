// write a function to take any digit (0-9) and return its in words 
// 0 - one 
// 5 - five 

function digittoword(digit){
    switch (digit) {
      case 0:
        return "zero";

      case 1:
        return "one";

      case 2:
        return "two";

      case 3:
        return "three";

      case 4:
        return "four";

      case 5:
        return "five";

      case 6:
        return "six";

      case 7:
        return "seven";

      case 8:
        return "eight";

      case 9:
        return "nine";
    }
}

console.log(digittoword(7));
console.log(digittoword(6));
console.log(digittoword(5));