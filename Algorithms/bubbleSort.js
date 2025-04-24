//BubbleSort // Time Complexity: O(n^2) // Space Complexity: O(1) // Best Case: O(n)
// How it works:
// 1.Go through the array, one value at a time.
// 2.For each value, compare the value with the next value.
// 3.If the value is higher than the next one, swap the values so that the highest value comes last.
// 4.Go through the array as many times as there are values in the array.

function bubbleSort1(arr){
    let sort = false;
    let i = 0;
    let swap = 0;
    
    while(!sort){
        if(arr[i] > arr[i + 1]){
            let change = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = change;
            swap += 1;
        }
        i+=1;
        
        if(i + 1 == arr.length){
            i = 0;
            if(swap == 0){
                sort = !sort;
            }else{
                swap = 0;
            }
        }
    }
    return arr;
    
}

function bubbleSort2(arr) {
    let n = arr.length;
    let swapped;

    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                swapped = true;
            }
        }
        n -= 1;
    } while (swapped);

    return arr;
}
