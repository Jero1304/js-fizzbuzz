console.log('ciao');

for (let i=0; i<=100; i++){
    let caso15 = i % 15;
    let caso5 = i % 5;
    let caso3 = i % 3;

    if (caso15 === 0){
        console.log(i,'FizzBuzz');
    }else if(caso5 === 0){
        console.log(i,'Fizz');
    }else if(caso3 === 0){
        console.log(i,'Buzz');
    }
    else{
        console.log(i);
    }



}