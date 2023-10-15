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

// function validBraces(str){
//     if(str.length%2 !== 0){
//         return false
//     }
//     const closingBraces = {
//         ')':'(',
//         '}':'{',
//         ']':'['
//     }

//     let currentStr = '';
//     let interation = 2;
//     for (let i = 0; i < str.length; i++) {
 
//         currentStr +=str[i];

//         if(closingBraces[str[i]] && currentStr[currentStr.length-interation]===closingBraces[currentStr[i]]){
//             console.log(currentStr, i);               
//             currentStr = currentStr.slice(0,-2)
//             interation +=2;
//         } 
//     }
//     // currentStr = '([]' 
//     // console.log(currentStr[2], currentStr[currentStr.length-2]);
//     console.log(currentStr, 'str');
//     return currentStr.length >0 ? false:true;
// }


function validBraces(str){

    const closingBraces = {
                ')':'(',
                '}':'{',
                ']':'['
            }

    let bracesOpening = [];
    let bracesOpeningLength = [];
    let bracesClosingLength = [];

    for (let i = 0; i < str.length; i++) {
        if(str[i]==='(' || str[i]==='{' || str[i]==='['){
            bracesOpeningLength.push(str[i]);
            bracesOpening.push(str[i]);
        }
        if(str[i]===')' || str[i]==='}' || str[i]===']' ){
            bracesClosingLength.push(str[i]);
           if(closingBraces[str[i]]===bracesOpening.at(-1)) {
               bracesOpening.pop()
           }
        }
    }
    console.log(bracesClosingLength.length, bracesOpeningLength.length);
    return bracesOpening.length>0 || bracesClosingLength.length !== bracesOpeningLength.length? false:true;
}


// console.log(validBraces("()))"))


var uniqueInOrder=function(iterable){

    let result =[];

    for (let i = 0; i < iterable.length; i++) {
        if(result.at(-1)===iterable[i]){
            continue
        } else result.push(iterable[i]);
    }
    return result;
}
  
// console.log(uniqueInOrder('AAAABBBCCDAABBB')) //['A','B','C','D','A','B'];

 function searchArray (arrayToSearch, query) {
    for(let i = 0; i < arrayToSearch.length; i++){
        if(!Array.isArray(arrayToSearch) || !Array.isArray(query) || query.length !== 2 || arrayToSearch[i].length !==2){
            throw new Error ("");
        }
    }

    for (let i = 0; i < arrayToSearch.length; i++) {
        if(arrayToSearch[i][0] === query[0] && arrayToSearch[i][1]===query[1]) {
            return i;
        } 
        
    }
    return -1;
    
    }

// console.log(searchArray([[1,1],[7,2],[1,12],[1,2],[7,2],[45,4],[7,87],[4,5],[2,7],[6,32]], [1,12]))


// Mentoriaus uzduotys
// 1/2

function markHigherBMI (markoSvoris, markoUgis, jonoSvoris, jonoUgis){
const markoKmi = (markoSvoris/markoUgis**2).toFixed(2);
const jonoKmi = (jonoSvoris/jonoUgis**2).toFixed(2);

return markoKmi>jonoKmi ? `Marko KMI ${markoKmi} yra didesnis nei Jono ${jonoKmi}` : `Jono KMI ${jonoKmi} yra didesnis nei Marko ${markoKmi}`;
}

// console.log(markHigherBMI(95, 1.88, 85, 1.76))

// 3


function varzybos(delfinai, koalos){
    let delfinaiTaskai = 0;
    let koalosTaskai = 0;

    for (let i = 0; i < delfinai.length; i++) {
        delfinaiTaskai += delfinai[i];
        koalosTaskai += koalos[i];
        
    }
   
    if(delfinaiTaskai/delfinai.length < 100 && koalosTaskai/koalos.length < 100) {
        return `Nugaletojo nera, nei viena komanda nesurinko 100 tasku. Delfinai: ${Math.round(delfinaiTaskai/delfinai.length)}, koalos: ${Math.round(koalosTaskai/koalos.length)}`;
    }
    if(delfinaiTaskai/delfinai.length > koalosTaskai/koalos.length){
        return `Delfinai yra nugaletojai su ${Math.round(delfinaiTaskai/delfinai.length)} taskais`;
    } else if (delfinaiTaskai/delfinai.length < koalosTaskai/koalos.length) {
        return `Koalos yra nugaletojai su ${Math.round(koalosTaskai/delfinai.length)} taskais`;
    } else if (delfinaiTaskai===koalosTaskai){
        return `Lygiosios, abi komandos surinko po ${Math.round(delfinaiTaskai/delfinai.length)} taskus`;
    }
}

// console.log(varzybos([97, 112, 101], [109, 95, 106]));




function createPhoneNumber(numbers){
    const first = numbers.slice(0,3).join('');
    const second = numbers.slice(3,6).join('');
    const third = numbers.slice(6,11).join('');
    return `(${first}) ${second}-${third}`
  }
//   console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])) 
  // "(123) 456-7890"

  function likes(names) {
    if (names.length === 0){
        return 'no one likes this';
    } else if (names.length === 1){
        return `${names[0]} likes this`
    } else if (names.length===2){
        return `${names[0]} and ${names[1]} like this`
    } else if (names.length===3){
        return `${names[0]}, ${names[1]} and ${names[2]} like this`
    }  else if (names.length>3){
        return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
    }
  }
  


//   console.log(likes(['Alex', 'Jacob', 'Mark', 'Max']));
  // 'Alex, Jacob and 2 others like this');

  function findOutlier(integers){
    let odd = [];
    let even = [];

    for (let i = 0; i < integers.length; i++) {
        if(integers[i]%2 === 0){
            even.push(integers[i]);
        } else odd.push(integers[i]);
        
    }
    return odd.length > even.length ? even[0] : odd[0];
  }


// console.log(findOutlier([0, 1, 2])); //1

function comp(array1, array2){

    if(array1 === null || array2 === null){
        return false;
    } else if (array1.length === 0 || array2.length === 0){
        return true;
    }
        let = array1Sqr = [];
        let result = true;

        
        for (let i = 0; i < array1.length; i++) {
            array1Sqr.push(array1[i]**2)
        }

        array1Sqr.sort();
        array2.sort();
        console.log(array1Sqr, array1);

        for (let i = 0; i < array1Sqr.length; i++) {
            if(array1Sqr[i]!==array2[i]){
               result = false;
            }
        }
        return result;
  }

//   console.log(comp(null, null));


function isPrime(num) {
    if(num<0){
        return false;
    }
    for (let i = 2; i < num+3; i++) {
       
        if(num === 1 || num === 0){
            return false;
        } else if (num===i) return true;
        else if( (num/i)%1 === 0){
            console.log(num, i);
            return false;
        }
    }
  }

//   console.log(isPrime(73));


  function alphabetPosition(text) {
    textToLower = text.toLowerCase();
    
    const abc={
        a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10, k: 11, 
        l: 12, m: 13, n: 14,o: 15, p: 16, q: 17, r: 18, s: 19, t: 20, 
        u: 21, v: 22, w: 23, x: 24, y: 25, z: 26
    }

    let result = [];

    for (let i = 0; i < textToLower.length; i++) {
        // console.log(abc[textToLower[i]] === undefined);
        if(abc[textToLower[i]]!== undefined){
            result.push(abc[textToLower[i]])        
        }
    }
    return result.join(' ')
  }
// console.log(alphabetPosition("The sunset sets at twelve o' clock."));


function findOdd(a) {

    for (let i = 0; i < a.length; i++) {
        if(a.filter(el=>el===a[i]).length%2 !== 0){
            return a[i];
        }
        
    }
    return 0;
  }


//   console.log(findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1])) //4


function pigIt(str){
    const punctuations = [".", ",", ":", "!", "?"]
    const strSplit = str.split(' ');
    let result = [];

    for (let i = 0; i < strSplit.length; i++) {
        if(!punctuations.includes(strSplit[i])){
            result.push(strSplit[i].slice(1,strSplit[i].length+1)+strSplit[i][0]+'ay');
        } else if (punctuations.includes(strSplit[i])){
            result.push(strSplit[i])
        }
    }
    return result.join(' ');
  }

//   console.log(pigIt('This is my string'))

function moveZeros(arr) {
    const notZero = arr.filter(el=>el!==0);
    let result = notZero;
    
    for (let i = 0; i<arr.length-notZero.length+i; i++) {
            result.push(0);
    }

    return result;
    
  }

  moveZeros([1,2,0,1,0,1,0,3,0,1,0])

  function isPangram(string){
    let abc = 'abcdefghijklmnopqrstuvwxyz';
    string = string.toLowerCase();

    for (let i = 0; i < string.length; i++) {
        if(abc.includes(string[i])){
            abc = abc.replace(string[i], '')
        }
        
    }

    return abc.length > 0 ? false:true;
  }

// console.log(isPangram('Pack my box with five dozen liquor jugs.'));

function averageString(str) {
    if(str.length===0){
        return 'n/a';
    }
    const numbers = {
        'zero':0,
        'one':1,
        'two':2,
        'three':3,
        'four':4,
        'five':5,
        'six':6,
        'seven':7,
        'eight':8,
        'nine':9
    }

    const arr = str.split(' ');
    
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += numbers[arr[i]]
        
    }
        if( sum === undefined){
            return 'n/a';
        }
    return Object.keys(numbers).find(key=>numbers[key] === Math.floor(sum/arr.length)) ? Object.keys(numbers).find(key=>numbers[key] === Math.floor(sum/arr.length)): 'n/a';
  }

//   console.log(averageString("four six two three")) // "four"




const camelCase = function(str){
    const arr = str.toLowerCase().split(' ')
    let result = [];
    
    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i][0].toUpperCase()+arr[i].slice(1))
        
    }
    return result.join('');
  }
  camelCase("teSt case")

  String.prototype.camelCase=function(){
    const arr = this.toLowerCase().split(' ')
      let result = [];
      
      for (let i = 0; i < arr.length; i++) {
          result.push(arr[i][0].toUpperCase()+arr[i].slice(1))
          
      }
      return result.join('');
  }

//   'abc bbc'.camelCase()


function high(x){
    const abc = 'abcdefghijklmnopqrstuvwxyz';
    const arr = x.split(' ')

    let points = 0;
    let pointsMax = 0;
    let word = '';
    
    for (let i = 0; i < arr.length; i++) {
        points = 0;
        for (let j = 0; j < arr[i].length; j++) {
            points += abc.indexOf(arr[i][j])+1;
        }
        if(pointsMax<points) {
            pointsMax = points;
            word = arr[i]
        }
    }
    return word;
}

// console.log(high('man i need a taxi up to ubud'));





  var countBits = function(n) {
    const bits = n.toString(2).split('')
    return bits.filter(el=>el==='1').length;
  };

//   console.log(countBits(1234));


var compose = function(...n) {
    if(n.length === 1 && typeof n === 'string'){
        return n.join('');
    } else if(n.length === 1 && typeof n === 'number'){
        return n;
    }
    let result =n[0];
    
    for (let i = 1; i < n.length; i++) {
        result = n[i](result)
        // console.log(result);
    }
    // console.log(result);
    return result;
    
  }

  
  const doubleTheValue = function(n){
    return n*2;
  }

  const addOneToTheValue = function(n){
    return n+1;
  }
  const valueLength = function(n){
    return n.length;
  }
  
//   compose("Hello, world", valueLength, doubleTheValue, addOneToTheValue)
compose(1)

function toUnderscore(string) {
    let newStr = '';
    // console.log(newStr);

    for (let i = 0; i < string.length; i++) {
        if(string[i].toUpperCase()===string[i] && i!==0 && isNaN(parseInt(string[i]))){
            console.log(i);
            newStr = newStr + `_${string[i].toLowerCase()}`;
        } else newStr += string[i].toLowerCase();
        
    }
    return newStr;
  }

//   console.log(toUnderscore('abc1Cba'));

function findMissingLetter(array){

    const abc = 'abcdefghijklmnopqrstuvwxyz';
    let result = [];
    let final = '';
    let upper = 'false';

    if(array[0] === array[0].toUpperCase()){
        array = array.join('').toLowerCase().split('');
        upper = true;
    }
    console.log(array);
    for (let i = 0; i < array.length; i++) {
        result.push(abc.indexOf(array[i]));
        if(abc.indexOf(array[i])-abc.indexOf(array[i-1]) === 2){
            final = abc[abc.indexOf(array[i])-1];
        } 
    };

    console.log(array);

  return upper === true ? final.toUpperCase(): final;;
}
// console.log(findMissingLetter(['a','b','c','d','f'])) // 'e'


function generateHashtag (str) {
    
    let trim = str.trim();

    // while (trim.includes("  ")) {
    //     trim = trim.replace("  ", " ")
    // }


    if(trim.length === 0){
        return false;
    }
   const arr =  trim.split(' ')

    let result = ['#'];
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] !== ""){

            result.push(arr[i][0].toUpperCase()+arr[i].slice(1).toLowerCase())
        }
    }

    return result.join('').length < 141 ? result.join('') : false;
}


// console.log(generateHashtag("aaaaaaaaaaaaaaaaaaaaaaa   aaaaaaaaaaa"));

function replaceAll(input, find, replace) {
    input = input.replaceAll(find, replace)
    return input;

}

//   console.log(replaceAll("string-string", "ing", "!"))


function reverse2(str){
    const arr = str.split(' ');
    let tarpinis = [];
    let second = 0;
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        second++
        if(second%2 === 0 && arr[i]!=="" ){
            tarpinis = [];
            for (let j = arr[i].length; j>0; j--) {
                
                tarpinis.push(arr[i][j-1])
                
            }
            result.push(tarpinis.join(''));
        } else if (arr[i] !== ""){
            result.push(arr[i]);
        }
    }
    
    return result.join(" ");
  }

//   console.log(reverse2("   "));




function rot13(str) {
    const abc = 'abcdefghijklmnopqrstuvwxyz';
    console.log(abc[0].toUpperCase() === abc[0]);
    
    let result  = '';

    for (let i = 0; i < str.length; i++) {
        if(str[i] !== ' ' && abc.includes(str[i].toLowerCase())) {
            const abcPosition = abc.indexOf(str[i].toLowerCase())+13
            if(abcPosition>=abc.length){
                const diff = abcPosition-abc.length;
                if(str[i].toLowerCase()===str[i]){
                    result += abc[diff]
                } else {
                    console.log(abc[i]);
                    result += abc[diff].toUpperCase()
                };
            } else {
                if(str[i].toUpperCase() === str[i]){
                    result +=abc[abcPosition].toUpperCase()
                } else result += abc[abcPosition]
            }
            
        }
        else result += str[i];
        
    }
    return result;
}

// console.log(rot13('EBG13 rknzcyr.'));



// Evenas nori sukurti labai paprastą arbatpinigių skaičiuotuvą, kai jis eina valgyti į 
// restoraną. Jo šalyje įprasta duoti 15 % arbatpinigių, jei sąskaitos vertė yra nuo 50 iki 300. 
// Jei vertė skiriasi, arbatpinigiai yra 20%.
// Jūsų užduotys:
// Apskaičiuokite arbatpinigių, priklausomai nuo sąskaitos vertės. Sukurkite kintamąjį pavadinimu „Tip“.
// Neleidžiama naudoti if/else teiginio  (Jei jums taip lengviau, galite
// pradėti nuo if/else teiginio, tada pabandykite jį konvertuoti į ternery operator!)
// Į konsole atspausdinkite eilutę, kurioje yra sąskaitos vertė, arbatpinigiai ir galutinė vertė
// (sąskaita + arbatpinigiai). Pavyzdys: „Sąskaita buvo 275, arbatpinigiai 41,25, o bendra vertė 316,25"

// Bandymo duomenys:
// § 1 duomenys: patikrinkite sąskaitos reikšmes 275, 40 ir 430

const tips = function(amount){
    let tip = 0;
    amount >= 50 && amount <= 300 ? tip = amount*0.15 : tip = amount*0.2;
    
    console.log(`Saskaita buvo ${amount}, arbatpinigiai ${tip}, bendra suma ${amount+tip}`);
}

// tips(40)

// 1
const vardas1 = 'jonas jonaitis';
const vardas2 = 'jonas petraitis';

vardas1.length>vardas2.length ? console.log('1 uzduotis:',vardas1) : console.log('1 uzduotis:',vardas2);

// 2
const vardas = 'Jonas';
const pavarde = 'Jonaitis';
const gimimoMetai = 2000;
const metai = 2023;

console.log(`2 uzduotis: As esu ${vardas} ${pavarde} man yra ${metai-gimimoMetai} metai`);

// 3
// const vardas = 'Jonas';
// const pavarde = 'Jonaitis';

const vardasPavarde = vardas.at(-1) + vardas.at(-2) + vardas.at(-3) + ' ' + pavarde.at(-1)+pavarde.at(-2) + pavarde.at(-3)
console.log('3 uzduotis:', vardasPavarde);


// 4

const hollywood =  'Once upon a time in hollywood';
let newHollywood = '';

console.log('4 uzduotis:',hollywood.replaceAll('o', '*').replaceAll('O', '*'));


// 5

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random()*(max-min+1)+min)
}

let arr = [];
let obj = {};

for (let i = 0; i < 4; i++) {
    arr.push(rand(0,2));

    if(obj[arr[i]]) {
        obj[arr[i]] += 1; 
    } else obj[arr[i]] = 1;
}

console.log(`5 uzduotis: Arejuj ${arr} yra ${JSON.stringify(obj)}`);


// 6
const pirmaReiksme = rand(0,4);
const antraReiksme = rand(0,4);
// console.log(pirmaReiksme, antraReiksme);

console.log(`6 uzduotis: ${pirmaReiksme > antraReiksme ? (pirmaReiksme/antraReiksme).toFixed(2) : (antraReiksme/pirmaReiksme).toFixed(2)}`)

// 7
function vidurine (){
    let arr = [];

    for (let i = 0; i < 3; i++) {
        arr.push(rand(0,25));
    }
    
    console.log(`7 uzduotis: skaiciai: ${arr}, vidurine verte ${arr.sort((a,b)=>a-b)[1]}`)

}

vidurine()

// 8

const vardas8 = 'Jonas';
const pavarde8 = 'Jonaitis';
const vp = vardas8[0]+pavarde8[0];
console.log(`8 uzduotis: ${vp}`);

// 9


















