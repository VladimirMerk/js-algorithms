# Graph search algorithms
## Breadth First Search (BFS)
Example: [breadth-first.html]()

1. Select initial peak, set it to a zero level of depth
2. All its neighbors are added to a queue for visiting. The peak is marked as visited and is no longer visited
3. Get elements from the queue, considering their depth level, as: parent depth level + 1. Add neighboring peaks to the queue.
4. Mark the current peak as visited and delete it from its queue.
5. Repeat steps 3 and 4 until we go around an entire graph.

