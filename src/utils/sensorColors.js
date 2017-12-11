import jsonTemplate from '../utils/SensorTemplate.json'

async function sensorColors(svg, props) {

    var keysCrash = jsonTemplate.sensors.crash
    Object.keys(keysCrash).forEach(key => {
        keysCrash[key]=props[key];
      });

    keysCrash.crashFront = props.sensors.crashFront;
    keysCrash.crashRight = props.sensors.crashRight;
    keysCrash.crashLeft = props.sensors.crashLeft;
    keysCrash.crashBackRight = props.sensors.crashBackRight;
    keysCrash.crashBackLeft = props.sensors.crashBackLeft;
    keysCrash.airbagRight = props.sensors.airbagRight;
    keysCrash.airbagLeft = props.sensors.airbagLeft;

    for (var key in keysCrash) {
    if(keysCrash.hasOwnProperty(key)){
        if (keysCrash[key] === undefined) {keysCrash[key] = 0}
        }
    }

    let crash_a = document.getElementsByTagName("circle")[0];
    if ((keysCrash.crashFront) >= props.sensors.crashFront) {crash_a.style.fill = "yellow"}
    let crash_b = document.getElementsByTagName("circle")[1];
    if ((keysCrash.crashRight) >= props.sensors.crashRight) {crash_b.style.fill = "yellow"}
    let crash_c = document.getElementsByTagName("circle")[2];
    if ((keysCrash.crashLeft) >= props.sensors.crashLeft) {crash_c.style.fill = "yellow"}
    let crash_d = document.getElementsByTagName("circle")[3];
    if ((keysCrash.crashBackRight) >= props.sensors.crashBackRight) {crash_d.style.fill = "yellow"}
    let crash_e = document.getElementsByTagName("circle")[4];
    if ((keysCrash.crashBackLeft) >= props.sensors.crashBackLeft) {crash_e.style.fill = "yellow"}
    let crash_f = document.getElementsByTagName("circle")[5];
    if ((keysCrash.airbagRight) >= props.sensors.airbagRight) {crash_f.style.fill = "yellow"}
    let crash_g = document.getElementsByTagName("circle")[6];
    if ((keysCrash.airbagLeft) >= props.sensors.airbagLeft) {crash_g.style.fill = "yellow"}

    
    console.log("choque", props.sensors.crashFront);

    // --------------------------------------------------------- AUTO
    var keysAuto = jsonTemplate.sensors.auto
    Object.keys(keysAuto).forEach(key => {
        keysAuto[key]=props[key];
      });
    
    keysAuto.co2exhaust = props.sensors.co2exhaust;
    keysAuto.coolantTemp = props.sensors.coolantTemp;
    keysAuto.batteryCheck = props.sensors.batteryCheck;
    keysAuto.oilMeter = props.sensors.oilMeter;
    keysAuto.acCompressor = props.sensors.acCompressor;
    keysAuto.mileage = props.sensors.mileage;
    keysAuto.fuelInjection = props.sensors.fuelInjection;
    keysAuto.fuseBox = props.sensors.fuseBox;
    keysAuto.barometer = props.sensors.barometer;
    keysAuto.transmissionFluid = props.sensors.transmissionFluid;
    keysAuto.fuelTank = props.sensors.fuelTank;
    
    for (key in keysAuto) {
        if(keysAuto.hasOwnProperty(key)){
            if (keysAuto[key] === undefined) {keysAuto[key] = 0}
            }
        }

    // colors for the status sensors
    let status_1 = document.getElementsByTagName("rect")[0];
    if ((keysAuto.acCompressor) >= props.sensors.acCompressor) {status_1.style.fill = "red"}
    let status_2 = document.getElementsByTagName("rect")[1];
    if ((keysAuto.co2exhaust) >= props.sensors.co2exhaust) {status_2.style.fill = "red"}
    let status_3 = document.getElementsByTagName("rect")[2];
    if ((keysAuto.oilMeter) >= props.sensors.oilMeter) {status_3.style.fill = "red"}
    let status_4 = document.getElementsByTagName("rect")[3];
    if ((keysAuto.batteryCheck) >= props.sensors.batteryCheck) {status_4.style.fill = "red"}
    let status_5 = document.getElementsByTagName("rect")[4];
    if ((keysAuto.fuelInjection) >= props.sensors.fuelInjection) {status_5.style.fill = "red"}
    let status_6 = document.getElementsByTagName("rect")[5];
    if ((keysAuto.coolantTemp) >= props.sensors.coolantTemp) {status_6.style.fill = "red"}
    let status_7 = document.getElementsByTagName("rect")[6];
    if ((keysAuto.fuseBox) >= props.sensors.fuseBox) {status_7.style.fill = "red"}
    let status_8 = document.getElementsByTagName("rect")[7];
    if ((keysAuto.oilMeter) >= props.sensors.oilMeter) {status_8.style.fill = "red"}
    let status_9 = document.getElementsByTagName("rect")[8];
    if ((keysAuto.mileage) >= props.sensors.mileage) {status_9.style.fill = "red"}
    let status_10 = document.getElementsByTagName("rect")[9];
    if ((keysAuto.transmissionFluid) >= props.sensors.transmissionFluid) {status_10.style.fill = "red"}
    let status_11 = document.getElementsByTagName("rect")[10];
    if ((keysAuto.fuelTank) >= props.sensors.fuelTank) {status_11.style.fill = "red"}
}

module.exports = sensorColors;