const total = (acc, value) => acc + value;


function changeReturn(money = [], amount){
    if (amount <= 0){
        return -1
    } else if (money.reduce(total) <= 0 && ammount >0){
        return -1
    }else{
        return coinWays(amount, money)
    }
    
}

function coinWays(amount, denominations =[]){
    var coins = [];
    
    if (denominations.length === 1 && amount % denominations.reduce(total) !=0){
      return -1
    }
    else{
      while(amount !=0 || coins.reduce(total) === amount) {
        if(amount >= 50 && denominations.includes(50)){
            coins.push(50);
            amount -= 50;
        }else if(amount >= 25 && denominations.includes(25)) {
            coins.push(25);
            amount -= 25; 
        }else if(amount >= 10 && denominations.includes(10)) {
            coins.push(10);
            amount -= 10;
        }else if(amount >= 5 && denominations.includes(5)) {
            coins.push(5);
            amount -= 5;
        }else if(amount >= 1 && denominations.includes(1)) {
            coins.push(1);
            amount -= 1;
        }else{
            coins.push(-1);
        }
    }
    }

    if (coins.includes(-1)){
        return -1;
    }
    else {
        return coins.length;
    }
}


var coins1 = [25]
var value1 = 90;
console.log(changeReturn(coins1, value1));

var coins2 = [25, 5, 1];
var value2 = 90;
console.log(changeReturn(coins2, value2));

var coins3 = [10];
var value3 = 10;
console.log(changeReturn(coins3, value3));