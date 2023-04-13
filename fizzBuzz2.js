
for (let i=55; i<=100; i+=1){
    if (i % 9 === 0) {
        console.log("Divisible by 9" + " ")
    } else if (i % 4) {
        console.log ("Divisible by 4" + " ")
    } else if (i % 6) {
        console.log("Divisible by 6" + " ")
    } else {
        console.log(i)
    }
}