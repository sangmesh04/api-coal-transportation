const data = require("../database/data");
// const coalMines = require("../database/data");
// const distributorData = require("../database/data");
// const powerPlants = require("../database/data");

module.exports.shortestRoute = async (req, res) => {
  try {
    class PriorityQueue {
      constructor() {
        this.heap = [];
      }

      enqueue(node, priority) {
        this.heap.push({ node, priority });
        this.bubbleUp();
      }

      dequeue() {
        if (this.isEmpty()) return null;
        if (this.heap.length === 1) return this.heap.pop();

        const root = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown();
        return root;
      }

      isEmpty() {
        return this.heap.length === 0;
      }

      bubbleUp() {
        let currentIndex = this.heap.length - 1;

        while (currentIndex > 0) {
          const parentIndex = Math.floor((currentIndex - 1) / 2);
          if (
            this.heap[currentIndex].priority < this.heap[parentIndex].priority
          ) {
            [this.heap[currentIndex], this.heap[parentIndex]] = [
              this.heap[parentIndex],
              this.heap[currentIndex],
            ];
            currentIndex = parentIndex;
          } else {
            break;
          }
        }
      }

      bubbleDown() {
        let currentIndex = 0;

        while (true) {
          const leftChildIndex = 2 * currentIndex + 1;
          const rightChildIndex = 2 * currentIndex + 2;
          let smallestChildIndex = null;

          if (leftChildIndex < this.heap.length) {
            smallestChildIndex = leftChildIndex;
          }

          if (
            rightChildIndex < this.heap.length &&
            this.heap[rightChildIndex].priority <
              this.heap[leftChildIndex].priority
          ) {
            smallestChildIndex = rightChildIndex;
          }

          if (smallestChildIndex === null) break;

          if (
            this.heap[currentIndex].priority >
            this.heap[smallestChildIndex].priority
          ) {
            [this.heap[currentIndex], this.heap[smallestChildIndex]] = [
              this.heap[smallestChildIndex],
              this.heap[currentIndex],
            ];
            currentIndex = smallestChildIndex;
          } else {
            break;
          }
        }
      }
    }

    class Graph {
      constructor() {
        this.nodes = new Set();
        this.edges = {};
      }

      addNode(node) {
        this.nodes.add(node);
        this.edges[node] = [];
      }

      addEdge(node1, node2, weight) {
        this.edges[node1].push({ node: node2, weight });
        // this.edges[node2].push({ node: node1, weight });
      }
    }

    function dijkstra(graph, startNode, endNode) {
      const distances = {};
      const previous = {};
      const priorityQueue = new PriorityQueue();

      for (const node of graph.nodes) {
        distances[node] = Infinity;
      }
      distances[startNode] = 0;

      priorityQueue.enqueue(startNode, 0);

      while (!priorityQueue.isEmpty()) {
        const { node, priority } = priorityQueue.dequeue();

        if (node === endNode) {
          return buildPath(endNode, previous);
        }

        if (priority > distances[node]) continue;

        for (const neighbor of graph.edges[node]) {
          const { node: nextNode, weight } = neighbor;
          const distance = distances[node] + weight;

          if (distance < distances[nextNode]) {
            distances[nextNode] = distance;
            previous[nextNode] = node;
            priorityQueue.enqueue(nextNode, distance);
          }
        }
      }

      return null;
    }

    function buildPath(endNode, previous) {
      const path = [];
      let currentNode = endNode;

      while (previous[currentNode] !== undefined) {
        path.unshift(currentNode);
        currentNode = previous[currentNode];
      }

      path.unshift(currentNode); // Add the start node
      return path;
    }

    // Example usage:
    coalMines = data.coalMines;
    distributorData = data.distributorData;
    powerPlants = data.powerPlants;
    edges = data.edges;

    const graph = new Graph();
    console.log(coalMines);
    console.log(distributorData);
    console.log(powerPlants);
    console.log(edges);

    coalMines.forEach((coal) => {
      graph.addNode(coal.id);
    });
    distributorData.forEach((distributor) => {
      graph.addNode(distributor.id);
    });
    powerPlants.forEach((plants) => {
      graph.addNode(plants.id);
    });

    edges.forEach((edge) => {
      graph.addEdge(edge[0], edge[1], edge[2]);
    });

    // const startNode = "M1";
    // const endNode = "C2";

    const startNode = req.body.source;
    const endNode = req.body.destination;

    // graph.addNode("A");
    // graph.addNode("B");
    // graph.addNode("C");
    // graph.addNode("D");
    // graph.addNode("E");

    // graph.addEdge("A", "B", 1);
    // graph.addEdge("A", "C", 2);
    // graph.addEdge("B", "D", 4);
    // graph.addEdge("C", "D", 2);
    // graph.addEdge("D", "E", 5);

    // const startNode = "A";
    // const endNode = "E";
    const shortestPath = dijkstra(graph, startNode, endNode);
    console.log(shortestPath);

    if (shortestPath) {
      return res
        .status(200)
        .json({ message: "Route found", path: shortestPath });
    } else {
      return res
        .status(200)
        .json({ message: "Route not exists found", path: [] });
    }
  } catch (err) {
    return res.status(400).json({ message: "Server error" });
  }
};

module.exports.getData = async (req, res) => {
  try {
    return res.status(200).json({
      data: { mines: data.coalMines, customers: data.powerPlants },
      status: true,
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: err.message, status: false });
  }
};

module.exports.getDistributors = async (req, res) => {
  try {
    return res.status(200).json({ data: data.distributorData, status: true });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: err.message, status: false });
  }
};
