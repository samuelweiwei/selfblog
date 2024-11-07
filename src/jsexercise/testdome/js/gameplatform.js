function calculateFinalSpeed(initialSpeed, inclinations) {
    // Your code goes here
    for(var inclination of inclinations){
        console.log(`inclination is ${inclination}`);
        if (inclination !== 0){
                console.log(`initialspeed before: ${initialSpeed}`)
                initialSpeed -= inclination;
                console.log(`initialSpeed after: ${initialSpeed}`)
        }
        if (initialSpeed <= 0)
            initialSpeed = 0;
    }
    return initialSpeed;
}

const x = (function (a){
    return a+199;
});
  
  console.dir(calculateFinalSpeed(60, [0, 30, 0, -45, 0]));