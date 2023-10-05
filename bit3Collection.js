var splitInParts = function(s, partLength){
    const originalPartL = partLength;
    let result = ''
    let index = 0;
    const sLength = Math.ceil(s.length/partLength);

    if(partLength === 1){
        result = result + s.split("").join(' ');
    } else if(partLength===0){
        result = s;
    }else {
        for(let i = 0; i<sLength; i++){
            if(i === 0){
                result = result + s.slice(index,partLength);
            } else {
                result = result +' '+ s.slice(index,partLength);
            }
            partLength += originalPartL; 
            index +=originalPartL;
        }
    }
    return result;
  }
//   console.log(splitInParts("HelloKata",1));
  
  function splitInParts2(s,n){

    let result = '';

    for(let i=0; i<s.length; i+=n){
        console.log(i);
    }
  }


//   console.log(splitInParts2("HelloKata",3));


  function alphanumeric(string){
    const allowed = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z','0','1','2','3','4','5','6','7','8','9'];
    const arr = string.toLowerCase().split('');
    // console.log(arr.length>0);
    let result = [];

    if(string.length!==0){
        console.log('didesnis uz 0');
    }

    for (let i = 0; i < arr.length; i++) {
        if(allowed.includes(arr[i])){
            result.push(true);
        } else result.push(false);
        
    }
    if (result.includes(false) || string.length===0){
        return false
    } else return true;
    
  }

  function count(string) {
    let result = {};
 
    for (let i = 0; i < string.length; i++) {
        if(string[i] in result){
            result[string[i]] +=1
        } else {
            result[string[i]] = 1;
        }
    }
        return result;
  }

  count('ABBCCCDC');

  function solution(number){
    let result = [];
    let final = [];
    let sum = 0;
    for (let i = 0; i<number-1; i++){
        result[result.length] = i+1; 
    }
    for (let i = 0; i < result.length; i++) {
        if(result[i]%3 ===0 || result[i]%5===0){
            final[final.length] = result[i];
        }
        
    }
    for (let i = 0; i < final.length; i++) {
        sum += final[i]; 
        
    }
    return sum;
  }

  solution(10);

  function charCheck(text, max, spaces){
    let result = [];
      if(spaces === true){
      const arr = text.split('');
      if(arr.length<=max){
        result[result.length] = true;
        result[result.length] = arr.join('');  
        return result;
    } else if (arr.length>max){
        let partialResult = []
        result[result.length] = false;
        for (let i = 0; i < max; i++) {
            partialResult[partialResult.length] = arr[i];
        }
        result[result.length] = partialResult.join('');
        return result
    } 

  } else if (spaces === false){
        let arr = '';
       
        for (let i = 0; i < text.length; i++) {
            if(text[i] !==' '){
                arr += text[i];
            } 
        }
        
       
        if(arr.length <=max){ 
        result[result.length] = true;
        result[result.length] = arr;
        return result
        } else if(arr.length > max){
        let partialResult = '';
        for (let i = 0; i < max; i++) {
            if(arr[i] !== ' '){
                partialResult +=arr[i];
            }
            
        }
        result[result.length]=false;
        result[result.length]=partialResult;
        return result;
       }
  }
};

charCheck("As Deputy Base Manager on Phobos for five Martian years, I have significant relevant experience.", 60, false);


decodeMorse = function(morseCode){
    const splt = morseCode.split(' ');
    let result = [];
   const morse = {
        '.-': 'A', '-...': 'B', '-.-.': 'C', '-..': 'D', '.': 'E', '..-.': 'F',
        '--.': 'G', '....': 'H', '..': 'I', '.---': 'J', '-.-': 'K', '.-..': 'L',
        '--': 'M', '-.': 'N', '---': 'O', '.--.': 'P', '--.-': 'Q', '.-.': 'R',
        '...': 'S', '-': 'T', '..-': 'U', '...-': 'V', '.--': 'W', '-..-': 'X',
        '-.--': 'Y', '--..': 'Z',
        '-----': '0', '.----': '1', '..---': '2', '...--': '3', '....-': '4',
        '.....': '5', '-....': '6', '--...': '7', '---..': '8', '----.': '9',
        '.-.-.-': '.', '--..--': ',', '..--..': '?', '.----.': "'", '-.-.--': '!',
        '-..-.': '/', '-.--.': '(', '-.--.-': ')', '.-...': '&', '---...': ':',
        '-.-.-.': ';', '-...-': '=', '.-.-.': '+', '-....-': '-', '..--.-': '_',
        '.-..-.': '"', '...-..-': '$', '.--.-.': '@', '...---...': 'SOS'
    }
    // console.log(splt);
    for (let i = 0; i < splt.length; i++) {
        if(splt[i] !==''){
            result[result.length] = morse[splt[i]];
        } else if (splt[i] === '' && splt[i+1] === ''){
            result[result.length]= ' '
        }
        
        
    }
  
    
    return result.join('').trim()
  }
decodeMorse('.... . -.--   .--- ..- -.. .');

function arrayDiff(a, b) {
    let result = [];
    for (let i = 0; i < a.length; i++) {
        if(!b.includes(a[i])){
            result[result.length] = a[i];
        }
    }
    return result;
}

arrayDiff([5,5,4,3,2], [1,2]);
 

const orderedCount = function (text) {
    let result = [];
    let unique = [];
    for (let i = 0; i < text.length; i++) {
        if(!unique.includes(text[i])){
            unique.push(text[i]);
        } 
    }
    for (let i = 0; i < unique.length; i++) {
        result.push([unique[i],0]);
    }
    
    for (let i = 0; i < text.length; i++) {
        for (let j = 0; j < result.length; j++) {
            if(result[j][0]===text[i]){
                result[j][1] = result[j][1]+1
                // result.push([text[i]]);
                // console.log(result[j][0]);
            } 
            
        }
        
    }
    return result;
  }
//   console.log(orderedCount('abracadabra'));


function solution(digits){
    const digitsArr = JSON.stringify(digits).split('');


let numbersArr = [];
let biggest = 0;
    for(let i = 0; i<digitsArr.length; i++){
        let numbersInOrder ='';

        for (let j = 0; j < 5; j++) {
            numbersInOrder += Number(digitsArr[j+i]);   
        }
        numbersArr[numbersArr.length] = numbersInOrder;
    }
    for (let i = 0; i < numbersArr.length; i++) {
        if(Number(numbersArr[i]>biggest)){
            biggest = Number(numbersArr[i]);
        }
    }
    return biggest;
}
// console.log(solution(1234567890));

function myLanguages(results) {
    let result = [];
    let final = [];
    for (const key in results) {
        if(results[key]>=60){
             result.push([key, results[key]]);
        }
    }
    console.log(result);
    const sorted = result.sort((a,b)=>b[1]-a[1])
    
    for (const key in sorted) {
        final.push(sorted[key][0])
        
    }
    return final
    
}
// console.log(myLanguages({"Hindi" : 60, "Greek" : 71, "Dutch" : 93}))



function myLanguages2(list){
    let languages = Object.entries(list);
    let results = [];
    let finish = [];

    for(array of languages){
        if(array[1]>=60){
            results.push(array);
        }
    }
    results.sort((a,b)=>b[1]-a[1]);

    for(let i = 0; i<results.length; i++){
        finish.push(results[i][0])
    }
    return finish;
}

// console.log(myLanguages2({"Hindi" : 59, "Greek" : 100, "Dutch" : 93}))


function multiplyAndFilter(array, multiplier){
    let result = [];

    for(let i = 0; i<array.length; i++){
        if(Number.isInteger(array[i]) || (!Number.isInteger(array[i]) && Number.isFinite(array[i]))){
            result.push(array[i]*multiplier)
        }
    }
    return result;
  }

//   console.log(multiplyAndFilter([1, null, function(){}, 2.5, 'string', 10, undefined, {}, []], 3))


function sumEvenNumbers(input) {
    let sum = 0;
    for (let i = 0; i < input.length; i++) {
        const element = input[i];
        if(element%2===0){
            sum+=element;
        }
    }
    return sum;
  }

//   console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))

function calculate(num1, operation, num2) {
    let result;

        switch(operation){
        case '+' : 
            result = num1+num2;
            break;
        case '-' : 
            result = num1-num2;
            break;
        case '*' : 
            result = num1*num2;
            break;
        case '/' : 
            result = num1/num2;
            break;
        default: 
            result = null;
            break;    }

       return isFinite(result) ? result:null;
   }
//    console.log(calculate(-3,"/", 0))

reverse = function(array) {
    let result = [];
    for(let i = array.length; i>0; i--){
        result.push(array.at(i-1));
    }
    return result;
  }
  reverse([1,null,14,"two"]);

  function findScreenHeight(width, ratio) {
    ratio = ratio.split(':');
    return `${width}x${(width/ratio[0])*ratio[1]}`
}

// console.log(findScreenHeight(1024,"4:3"))

function inAscOrder(arr) {

    for (let i = 0; i < arr.length; i++) {
        if(arr[i]>arr[i+1]){
            return false;
        }
    }
    return true;
}

// console.log(inAscOrder([1, 2, 4, 7, 19]))


// function dominator(arr) {
//     let result = {}

//     for (let i = 0; i < arr.length; i++) {
//         const element = arr[i];
//         result[element] = arr.filter(i=>i===element).length

//     }

//     const sorted = Object.entries(result).sort((a,b)=>b[1]-a[1])
//     console.log(sorted);
//     console.log(sorted[1][1]);
    
//     return sorted[0][1] > sorted[1][1] ? Number(sorted[0][0]) : -1;
  
//  }

// function dominator(arr){
    
//     let result = [];

//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j <= result.length; j++) {
//             result.push([arr[i],1]) 
//         }
        
//     }
//     return 1
// }
//  console.log(dominator([1,1,1,2]))

 function dominator(arr){
    const unique = [...new Set(arr)];
    let result = [];
    if (unique.length === 1) {
        return -1
    }
    
    for (let i = 0; i < unique.length; i++) {
            result.push([unique[i],0])
    }
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < result.length; j++) {
            if(result[j][0]===arr[i]){
                result[j][1]++;
            }
        }
    }
    result.sort((a,b)=>b[1]-a[1]);
    console.log(result);
    return result[0][1]>result[1][1] && result[0][1]>arr.length/2? result[0][0] : -1;
}

// console.log(dominator([1,1,1]));

const crossover = (chromosome1, chromosome2, index) => {
    let chromosome1Cross = chromosome1.split('').splice(0,index);
    let chromosome2Cross = chromosome2.split('').splice(0,index);

    // console.log(chromosome1Cross);
    // console.log(chromosome2Cross);

    for (let i = index; i < chromosome1.length; i++) {
        chromosome1Cross.push(chromosome2[i])
        chromosome2Cross.push(chromosome1[i])   
    }
    return [chromosome1Cross.join(''), chromosome2Cross.join('')];
};
crossover('111000', '000110', 3) //['111110', 000000']

function letterCheck(arr) {
    let result=true;

    for (let i = 0; i < arr[1].length; i++) {
        if(!arr[0].toLowerCase().includes(arr[1][i].toLowerCase())){
            result = false;
        }
    }
    return result;
    }

// console.log(letterCheck(["trances", "nectaR"]));

function letterCount(s){
    let obj = {};

    for (let i = 0; i < s.length; i++) {
        if(obj[s[i]]>0){
            obj[s[i]]++
        } else {
            obj[s[i]]=1;
        }
    }
    return obj;
  }

//   console.log(letterCount('arithmeticsssss')) 


function rgb(r, g, b){
    let arr = [r,g,b];
    if(arr[0]>255){
        arr[0]=255;
    } if (arr[1]>255){
        arr[1]=255;
    } if (arr[2]>255){
        arr[2]=255;
    }
    console.log(arr);
    if(arr[0]<0){
        arr[0]=0;
    } if (arr[1]<0){
        arr[1]=0;
    } if (arr[2]<0){
        arr[2]=0;
    }

    let result = '';

    const colors = {
        1:1,
        2:2,
        3:3,
        4:4,
        5:5,
        6:6,
        7:7,
        8:8,
        9:9,
        10:'A',
        11:'B',
        12:'C',
        13:'D',
        14:'E',
        15:'F'
    }

    for (let i = 0; i < 3; i++) {
        if(arr[i] !== 0 ){
            if(arr[i]/16 < 1){
                result += '0';
            } else if (!arr[i]/16 < 1){
                result += colors[Math.floor(arr[i]/16)];
            }
            if(Math.floor(arr[i]/16) !== arr[i]/16){
                result += colors[((arr[i]/16)-Math.floor(arr[i]/16))*16];
            } else result += '0';
        } else result += '00';
        
    }
    
    return result;
}

//   console.log(rgb(257,225,267)) //'ADFF2F'

function validBraces2(braces){

    let result =[];

    braces.split('')

    const obj = {
        '(' : ')',
        '{' : '}',
        '[' : ']'
    }

    let closing = []
    let stack = [];
    let opening = [];
    

    for (let i = 0; i < braces.length; i++) {
        stack.push(braces[i])
        if(obj[braces[i]]){
            opening.push(braces[i])
        }   else if (!obj[braces[i]]){
            closing.push(braces[i])
        }
    }
    for (let i = 0; i < opening.length; i++) {
        let arrLength = i+1;

        if(closing[i]===obj[opening[opening.length-arrLength]]) {
            // console.log('tru', closing[i], obj[opening[opening.length-arrLength]], i, arrLength);
            result.push(true)
        } else if (closing[i]===obj[opening[i]]){
            result.push(true) //console.log('false');
            
        } else result.push(false)
    }
    // console.log(closing[0], obj[opening[opening.length-1]]);
    // console.log(closing[1], obj[opening[opening.length-2]]);
    // console.log(closing[2], obj[opening[opening.length-3]]);
    console.log(opening, 'opening');
    console.log(closing, 'closing');
    return result.includes(false) || opening.length !== closing.length ? false:true;
  }

  
// console.log(validBraces2("({}) [({})]"));

function validBraces(str){
    const closingBraces = {
        ')':'(',
        '}':'{',
        ']':'['
    }

    let currentArr = [];

    for (let i = 0; i < str.length; i++) {
        currentArr.push(str[i])

        if(closingBraces[currentArr[i]]){
            if(currentArr[i-1]===closingBraces[currentArr[i]]){
               currentArr.slice(0,-2)
                console.log(currentArr, i);
            } 
        } 
        
    }
    // console.log(currentArr[1], closingBraces[currentArr[2]]);
    // console.log(closingBraces[currentArr[2]]);

    console.log(currentArr);
    // console.log(currentArr.slice(0,-2));
}
console.log(validBraces("(({})[({})])"))

























































