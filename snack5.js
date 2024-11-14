function findOutlier(integers) {
    let counterEven = 0;

    integers.forEach(number => {
        if (number % 2 === 0) counterEven++;
    });

    if (counterEven === 1) {
        let numberFinded = 0;
        integers.forEach(number => {
            if (number % 2 === 0) numberFinded = number;
        });
        return `${numberFinded} (the only even number)`;
    }

    if (counterEven > 1) {
        let numberFinded = 0;
        integers.forEach(number => {
            if (number % 2 !== 0) numberFinded = number;
        });
        return `${numberFinded} (the only odd number)`;
    }
}