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