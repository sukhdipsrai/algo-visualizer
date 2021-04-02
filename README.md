## Summary

Algo-visualiser, which allows the user to select an algorithm and see a visual representation of it. Written using minimal Javascript Libraries and a unique visual view. The main focus of this project was not only to revisit algorithms but to build core JavaScript understanding and learn animations in HTML Canvas.


![alt text](https://github.com/sukhdipsrai/algo-visualizer/blob/main/src/images/full_tutorial.gif)

## Installation

After cloning the repo, use ```npm start``` to run the website on localhost:8080

## Technologies, Libraries, APIs

- Canvas
- Vanilla JavaScript, HTML, CSS

## Code Snippets
```
  function quickSort(arr, start, end) {
    return new Promise((resolve) => {
      if (start < end) {
        quickSortPartition2(arr, start, end).then((pivotIndex) => {
          resolve(
            quickSort(arr, start, pivotIndex - 1).then(() =>
              quickSort(arr, pivotIndex + 1, end)
            )
          );
        });
      } else resolve();
    });
  }
```
Promises were needed to gate the function calls of quickSort and other functions. This was needed because ```setTimeout``` is called to control animation speeds. The next call on the stack would proceed if it were not waiting for a promise. JavaScript promises and ```setTimeout``` were quintessential in creating controllable animations. With the ```quickSort()``` function above, a recursive promise implementation was required for the same reason.
