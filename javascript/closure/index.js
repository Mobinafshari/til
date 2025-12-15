function counter(initialValue = 0){
    let count = initialValue;
    return function increase(number = 1) {
        count+= number;
        console.log(count);
    } 
}

export let sum = counter()
sum(10)
sum(100)
sum(1000)
