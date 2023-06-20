
function minusOne(num) {
  console.log(--num);
}

minusOne(10);
minusOne(1);
minusOne(8);


// let param1 = 'I'
// let param2 = 'want'
// let param3 = 'chimichangas'
function makeSentence(param1, param2, param3) {
  console.log(`Oh boy, do ${param1} ${param2} ${param3} or what!?`);
}

makeSentence('I', 'want', 'chimichangas');

arr = []
function getLastElement(arr){
 console.log(arr[arr.length-1]);
}

getLastElement([1, 2, 3, 4, 5, 6]);      
getLastElement(['a', 'b', 'c']);          
getLastElement([[1, 2, 3], [4, 5, 6]]); 