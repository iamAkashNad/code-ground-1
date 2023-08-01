const findSumOfArrayElements = (arr) => {
    if(!Array.isArray(arr)) throw new Error("Please pass an array as input!");
    return arr.reduce((sum, curr) => sum + curr);
};

try {
    console.log(findSumOfArrayElements([1, 2, 3, 4, 2]));
} catch(error) {
    console.log(error);
}
