function sum(x,y){
  console.log(x+y);
}
console.log('Question 1');
sum(2,8)


//2
console.log('Question 2');
function isEqual(x,y){
  if(x ===y){
    console.log(true);
  }else {
    console.log(false);
  }
}
 isEqual(5,4)

//3
console.log('Question 3');
function discountPercent(original, discount){
  discount = discount*.01
  var discountAmmount =  original*discount
  console.log(discountAmmount);
}
discountPercent(150,12)

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
  console.log(string);
}
stringCapitalize('please excuse my dear aunt sally')


//5
console.log('Question 5');
function evenNumbers(x){
  if(0<x<100){
    for(i=0; i<=x;i+=2){
      console.log(i);
    }
  }
}

evenNumbers(21)

//6
console.log('Question 6');
function isDiviible(x,y){
  if(x%y === 0){
    console.log(true);
  }else{
    console.log(false);
  }
}
isDiviible(14,3)

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
