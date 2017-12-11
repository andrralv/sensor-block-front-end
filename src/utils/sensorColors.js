import jsonTemplate from '../utils/SensorTemplate.json'

function sensorColors(svg, props) {

    var keysCrash = jsonTemplate.sensors.crash
    Object.keys(keysCrash).forEach(key => {
        keysCrash[key]=props[key];
      });
    
    for (var key in keysCrash) {
    if(keysCrash.hasOwnProperty(key)){
        if (keysCrash[key] === undefined) {keysCrash[key] = 0}
        }
    }

    console.log("en colors:", keysCrash)
    // colors for the crash sensors

    let crash_a = document.getElementsByTagName("circle")[0];
    if ((keysCrash[0] !== undefined)) {crash_a.style.fill = "yellow"}
    let crash_b = document.getElementsByTagName("circle")[1];
    if ((keysCrash[1] !== undefined)) {crash_b.style.fill = "yellow"}
    let crash_c = document.getElementsByTagName("circle")[2];
    if ((keysCrash[2] !== undefined)) {crash_c.style.fill = "yellow"}
    let crash_d = document.getElementsByTagName("circle")[3];
    if ((keysCrash[3] !== undefined)) {crash_d.style.fill = "yellow"}
    let crash_e = document.getElementsByTagName("circle")[4];
    if ((keysCrash[4] !== undefined)) {crash_e.style.fill = "yellow"}
    let crash_f = document.getElementsByTagName("circle")[5];
    if ((keysCrash[5] !== undefined)) {crash_f.style.fill = "yellow"}
    let crash_g = document.getElementsByTagName("circle")[6];
    if ((keysCrash[6] !== undefined)) {crash_g.style.fill = "yellow"}


    // --------------------------------------------------------- AUTO
    var keysAuto = jsonTemplate.sensors.auto
    Object.keys(keysAuto).forEach(key => {
        keysAuto[key]=props[key];
      });
    
    for (key in keysAuto) {
    if(keysAuto.hasOwnProperty(key)){
        if (keysAuto[key] === undefined) {keysAuto[key] = 0}
        }
    }
    console.log("en colors:", keysAuto)

    // colors for the status sensors
    let status_1 = document.getElementsByTagName("rect")[0];
    console.log(keysAuto.coolantTemp)
    if ((keysAuto.co2exhaust) > 0) {status_1.style.fill = "red"}
    let status_2 = document.getElementsByTagName("rect")[1];
    if ((keysAuto[1] !== undefined)) {status_2.style.fill = "red"}
    let status_3 = document.getElementsByTagName("rect")[2];
    if ((keysAuto[2] !== undefined)) {status_3.style.fill = "red"}
    let status_4 = document.getElementsByTagName("rect")[3];
    if ((keysAuto[3] !== undefined)) {status_4.style.fill = "red"}
    let status_5 = document.getElementsByTagName("rect")[4];
    if ((keysAuto[4] !== undefined)) {status_5.style.fill = "red"}
    let status_6 = document.getElementsByTagName("rect")[5];
    if ((keysAuto[5] !== undefined)) {status_6.style.fill = "red"}
    let status_7 = document.getElementsByTagName("rect")[6];
    if ((keysAuto[6] !== undefined)) {status_7.style.fill = "red"}
    let status_8 = document.getElementsByTagName("rect")[7];
    if ((keysAuto[7] !== undefined)) {status_8.style.fill = "red"}
    let status_9 = document.getElementsByTagName("rect")[8];
    if ((keysAuto[8] !== undefined)) {status_9.style.fill = "red"}
    let status_10 = document.getElementsByTagName("rect")[9];
    if ((keysAuto[9] !== undefined)) {status_10.style.fill = "red"}
    let status_11 = document.getElementsByTagName("rect")[10];
    if ((keysAuto[10] !== undefined)) {status_11.style.fill = "red"}
    
}

module.exports = sensorColors;