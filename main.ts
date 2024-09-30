basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P0) == 1) {
        basic.setLedColor(0x00ff00)
    }
    if (pins.digitalReadPin(DigitalPin.P0) == 0) {
        basic.setLedColor(0xff0000)
    }
})
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P0) == 1) {
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.setLedColor(0x00ff00)
    } else {
        if (pins.digitalReadPin(DigitalPin.P0) == 0) {
            pins.digitalWritePin(DigitalPin.P1, 0)
            basic.setLedColor(0xff0000)
        }
    }
})
