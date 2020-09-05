WSJoyStick.onKey(KEY.F, function () {
    radio.sendString("stop")
    radio.sendString("Sirene stop")
})
WSJoyStick.onKey(KEY.A, function () {
    radio.sendString("Slomer")
})
WSJoyStick.onKey(KEY.P, function () {
    radio.sendString("Toet")
})
WSJoyStick.onKey(KEY.E, function () {
    radio.sendString("Kpl")
})
WSJoyStick.onKey(KEY.D, function () {
    radio.sendString("Kpr")
})
WSJoyStick.onKey(KEY.B, function () {
    radio.sendString("Sneller")
})
WSJoyStick.onKey(KEY.C, function () {
    radio.sendString("Sirene")
})
WSJoyStick.JoyStickInit()
radio.setGroup(107)
basic.forever(function () {
    if (WSJoyStick.Listen_Dir(DIR.U)) {
        radio.sendValue("Up", 1)
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    } else if (WSJoyStick.Listen_Dir(DIR.D)) {
        radio.sendValue("Down", 1)
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
    } else if (WSJoyStick.Listen_Dir(DIR.L)) {
        radio.sendValue("Left", 1)
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    } else if (WSJoyStick.Listen_Dir(DIR.R)) {
        radio.sendValue("Right", 1)
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
    } else if (WSJoyStick.Listen_Dir(DIR.U_R)) {
        radio.sendValue("Up right", 1)
        basic.showLeds(`
            . # # # #
            . . . # #
            . . # . #
            . # . . #
            # . . . .
            `)
    } else if (WSJoyStick.Listen_Dir(DIR.U_L)) {
        radio.sendValue("Up left", 1)
        basic.showLeds(`
            # # # # .
            # # . . .
            # . # . .
            # . . # .
            . . . . #
            `)
    } else if (WSJoyStick.Listen_Dir(DIR.D_R)) {
        radio.sendNumber(5)
        basic.showLeds(`
            # . . . .
            . # . . #
            . . # . #
            . . . # #
            . # # # #
            `)
    } else if (WSJoyStick.Listen_Dir(DIR.D_L)) {
        radio.sendNumber(6)
        basic.showLeds(`
            . . . . #
            # . . # .
            # . # . .
            # # . . .
            # # # # .
            `)
    } else {
        radio.sendString("stop")
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    }
})
