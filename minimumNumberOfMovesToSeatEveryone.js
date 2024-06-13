function minMovesToSeat(seats, students) {
    let seatsSortedArray = seats.sort((a, b) => a - b);
    let studentsSortedArray = students.sort((a, b) => a - b);
    let sum =0;
    for(let index=0; index< studentsSortedArray.length; index++){
        sum += Math.abs(studentsSortedArray[index] - seatsSortedArray[index]);
    }

    return sum;
};

console.log(minMovesToSeat([4,1,5,9],[1,3,2,6]))