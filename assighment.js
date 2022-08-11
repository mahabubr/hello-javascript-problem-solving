function radianToDegree(radian) {
    if (typeof radian === 'number') {
        let degree = 57.2958 * radian;
        // fixed the floating point number
        degree = parseFloat(degree.toFixed(2));
        return degree;
    }
    else {
        return 'Please Input The Valid Info';
    }
}

function isJavaScriptFile(string) {
    if (typeof string === 'string') {
        // another try to endswith()
        let fileExtension = string.split('.').pop();
        if (fileExtension === 'js') {
            return true;
        }
        else {
            return false;
        }
    }
    else {
        return 'Please Input The Valid Info';
    }
}

function oilPrice(disel, petrol, okten) {
    if (typeof disel === 'number' && typeof petrol === 'number' && typeof okten === 'number') {
        const diselPrice = disel * 114;
        const petrolPrice = petrol * 130;
        const oktenPrice = okten * 135;
        // sum all the price
        const totalPrice = diselPrice + petrolPrice + oktenPrice;
        return totalPrice;
    }
    else {
        return 'Please Input The Valid Info';
    }
}

function publicBusFare(passenger) {
    //bus and minibus capacity
    const busCapacity = 50;
    const microBusCapacity = 11;
    // bus fare price
    const publicBusTicketPrice = 250;
    if (typeof passenger === 'number') {
        if (busCapacity <= passenger) {
            const leftPeople = passenger % busCapacity;
            const microBusPeople = leftPeople % microBusCapacity;
            const busFare = publicBusTicketPrice * microBusPeople;
            return busFare;
        }
        else {
            // return minibus and bus fare
            const leftPeople = passenger % microBusCapacity;
            const total = leftPeople * publicBusTicketPrice;
            return total;
        }
    }
    else {
        return 'Please Input The Valid Info';
    }
}

function isBestFriend(firstFriend, secondFriend) {
    if (typeof firstFriend === 'object' && typeof secondFriend === 'object') {
        // take the first friend name and last friend name to and object
        if (firstFriend.name === secondFriend.friend && secondFriend.name === firstFriend.friend) {
            return true;
        }
        else {
            return false;
        }
    }
    else {
        return 'Please Input The Valid Info';
    }
}