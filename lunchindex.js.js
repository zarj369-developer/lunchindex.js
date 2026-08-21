esm = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];

function lunchpay(esm) {
    var randomename = Math.floor(Math.random() * esm.length);
    var chosingname = esm[randomename];

    return chosingname + " is going to buy lunch today!";
}
lunchpay(esm);
