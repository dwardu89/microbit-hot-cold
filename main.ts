enum RadioMessage {
    message1 = 49434,
    Hello = 49337
}
input.onButtonPressed(Button.A, function () {
    radio.sendString("Hot")
})
function Searching () {
    if (radio.receivedPacket(RadioPacketProperty.SignalStrength) > -75) {
        return 3
    } else if (radio.receivedPacket(RadioPacketProperty.SignalStrength) > -50) {
        return 2
    } else if (radio.receivedPacket(RadioPacketProperty.SignalStrength) > -28) {
        return 1
    } else {
        return 0
    }
}
input.onButtonPressed(Button.B, function () {
    radio.sendString("Cold")
})
radio.setGroup(1)
basic.forever(function () {
    if (Searching() == 3) {
        basic.showIcon(IconNames.Happy)
    } else if (Searching() == 2) {
        basic.showIcon(IconNames.Confused)
    } else if (Searching() == 1) {
        basic.showIcon(IconNames.Sad)
    } else {
        basic.showIcon(IconNames.Asleep)
    }
})
