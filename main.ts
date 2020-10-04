pins.servoWritePin(AnalogPin.P0, 0)
basic.showLeds(`
    . . . . .
    . . . . #
    . . . # .
    # . # . .
    . # . . .
    `)
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P2) < 500) {
        pins.servoWritePin(AnalogPin.P0, 0)
        basic.showLeds(`
            . . . . .
            . . . . #
            . . . # .
            # . # . .
            . # . . .
            `)
    } else {
        pins.servoWritePin(AnalogPin.P0, 180)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.pause(500)
        pins.servoWritePin(AnalogPin.P0, 0)
        basic.pause(5000)
    }
})
