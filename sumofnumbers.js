const data = [0, 2, 3, 9, 11, 1, 2, 2, 7, 6, 8, 14, 9, 6, 5, 6, 4, 4, 3];

function sumFor(list) {
    let sum41 = 0;
    for(let num of list) {
      sum41 += num;
    }
    return sum41;
}

console.log(sumFor(data));

function sumWhile(list){
    let sum41 = 0;
    let i = 0;
    while(i < list.length) {
        sum41 += list[i];
        i++;
  }
  return sum41;
}

console.log(sumWhile(data));

function sumReccursion(list){
    if(list.length === 0){
      return 0;
    }
      return list[0] + sumReccursion(list.slice(1, list.length));
}

console.log(sumReccursion(data));

function sumTheSimpleWay(list){
    let sum41 =  _.reduce(list, function(memo, num){return memo + num}, 0);
    return sum41;
}

console.log(sumTheSimpleWay(data));