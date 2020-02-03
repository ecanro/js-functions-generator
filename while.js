function* evenNUmber(){
    let i = 0;

    while(true){
        i=1+1;
        if (i%2===0){
            yield i;
            console.log(i);
        }
    }
}
const generator = evenNUmber();
console.log(generator.next());
console.log(generator.next());
console.log(generator.next().value);

//**otra */

const iterable1 = new Object();

iterable1[Symbol.iterator] = function* () {
  yield 1;
  yield 2;
  yield 3;
};

console.log([...iterable1]);
// expected output: Array [1, 2, 3]