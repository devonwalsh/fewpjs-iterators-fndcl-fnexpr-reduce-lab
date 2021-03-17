const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

const adder = (accumulator, currentValue) => accumulator + currentValue

const totalBatteries = batteryBatches.reduce(adder, 0)