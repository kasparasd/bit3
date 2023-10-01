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
  console.log(orderedCount('abracadabra'));