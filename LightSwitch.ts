interface ISwitch {
    isOn: boolean;
    turn_on(): boolean;
    turn_off(): boolean;
}

class LightSwitch implements ISwitch {
    isOn: boolean;

    constructor() {
        this.isOn = false;
    }

    turn_on() {
        return  this.isOn = true;
    }

    turn_off() {
        return  this.isOn = false;
    }
}

let light1 = new LightSwitch();
light1.turn_on();

document.body.textContent =  String(light1.isOn);
