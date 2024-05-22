function FetchSum(arrays){
    let sum = 0;
    arrays.forEach(element => {
        sum += element;
    });
    return  sum;
}

module.exports = FetchSum;