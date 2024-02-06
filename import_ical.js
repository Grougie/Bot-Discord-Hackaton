const fs = require('fs');
const ICAL = require('ical.js');

const fichierICal = 'Edt_BAUDET.ics';

var contentICal = fs.readFileSync(fichierICal, 'utf8');
var jcalData = ICAL.parse(contentICal);
var comp = new ICAL.Component(jcalData);
var vevents = comp.jCal.flat(1);
const currentDate = new Date();
const formatedDate = currentDate.toISOString().split('T')[0];
console.log(formattedDate);

function getEvents() {
    for (let i = 0; i < vevents.length; i++) {
        if (vevents[i][1][4] !== undefined) {
            if (vevents[i][1][4][0] == "dtstart") {
                if (vevents[i][1][4][3].split('T')[0] === formatedDate) {
                    console.log(vevents[i][1][8][3]);
                    console.log(vevents[i][1][4][3].split('T')[1])
                    resultEvent = vevents[i][1][8][3] + vevents[i][1][4][3].split('T')[1];
                }
            }
        }
    }
    return resultEvent;
}