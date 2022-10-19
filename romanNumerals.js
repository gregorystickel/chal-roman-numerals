function  toRoman(num) {
    const roman = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
      };
      var str = '';

        for (var i of Object.keys(roman)) { //Object.keys(roman) returns array of keys from object roman
        console.log(roman[i]);
        var q = Math.floor(num / roman[i]); //Divide number by 1000 and down to 1--Math.floor rounds number down
        console.log(q);
        num -= q * roman[i]; //
        console.log(num);
        str += i.repeat(q);
        }

    return str;
};    

console.log(toRoman(5)) //'V'
console.log(toRoman(267)) //'CCLXVII'


function romanize(num) {
    let lookup = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1};
    let roman = '';
    console.log(lookup);
    for (let i in lookup ) {
      while ( num >= lookup[i] ) {
        roman += i;
        num -= lookup[i];
      }
    }
    return roman;
}

console.log(romanize(5));
console.log(toRoman(267));