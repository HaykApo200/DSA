//SelectionSort // Time Complexity: O(n^2) // Space Complexity: O(1)

// How it works:
// 1.Go through the array to find the lowest value.
// 2.Move the lowest value to the front of the unsorted part of the array.
// 3.Go through the array again as many times as there are values in the array.

function selectionSort(arr){
    let index;
    let change = false;
    for(let i = 0; i < arr.length - 1;i++){
        let min = arr[i];
        for(let j = i + 1; j < arr.length;j++){
            if(arr[j] < min){
                min = arr[j]
                index = j;
                change = true;
            }
        }
        if(change){
            arr.splice(index,1);
            arr.splice(i,0,min)
        }
        change = false;
        console.log(arr)
    }
    return arr;
}