const eqn_LHSs = [
    "x = ",
    "n = ",
    "x<sub>min</sub> = ",
    "x<sub>max</sub> = ",
    "&sum; = ",
    "&#x0078;&#x0304; = ",
    "x&#x0303; = ",
    "&#x0073;<sup>2</sup> = ",
    "&#x0073; = "
]
 
 /*
* Parameters: array of nums – a
* Outputs: sum of nums
* Description: this function takes an array of nums
* and sums the indices together and
* returns the sum.
*/
 function calculate_array_sum(x) {
    let sum = 0;
        for(let i = 0 ; i < x.length ; i++) {
            sum += x[i] ;
        }
        return sum ;
 }

 /*
* Parameters: some num representing the sum of a set of nums,
* the size of the original set of nums.
* Outputs: the average/mean/x-bar of the set
* Description: Calculates and returns x-bar/mean/avg of a set
* i.e., returns set sum / set size
*/
 function calculate_mean(sum, n) {
    let x_bar = (sum / n );
    return x_bar ;
 }

 /*
* Parameters: an array of ordered asc nums
* Outputs: returns median.
* Description: Calculates the median of the array.
* If array length is odd, returns
* middle index of set;
* else (array length is even), returns
* average of middle two indices.
*/
 function calculate_median(x) {
    let middleIndex = Math.floor(x.length / 2);

    // If the length of the array is even, return the average of the two middle elements
    if (x.length % 2 === 0) {
        return (x[middleIndex - 1] + x[middleIndex]) / 2;
    } else {
        // If the length of the array is odd, return the middle element
        return x[middleIndex];
    }
 }

 /*
* Parameters: an array of ordered asc nums, and mean of arr vals
* Outputs: returns variance.
* Description: Using the mean of the set (2nd arg),
* calculates & returns variance of the set
* contained in array (1st arg).
*/
 function calculate_variance(x, x_bar ) {
    // Initialize a variable to accumulate the sum of squared differences
    let sumOfSquaredDifferences = 0;

    // Calculate the sum of squared differences from the mean
    for (let i = 0; i < x.length; i++) {
        sumOfSquaredDifferences += (x[i] - x_bar) * (x[i] - x_bar);
    }
    
    let variance = sumOfSquaredDifferences / (x.length - 1)
    return variance; 
}

/*
* Parameters: variance of a set
* Outputs: std dev. - sqrt(variance)
* Description: Takes a sample set's variance
* and returns the sqrt, which is the
* std dev (standard deviation).
*/
function calculate_stddev(variance) {
    return Math.sqrt(variance) ;
}
