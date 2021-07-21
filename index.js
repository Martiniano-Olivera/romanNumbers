function convertToRomanNumber() {
    let decimalNumber = document.getElementById("numeroDecimal").value;
    let result = undefined;
    let length = decimalNumber.length;
    let firstPartOfConvertedNumber;
    let secondPartOfConvertedNumber;
    let thirdPartOfConvertedNumber;
    let forthPartOfConvertedNumber;





    switch (length) {
        case 1:
            result = lowerThanTen[lowerThanTen.indexOf(decimalNumber)+1];
            break;
        case 2:
            let splittedTwoDigitsNumber     = decimalNumber.split('');
            let firstPartOfTwoDigitsNumber  = splittedTwoDigitsNumber[0]+'0';
            let secondPartOfTwoDigitsNumber = splittedTwoDigitsNumber[1];
            firstPartOfConvertedNumber  = lowerThanOneHundred[lowerThanOneHundred.indexOf(firstPartOfTwoDigitsNumber)+1];
            secondPartOfConvertedNumber = lowerThanTen[lowerThanTen.indexOf(secondPartOfTwoDigitsNumber)+1];
            result = firstPartOfConvertedNumber + secondPartOfConvertedNumber;
            break;
        case 3:
            let splittedThreeDigitsNumber     = decimalNumber.split('');
            console.log("🚀 ~ file: index.js ~ line 28 ~ convertToRomanNumber ~ splittedThreeDigitsNumber", splittedThreeDigitsNumber);
            let firstPartOfThreeDigitsNumber  = splittedThreeDigitsNumber[0]+'00';
            console.log("🚀 ~ file: index.js ~ line 30 ~ convertToRomanNumber ~ firstPartOfThreeDigitsNumber", firstPartOfThreeDigitsNumber);
            let secondPartOfThreeDigitsNumber = splittedThreeDigitsNumber[1]+'0';
            console.log("🚀 ~ file: index.js ~ line 32 ~ convertToRomanNumber ~ secondPartOfThreeDigitsNumber", secondPartOfThreeDigitsNumber);
            let thirdPartOfThreeDigitsNumber = splittedThreeDigitsNumber[2];
            console.log("🚀 ~ file: index.js ~ line 34 ~ convertToRomanNumber ~ thirdPartOfThreeDigitsNumber", thirdPartOfThreeDigitsNumber);
            firstPartOfConvertedNumber  = lowerThanOneThousand[lowerThanOneThousand.indexOf(firstPartOfThreeDigitsNumber)+1];
            secondPartOfConvertedNumber = lowerThanOneHundred[lowerThanOneHundred.indexOf(secondPartOfThreeDigitsNumber)+1];
            thirdPartOfConvertedNumber = lowerThanTen[lowerThanTen.indexOf(thirdPartOfThreeDigitsNumber)+1];
            result = `${firstPartOfConvertedNumber}${secondPartOfConvertedNumber}${thirdPartOfConvertedNumber}`
            break;
        case 4:
            let splittedFourDigitsNumber     = decimalNumber.split('');
            let firstPartOfFourDigitsNumber  = splittedFourDigitsNumber[0]+'000';
            let secondPartOfFourDigitsNumber = splittedFourDigitsNumber[1]+'00';
            let thirdPartOfFourDigitsNumber = splittedFourDigitsNumber[2]+'0';
            let forthPartOfFourDigitsNumber = splittedFourDigitsNumber[3];
        
            
            firstPartOfConvertedNumber  = oneThousand[oneThousand.indexOf(firstPartOfFourDigitsNumber)+1];
            secondPartOfConvertedNumber  = lowerThanOneThousand[lowerThanOneThousand.indexOf(secondPartOfFourDigitsNumber)+1];
            thirdPartOfConvertedNumber = lowerThanOneHundred[lowerThanOneHundred.indexOf(thirdPartOfFourDigitsNumber)+1];
            forthPartOfConvertedNumber = lowerThanTen[lowerThanTen.indexOf(forthPartOfFourDigitsNumber)+1];
            result = `${firstPartOfConvertedNumber}${secondPartOfConvertedNumber}${thirdPartOfConvertedNumber}${forthPartOfConvertedNumber}`
            break;
        default:
            break;
    }


    //! cambiar comportamiento cuando tiene un cero, por ejemplo cuando ingreso 2014, que al 0, no le agregue dos ceros más


    document.getElementById('lblResult').innerHTML = result;
  }

let lowerThanTen = [
    '0','',
    '1', 'I',
    '2', 'II',
    '3', 'III',
    '4', 'IV',
    '5', 'V',
    '6', 'VI',
    '7', 'VII',
    '8', 'VIII',
    '9', 'IX'
]

let lowerThanOneHundred = [
    '00','',
    '10', 'X' ,
    '20', 'XX' ,
    '30', 'XXX' ,
    '40', 'XL' ,
    '50', 'L' ,
    '60', 'LX' ,
    '70', 'LXX' ,
    '80', 'LXXX' ,
    '90', 'XC' 
  ]

let lowerThanOneThousand = [
    '000', '',
  '100', 'C' ,
  '200', 'CC' ,
  '300', 'CCC' ,
  '400', 'CD' ,
  '500', 'D' ,
  '600', 'DC' ,
  '700', 'DCC' ,
  '800', 'DCCC' ,
  '900', 'CM' 
]

let oneThousand = [
    '1000', 'M', 
    '2000', 'MM', 
    '3000', 'MMM',  
]

