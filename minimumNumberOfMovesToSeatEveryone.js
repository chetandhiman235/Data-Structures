function minMovesToSeat(seats, students) {
    let seatsSortedArray = seats.sort();
    let studentsSortedArray = students.sort();
    let sum =0;
    for(let index=0; index< studentsSortedArray.length; index++){
        sum += Math.abs(studentsSortedArray[index] - seatsSortedArray[index]);
    }
    return sum;
};

console.log(minMovesToSeat([4,1,5,9],[1,3,2,6]))