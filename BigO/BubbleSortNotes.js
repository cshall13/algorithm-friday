// Bubble Sort

// -Start at the first element, and compare it to the one next to it
// -If the left is bigger, they are out of order. SWITCH!
// -go to the next one, repeat
// do the entire list, n times, and the list MUST be sorted

var unsorted = [5,2,6,3,1,3];

// first time through
-check [0] and [1] ... 5 > 2? YES. Switch.
2,5,6,3,1,3
-check [1] and [2] ... 5 > 6? No.
-check [2] and [3] ... 6 > 3? YES. Switch.
2,5,3,6,1,3
-check [3] and [4] ... 6 > 1? YES. Switch.
2,5,3,1,6,3
-check [4] and [5] ... 6 > 3? YES. Switch.
2,5,3,1,3,6

second Time through
-check [0] and [1] ... 2 > 5? No. 
-check [1] and [2] ... 5 > 3? YES. Switch.
2,3,5,1,3,6
-check [2] and [3] ... 5 > 1? YES. Switch.
2,3,1,5,3,6
-check [3] and [4] ... 5 > 3? YES. Switch.
2,3,1,3,5,6
-check [4] and [5] ... 5 > 6? No. 


If n is list length, the biggest number is at n after 1 time
If n is list length, the 2 biggest numbers are at the end after 2 times
run a loop that goes through the whole array and checks each one
We only actually have to loop through the whole array minus the number of times already through

1st iteration = loop whole array
2nd iteration = loop whole array-1
3rd iteration = loop whole array-2
4th iteration = loop whole array-3

consider the cases...
if the list is in reverse: have to go through n elements, n times
if the list is in order: still have to go through n elements, n times

To optimize (modified bubble sort), set up a bool to false and if a switch is made, change it 
to true. At the end of the loop if the bool is STILL false, no switches were made,
LIST IS IN ORDER!!! STOP. Saved you a bunch of time

Now the cases are different...
List is in reverse: have to go through n elements, n times
List is in order: 



