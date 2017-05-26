
var unsorted = [5,2,6,3];

function bubbleSort(array){
        for (i = 0; (i<array.length); i++){
            sortNumber = 0;
            n = 1;
            for ( j = 0; j<array.length-n; j++){
                if (array[j] > array[j+1]){
                    var x = array[j+1];
                    array[j+1] = array[j];
                    array[j] = x;
                    sortNumber += 1;
                }
            }
            n++;
            if (sortNumber == 0){
                return array
            }
        }
    return array
}
bubbleSort(unsorted);
