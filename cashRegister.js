function checkCashRegister(price, cash, cid) {

    const valueOfCoin = [
        ["PENNY", .01],
        ["NICKEL", .05],
        ["DIME", .10],
        ["QUARTER", .25],
        ["ONE", 1.00],
        ["FIVE", 5.00],
        ["TEN", 10.00],
        ["TWENTY", 20.00],
        ["ONE HUNDRED", 100.00]
    ]

    var opMsg = { status: "", change: [] };

    // calculating change.
    var change = Math.abs(price - cash);

    // calculating total cid
    var totalCID = 0;
    for (let k = 0; k < cid.length; k++) {
        totalCID += cid[k][1];
    }
    var rTotalCID = Math.round(100 * totalCID) / 100

    // set the status and change
    const giveBack = []
    if (change > rTotalCID) {
        opMsg.status = "INSUFFICIENT_FUNDS";
        opMsg.change = [];
    } else if (change < rTotalCID) {

        for (let i = valueOfCoin.length - 1; i >= 0; i--) {
            if (valueOfCoin[i][1] <= change && change !== 0) {
                if (change % valueOfCoin[i][1] === 0 && cid[i][1] > valueOfCoin[i][1] && change != 0) {
                    giveBack.push([valueOfCoin[i][0], change / valueOfCoin[i][1] * valueOfCoin[i][1]]);
                    change -= change / valueOfCoin[i][1] * valueOfCoin[i][1]
                } else if (Math.floor(Math.round(100 * change) / 100 / valueOfCoin[i][1]) * valueOfCoin[i][1] <= cid[i][1]) {
                    giveBack.push([valueOfCoin[i][0], Math.floor(Math.round(100 * change) / 100 / valueOfCoin[i][1]) * valueOfCoin[i][1]]);
                    change -= Math.floor(Math.round(100 * change) / 100 / valueOfCoin[i][1]) * valueOfCoin[i][1];

                } else if (Math.floor(Math.round(100 * change) / 100 / valueOfCoin[i][1]) * valueOfCoin[i][1] > cid[i][1]) {
                    giveBack.push([cid[i][0], cid[i][1]]);
                    change -= cid[i][1];
                }
            }

        }
        if (Math.round(100 * change) / 100 === 0) {
            opMsg.status = "OPEN";
            opMsg.change = giveBack
        } else {
            opMsg.status = "INSUFFICIENT_FUNDS"
            opMsg.change = [];
        }
    } else if (change === rTotalCID) {
        opMsg.status = "CLOSED"
        opMsg.change = cid
    }




    return opMsg;
}

console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));