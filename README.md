# JavaScript Datastructures and Algorithms
Algorithms and datastructures implemented in javascript. The motivation for this project is to get to know javascript as a language, especially the new ecmascript standards.
Many of the implementation uses these new language features the ecmascript standard provides.
## Algorithms
Algorithms for searching and sorting in a collection is explained as they are implemented. For further information see the implementation, comments and the jsDoc(not generated yet).
### Search Algorithms
In this section a couple of well known algorithms for searching in a collection is adressed. 
#### Linear Search
Linear search algorithm is a algorithm that searches through the elements, one by one, from the first element in the collection to the end elment. More info wil come.
Linear Search algorithm depends has no assumption on the input collection in order for it to work:
##### Performance:
- Worst case: O(n), Where n is the number of items to search in. This happends if the item to search for is at the end of the input collection
- Best case : O(1), constant time, this could happen if the item to search for is in the begining of the input collection.
#### Binary Search
Binary search algorithm is a algorithm that divides the search space by two for each iteration it runs. More info wil come.
The binary search algorithm is depended on some properties of the relationship between the input elements:
- The input elements must be sorted.
- The input elements must be sorted in ascening order.
##### Performance:
- Worst case: O(log(n)) + 1, Where n is the number of items to search in.
- Best case : O(1), constant time, this could happen if the item to search for is in the middle of the collection of all items.
### Sort Algorithms
#### Bubble Sort
Bubblesort is a fun algorithm for sorting elements in a collection. It is not very effective but it is easy and fun to implement. Bubblesort should not be used on large
collections  because of its poor performance
##### Performance
- Worst case: O(n), Where n is the numbers of items in the given collection.
## Datastructures
### Lists
#### Linked Lists
##### Linked Lists
