
function addOneHour(time) {
    let date = new Date(`1970-01-01T${time}`);
    if (isNaN(date.getTime())) {
        throw new Error(`Invalid time string: ${time}`);
    }
    date.setHours(date.getHours() + 1);
    let newTime = date.toISOString().split('T')[1].split(':').slice(0, 2).join(':');
    return newTime;
}




module.exports = {addOneHour};


