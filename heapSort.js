function swap(array, index1, index2) {
    [array[index1], array[index2]] = [array[index2], array[index1]];
}


// this is the equivalent to the heapify down method
function heapify(array, index, length = array.length) {
    let largest = index,
        left = index * 2 + 1,
        right = index * 2 + 2;

    // compare element to it's left and right child 
    if (left < length && array[left] > array[largest]) {
        largest = left;
    }
    if (right < length && array[right] > array[largest]) {
        largest = right;
    }

    // if the parent node isn't the largest element, swap it with the largest child
    if (largest !== index) {
        swap(array, index, largest);

        // continue to heapify down
        heapify(array, largest, length);
    }

    return array;
}

function heapSort(array) {
    // max heapify the array
    for (let i = Math.floor(array.length / 2); i >= 0; i--) {
        heapify(array, i)
    }

    // work backwards, moving max elements to the end of the array
    for(let i = array.length - 1; i > 0; i--){
        // max element of unsorted section of array is at index 0, swap with element at last index in unsorted array
        swap(array, 0, i);

        // re-heapify array, from beginning to the end of the unsorted section
        heapify(array, 0, i);
    }

    return array;
}

