def on_gesture_shake():
    global Steps
    Steps += 1
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

Steps = 0

def on_forever():
    basic.show_number(Steps)
basic.forever(on_forever)
