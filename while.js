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
console.log(generator.next());

