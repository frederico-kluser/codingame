/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/


// game loop

let counter = 0;
let lastCounter = 0;
var speed = 0;
let second = 0;
let lastNextCheckpointDist = 0;
let points = [];

const speedControl = (angle, distance) => {
    let thrust = 100;

    if (speed > 500 && distance < 2500 || speed > 600 && distance < 3000) {
        thrust = 0;
    }

    if (angle > 50) {
        thrust = 0;
    }   

    if (speed < 300 && distance > 5000) {
        thrust = 'BOOST';
    }

    return thrust;
}

while (true) {
    var inputs = readline().split(' ');
    const x = parseInt(inputs[0]);
    const y = parseInt(inputs[1]);
    const nextCheckpointX = parseInt(inputs[2]); // x position of the next check point
    const nextCheckpointY = parseInt(inputs[3]); // y position of the next check point
    const nextCheckpointDist = parseInt(inputs[4]); // distance to the next checkpoint
    const nextCheckpointAngle = Math.abs(parseInt(inputs[5])); // angle between your pod orientation and the direction of the next checkpoint
    var inputs = readline().split(' ');
    const opponentX = parseInt(inputs[0]);
    const opponentY = parseInt(inputs[1]);
    if (counter != lastCounter) {
        lastCounter = counter;
        if (nextCheckpointDist - lastNextCheckpointDist < 1000) {
            speed = Math.abs(nextCheckpointDist - lastNextCheckpointDist);
        }
        if (nextCheckpointDist - lastNextCheckpointDist > 1000) {
            points.push({
                speed,
                distance: nextCheckpointDist,
                angle: nextCheckpointAngle,
            })
        }
    }

    lastNextCheckpointDist = nextCheckpointDist;
    const thrust = speedControl(nextCheckpointAngle, nextCheckpointDist);
    
    console.log(`${nextCheckpointX} ${nextCheckpointY} ${thrust}`);
    counter++;
    console.error('counter', counter);
    console.error('speed', speed);
    console.error('thrust', thrust);
    console.error('distance', nextCheckpointDist);
    console.error('angle', nextCheckpointAngle);
    console.error(points);
}
