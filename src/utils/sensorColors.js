function sensorColors(svg) {

    // colors for the crash sensors
    let crash_a = svg.children[2].children[0];
    let crash_b = svg.children[2].children[1];
    let crash_c = svg.children[2].children[2];
    let crash_d = svg.children[2].children[3];
    let crash_e = svg.children[2].children[4];
    let crash_f = svg.children[2].children[5];

    crash_a.style.fill = "blue";

    // colors for the status sensors
    let status_a = svg.children[3].children[0];
    let status_b = svg.children[3].children[1];
    let status_c = svg.children[3].children[2];
    let status_d = svg.children[3].children[3];
    let status_e = svg.children[3].children[4];
    let status_f = svg.children[3].children[5];
    let status_g = svg.children[3].children[6];
    let status_h = svg.children[3].children[7];
    let status_i = svg.children[3].children[8];
    let status_j = svg.children[3].children[9];
    let status_k = svg.children[3].children[10];


    status_k.style.fill = "blue";

    console.log("Sensor Colors has loaded properly.");
}

module.exports = sensorColors;