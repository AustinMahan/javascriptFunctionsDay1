function sum(x,y){
  console.log(x+y);
}
console.log('Question 1');
sum(2,8)


//2
console.log('Question 2');
function isEqual(x,y){
  if(x ===y){
    return true;
  }else {
    return false;
  }
}
 console.log(isEqual(5,4))
 console.log(isEqual(3,3));

//3
console.log('Question 3');

function discountPercent(original, discount){
  if(0<discount<100){
    return original*(discount*.01)
  }
}
console.log(discountPercent(150,12))

//4
console.log('Question 4');
function stringCapitalize(string){
  string = string.split(' ')
  // console.log(string);
  for(i=0; i<string.length;i++){
    var secHalf = string[i].substr(1)
    string[i]=string[i].charAt(0).toUpperCase()
    string[i] = string[i] + secHalf
  }
  string = string.join(' ')
  return string;
}
console.log(stringCapitalize('please excuse my dear aunt sally'));


//5
console.log('Question 5');
function evenNumbers(x){
  if(0<x<100){
    for(i=0; i<=x;i+=2){
      return i;
    }
  }
}

console.log(evenNumbers(21));

//6
console.log('Question 6');
function isDiviible(x,y){
  if(x%y === 0){
    return true;
  }else{
    return false;
  }
}
console.log(isDiviible(14,3));

//bonus
console.log('Bonus');

function oddNumbers(x){
  if(x>40){
    for(i=1;i<=x;i+=2){
      console.log(i);
    }
  }else if(x<=40){
      for(i=1;i<40;i+=2){
        console.log(i);
      }
    }
  }
  oddNumbers(12)
