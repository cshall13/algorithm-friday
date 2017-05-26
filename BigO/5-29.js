

var unsorted = [5,2,6,3,1,3];

function bubbleSort(array){
    // var sortedAnything = false;
    for (i = 0; i<array.length; i++){
        for ( j = 0; j<array.length-1; j++){
            if (array[j] > array[j+1]){
                var x = array[j+1];
                array[j+1] = array[j];
                array[j] = x;
                // sortedAnything = true
            }
        }
    }
    console.log(array);
    return array
}
bubbleSort(unsorted);