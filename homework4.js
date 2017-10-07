//Create a function called 'triangleStars' that prints an upside-down
//triangle to the console of the given height.  So if we call your function
//with triangleStars(4), we should see:
const printString = function (str, n) {
  if (n === 0) {
    return '';
  }
  return str + printString(str, n-1);
};

const triangleStars = function(nLines) {
  const stars = function(nLines, nSpaces, nStars) {
    if (nLines === 0) {
      return '';
    }
    console.log(printString(' ', nSpaces) + printString('*', nStars));
    stars(nLines-1, nSpaces + 1, nStars -2)
  };
  stars(nLines, 0, nLines*2 - 1);
};


//Create a function called pow which takes two arguments, base and n.
//It should than return the result of multiplying the base times itself n times
const pow = function(base, n) {
  if (n === 0) {
    return 1;
  }
  return base * pow(base, n - 1)
};


//Write a function that reverses a string with recursion.
//Example:  reverse('abcd') should return 'dcba'.
const reverse = function(str) {
  const stringIndex = function(str, index){
    if (index < 0) {
      return '';
    }
    return str[index] + stringIndex(str, index - 1);
  };
  return stringIndex(str, str.length - 1);
};

//Create a function called checkerboard which, given a size
//argument, will draw an n by n checkerboard on the screen.
const printCheckers = function (str, n) {
  if (n === 0) {
    return '';
  }
  return str + printCheckers(str, n-1);
};

const checkerboard = function(num) {
  const lines1 = function(num, nLines) {
    if (nLines === 0) {
      return '';
    }
    if (nLines%2 === 0) {
      console.log(printCheckers(' *', num));
    } else if (nLines%2 !== 0) {
      console.log(printCheckers('* ', num));
    }
    lines1(num, nLines-1);
  };
  const lines2 = function(num, nLines) {
    if (nLines === 0) {
      return '';
    }
    if (nLines%2 === 0) {
      console.log(printCheckers('* ', num));
    } else if (nLines%2 !== 0) {
      console.log(printCheckers(' *', num));
    }
    lines2(num, nLines-1);
  };
  if (num%2 !== 0) {
    return lines1(num, num);
  } else if (num%2 ===0) {
    return lines2(num, num);
  }
};
//I know I could have written this in half the code but it
//worked while I was exploring so I decided to use this one
