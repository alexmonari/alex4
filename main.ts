input.onButtonPressed(Button.A, function () {
    music.playMelody("E B C5 A B G A F ", 120)
})
input.onButtonPressed(Button.AB, function () {
    music.playMelody("C5 B A G F E D C ", 120)
})
input.onButtonPressed(Button.B, function () {
    music.playMelody("C5 A B G A F G E ", 120)
})
input.onGesture(Gesture.Shake, function () {
    music.playMelody("C5 G B A F A C5 B ", 120)
})
basic.showIcon(IconNames.Ghost)
