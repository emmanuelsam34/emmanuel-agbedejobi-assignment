const assignment = require('../src/assignment.js');

const { sumOfNumbers } = assignment;
const maybe = sumOfNumbers === undefined ? test.skip : test;

function sumDigits(e) {
  if( e == 'click' || e.keyCode == 13 ){
    
    var userNum = document.getElementById("userVal").value;

    var sum = 0;
    var numString = userNum + "";
    for ( var i = 0; i < numString.length; i++ ){
      sum = sum + Number(numString.charAt(i));
    };

    document.getElementById("results").textContent = sum;   
  }
};

    const numbers = [
        68,
        -68,
        27,
        94,
        72,
        -25,
        -51,
        32,
        10,
        64,
        -94,
        4,
        34,
        -86,
        90,
        81,
        20,
        -56,
        -91,
        -50
    ];
    expect(sumOfNumbers(numbers)).toBe(75);
});