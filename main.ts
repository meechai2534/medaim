let ref_3_ADC = 0
let infrared_fL = 0
let infrared_center = 0
let infrared_fR = 0
let bass_speed = 0
let slow_speed = 0
let left_speed = 0
let right_speed = 0
let turn_speed = 0
let speed = 0
let ACC_speed = 0
function moter_stop_for_put () {
    iBIT.MotorStop()
    basic.pause(1000)
}
function black_color () {
    if (ref_3_ADC <= 500) {
        basic.pause(100)
    }
}
function read_ADC () {
    infrared_fL = iBIT.ReadADC(ibitReadADC.ADC0)
    infrared_center = iBIT.ReadADC(ibitReadADC.ADC1)
    infrared_fR = iBIT.ReadADC(ibitReadADC.ADC2)
}
function red_color () {
    if (ref_3_ADC >= 1400 && ref_3_ADC <= 2000) {
        basic.pause(100)
        iBIT.MotorStop()
    }
}
function moter_stop_for_turn () {
    iBIT.MotorStop()
    basic.pause(100)
}
function green_color () {
    if (ref_3_ADC >= 600 && ref_3_ADC <= 1200) {
        servo_put()
        basic.pause(100)
    }
}
function ref_3_adc () {
    ref_3_ADC = (infrared_fL + infrared_center + infrared_fR) / 3
}
function show_ADC2 () {
    read_ADC()
    basic.showNumber(infrared_fL)
    basic.pause(5000)
    basic.showNumber(infrared_center)
    basic.pause(5000)
    basic.showNumber(infrared_fR)
    basic.pause(5000)
}
function right_slide () {
    if (infrared_fR >= 2900 && infrared_fL <= 500) {
        iBIT.setMotor(ibitMotorCH.M1, ibitMotor.Forward, bass_speed)
        iBIT.setMotor(ibitMotorCH.M2, ibitMotor.Forward, slow_speed)
    }
}
function left_slide () {
    if (infrared_fL >= 2900 && infrared_fR <= 500) {
        iBIT.setMotor(ibitMotorCH.M1, ibitMotor.Forward, slow_speed)
        iBIT.setMotor(ibitMotorCH.M2, ibitMotor.Forward, bass_speed)
    }
}
function Initail_speed () {
    if (bass_speed <= 50) {
        left_speed = bass_speed - 0
        right_speed = bass_speed - 0
    } else if (bass_speed <= 70) {
        moter_stop_for_put()
        left_speed = bass_speed - 0
        right_speed = bass_speed - 0
    } else {
        left_speed = bass_speed - 0
        right_speed = bass_speed - 0
    }
}
function servo_put () {
    basic.pause(100)
    iBIT.Servo(ibitServo.SV1, 120)
    basic.pause(100)
    iBIT.Servo(ibitServo.SV1, 0)
    basic.pause(100)
    iBIT.ServoStop(ibitServo.SV1)
}
function forward () {
    if (infrared_fR < 300 && infrared_fL < 300) {
        iBIT.setMotor(ibitMotorCH.M1, ibitMotor.Forward, bass_speed)
        iBIT.setMotor(ibitMotorCH.M2, ibitMotor.Forward, bass_speed)
    }
}
function moter_black_ward () {
    basic.pause(100)
    iBIT.Motor(ibitMotor.Backward, slow_speed)
    basic.pause(100)
    iBIT.MotorStop()
}
function moterturn_left () {
    moter_stop_for_turn()
    iBIT.Turn(ibitTurn.Left, turn_speed)
    basic.pause(100)
    iBIT.MotorStop()
}
function moter_turn_right () {
    moter_stop_for_turn()
    iBIT.Turn(ibitTurn.Right, turn_speed)
    basic.pause(100)
    iBIT.MotorStop()
}
function speed_con () {
    speed = 70
    ACC_speed = 100
    slow_speed = 50
    turn_speed = 70
    bass_speed = speed
}
