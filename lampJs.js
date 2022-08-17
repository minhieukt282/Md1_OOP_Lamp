class Battery {
    energy = 100  ;

    constructor() {
    }

    setBattery(battery) {
        this.energy = battery;
    }

    getBattery() {
        return " Phan tram pin con lai la: " + this.energy + "%"
    }

    decreaseEnergy() {
        this.energy--;
    }

}

class FlashLamp {
    status;

    constructor() {
        this.battery = new Battery()
    }

    getBatteryInfo() {
        return this.battery.getBattery()
    }

    turnOn() {
        return this.status = true;
    }

    turnOff() {
        return this.status = false;
    }

    theLight() {
        if (this.status) {
                console.log("Lightttttttttttttttttt")
              this.battery.decreaseEnergy();
           return  this.getBatteryInfo()

        } else {
            console.log("lightOFFFFFFFFFFFFFFFFFFFFFFF")
        }
    }

}


let lamp = new FlashLamp();

lamp.turnOn()
console.log(lamp.theLight())
lamp.turnOff();




