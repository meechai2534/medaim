speed = 0
ACC_speed = 0
slow_speed = 0
turn_speed = 0
bass_speed = 0
ref_3_ADC = 0
infrared_fL = 0
infrared_center = 0
infrared_fR = 0
left_speed = 0
right_speed = 0
def moter_stop_for_put():
    iBIT.motor_stop()
    basic.pause(1000)
def speed_con():
    global speed, ACC_speed, slow_speed, turn_speed, bass_speed
    speed = 70
    ACC_speed = 100
    slow_speed = 50
    turn_speed = 70
    bass_speed = speed
def black_color():
    if ref_3_ADC <= 500:
        basic.pause(100)
def read_ADC():
    global infrared_fL, infrared_center, infrared_fR
    infrared_fL = iBIT.read_adc(ibitReadADC.ADC0)
    infrared_center = iBIT.read_adc(ibitReadADC.ADC1)
    infrared_fR = iBIT.read_adc(ibitReadADC.ADC2)
def red_color():
    if ref_3_ADC >= 1400 and ref_3_ADC <= 2000:
        basic.pause(100)
        iBIT.motor_stop()
def moter_stop_for_turn():
    iBIT.motor_stop()
    basic.pause(100)
def green_color():
    if ref_3_ADC >= 600 and ref_3_ADC <= 1200:
        servo_put()
        basic.pause(100)
def show_ADC2():
    read_ADC()
    basic.show_number(infrared_fL)
    basic.pause(5000)
    basic.show_number(infrared_center)
    basic.pause(5000)
    basic.show_number(infrared_fR)
    basic.pause(5000)
def right_slide():
    if infrared_fR >= 2900 and infrared_fL <= 500:
        iBIT.set_motor(ibitMotorCH.M1, ibitMotor.FORWARD, bass_speed)
        iBIT.set_motor(ibitMotorCH.M2, ibitMotor.FORWARD, slow_speed)
def left_slide():
    if infrared_fL >= 2900 and infrared_fR <= 500:
        iBIT.set_motor(ibitMotorCH.M1, ibitMotor.FORWARD, slow_speed)
        iBIT.set_motor(ibitMotorCH.M2, ibitMotor.FORWARD, bass_speed)
def Initail_speed():
    global left_speed, right_speed
    if bass_speed <= 50:
        left_speed = bass_speed - 0
        right_speed = bass_speed - 0
    elif bass_speed <= 70:
        moter_stop_for_put()
        left_speed = bass_speed - 0
        right_speed = bass_speed - 0
    else:
        left_speed = bass_speed - 0
        right_speed = bass_speed - 0
def servo_put():
    basic.pause(100)
    iBIT.servo(ibitServo.SV1, 120)
    basic.pause(100)
    iBIT.servo(ibitServo.SV1, 0)
    basic.pause(100)
    iBIT.servo_stop(ibitServo.SV1)
def forward():
    if infrared_fR < 300 and infrared_fL < 300:
        iBIT.set_motor(ibitMotorCH.M1, ibitMotor.FORWARD, bass_speed)
        iBIT.set_motor(ibitMotorCH.M2, ibitMotor.FORWARD, bass_speed)
def moter_black_ward():
    basic.pause(100)
    iBIT.motor(ibitMotor.BACKWARD, slow_speed)
    basic.pause(100)
    iBIT.motor_stop()
def moterturn_left():
    moter_stop_for_turn()
    iBIT.turn(ibitTurn.LEFT, turn_speed)
    basic.pause(100)
    iBIT.motor_stop()
def ref_3_adc():
    global ref_3_ADC
    ref_3_ADC = (infrared_fL + infrared_center + infrared_fR) / 3
def moter_turn_right():
    moter_stop_for_turn()
    iBIT.turn(ibitTurn.RIGHT, turn_speed)
    basic.pause(100)
    iBIT.motor_stop()