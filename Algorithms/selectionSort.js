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