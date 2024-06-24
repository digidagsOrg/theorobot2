radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 13) {
        Position2 = ServoSlow.setServoAngle(2, 70, 10, Position2, ServoSlow.ServoDirection.CW)
        Position2 = ServoSlow.setServoAngle(2, 70, 10, Position2, ServoSlow.ServoDirection.CW)
        basic.pause(500)
        Position2 = ServoSlow.setServoAngle(2, 140, 10, Position2, ServoSlow.ServoDirection.CCW)
        basic.pause(500)
        Position2 = ServoSlow.setServoAngle(2, 70, 10, Position2, ServoSlow.ServoDirection.CW)
        basic.pause(500)
        position1 = ServoSlow.setServoAngle(1, 20, 10, position1, ServoSlow.ServoDirection.CW)
        basic.pause(500)
        position1 = ServoSlow.setServoAngle(1, 40, 10, position1, ServoSlow.ServoDirection.CCW)
        basic.pause(500)
        position1 = ServoSlow.setServoAngle(1, 20, 10, position1, ServoSlow.ServoDirection.CW)
    } else if (receivedNumber == 0) {
        // oben
        kitronik_simple_servo.setServoAngle(kitronik_simple_servo.ServoChoice.servo1, 110)
        // oben
        kitronik_simple_servo.setServoAngle(kitronik_simple_servo.ServoChoice.servo2, 100)
        position1 = 110
        Position2 = 100
    }
})
input.onButtonPressed(Button.A, function () {
    Position2 = ServoSlow.setServoAngle(2, 70, 10, Position2, ServoSlow.ServoDirection.CW)
    Position2 = ServoSlow.setServoAngle(2, 70, 10, Position2, ServoSlow.ServoDirection.CW)
    basic.pause(500)
    Position2 = ServoSlow.setServoAngle(2, 140, 10, Position2, ServoSlow.ServoDirection.CCW)
    basic.pause(500)
    Position2 = ServoSlow.setServoAngle(2, 70, 10, Position2, ServoSlow.ServoDirection.CW)
    basic.pause(500)
    position1 = ServoSlow.setServoAngle(1, 20, 10, position1, ServoSlow.ServoDirection.CW)
    basic.pause(500)
    position1 = ServoSlow.setServoAngle(1, 40, 10, position1, ServoSlow.ServoDirection.CCW)
    basic.pause(500)
    position1 = ServoSlow.setServoAngle(1, 20, 10, position1, ServoSlow.ServoDirection.CW)
})
input.onButtonPressed(Button.AB, function () {
    // oben
    kitronik_simple_servo.setServoAngle(kitronik_simple_servo.ServoChoice.servo1, 110)
    // oben
    kitronik_simple_servo.setServoAngle(kitronik_simple_servo.ServoChoice.servo2, 100)
    position1 = 110
    Position2 = 100
})
let Position2 = 0
let position1 = 0
// servoOben
kitronik_simple_servo.setServoAngle(kitronik_simple_servo.ServoChoice.servo1, 110)
// unten
kitronik_simple_servo.setServoAngle(kitronik_simple_servo.ServoChoice.servo2, 100)
position1 = 110
Position2 = 100
