/**
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 */
var minMovesToSeat = function(seats, students) {
    let seat = seats.sort((a,b) => a -b);
    let student = students.sort((a,b) => a -b);

    let dif = [];
    
    for(let i = 0; i < seat.length; i++) {
        dif.push(Math.abs(seat[i] - student[i]))
    }

    return dif.reduce((a,b) => a + b)

};