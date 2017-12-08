import SensorTableCom from '../components/SensorTableCom'

function sensorColors(svg) {

    // colors for the crash sensors
    let crashes = [];

    let crash_a = document.getElementsByTagName("circle")[0];
    crashes.push(crash_a);
    let crash_b = document.getElementsByTagName("circle")[1];
    crashes.push(crash_b);
    let crash_c = document.getElementsByTagName("circle")[2];
    crashes.push(crash_c);
    let crash_d = document.getElementsByTagName("circle")[3];
    crashes.push(crash_d);
    let crash_e = document.getElementsByTagName("circle")[4];
    crashes.push(crash_e);
    let crash_f = document.getElementsByTagName("circle")[5];
    crashes.push(crash_f);
    let crash_g = document.getElementsByTagName("circle")[6];
    crashes.push(crash_g);

    crashes.forEach(function(crash) {
        crash.style.fill = "yellow";
    })

    let statuses = [];
    // colors for the status sensors
    let status_1 = document.getElementsByTagName("rect")[0];
    statuses.push(status_1);
    let status_2 = document.getElementsByTagName("rect")[1];
    statuses.push(status_2);
    let status_3 = document.getElementsByTagName("rect")[2];
    statuses.push(status_3);
    let status_4 = document.getElementsByTagName("rect")[3];
    statuses.push(status_4);
    let status_5 = document.getElementsByTagName("rect")[4];
    statuses.push(status_5);
    let status_6 = document.getElementsByTagName("rect")[5];
    statuses.push(status_6);
    let status_7 = document.getElementsByTagName("rect")[6];
    statuses.push(status_7);
    let status_8 = document.getElementsByTagName("rect")[7];
    statuses.push(status_8);
    let status_9 = document.getElementsByTagName("rect")[8];
    statuses.push(status_9);
    let status_10 = document.getElementsByTagName("rect")[9];
    statuses.push(status_10);
    let status_11 = document.getElementsByTagName("rect")[10];
    statuses.push(status_11);
    
    statuses.forEach(function(status) {status.style.fill = "red";})
}

module.exports = sensorColors;