input.onButtonPressed(Button.A, function () {
    Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, 70)
    basic.showString("Stop in the name of the bots")
    basic.showString("Stop in the name of the law")
    for (let index = 0; index < 4; index++) {
        Kitronik_Move_Motor.beepHorn()
    }
    music.playMelody("C5 B A G F E D C ", 120)
})
input.onButtonPressed(Button.B, function () {
    Kitronik_Move_Motor.stop()
    for (let index = 0; index < 4; index++) {
        Kitronik_Move_Motor.beepHorn()
    }
    music.playMelody("C5 B A G F E D C ", 120)
})
basic.forever(function () {
	
})
