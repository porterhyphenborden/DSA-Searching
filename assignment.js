const BinarySearchTree = require('./binarysearchtree');
const Queue = require('./queue');

//1. How many searches?
    //12, 6, 8
    //12, 17, 14, 15

//2. See search-algorithms

//4. Searching in a BST
    //14, 19, 15, 27, 25, 79, 90, 91, 89, 35
    //8, 6, 5, 7, 10, 9, 11

//5. Implement different tree traversals
    BST = new BinarySearchTree();
    BST.insert(25, 25);
    BST.insert(15, 15);
    BST.insert(50, 50);
    BST.insert(10, 10);
    BST.insert(24, 24);
    BST.insert(35, 35);
    BST.insert(70, 70);
    BST.insert(4, 4);
    BST.insert(12, 12);
    BST.insert(18, 18);
    BST.insert(31, 31);
    BST.insert(44, 44);
    BST.insert(66, 66);
    BST.insert(90, 90);
    BST.insert(22, 22);

    function dfsInOrder(tree) {
        if (tree === null) {
            return;
        }
        if (tree.left) {
            dfsInOrder(tree.left);
        }
        console.log(tree.value);
        if (tree.right) {
            dfsInOrder(tree.right);
        }
    }

    function dfsPreOrder(tree) {
        if (tree === null) {
            return;
        }
        console.log(tree.value);
        if (tree.left) {
            dfsPreOrder(tree.left);
        }
        if (tree.right) {
            dfsPreOrder(tree.right);
        }
    }

    function dfsPostOrder(tree) {
        if (tree === null) {
            return;
        }
        if (tree.left) {
            dfsPreOrder(tree.left);
        }
        if (tree.right) {
            dfsPreOrder(tree.right);
        }
        console.log(tree.value);
    }

    dfsInOrder(BST);
    dfsPreOrder(BST);
    dfsPostOrder(BST);

//6. Find the commanding officer

    function rank(tree) {
        const values = [];
        const queue = new Queue(); // Assuming a Queue is implemented (refer to previous lesson on Queue)
        const node = tree;
        queue.enqueue(node);
        while (queue.first !== null) {
            const node = queue.dequeue(); //remove from the queue
            values.push(node.value); // add that value from the queue to an array

            if (node.left) {
                queue.enqueue(node.left); //add left child to the queue
            }

            if (node.right) {
                queue.enqueue(node.right); // add right child to the queue
            }
        }
        return values;
    }

//7. Max profit

    function maxProfit(trades) {
        let max = 0;
        for (let i = 0; i < trades.length - 1; i++) {
            let tempMax = trades[i] - trades[i + 1];
            if (tempMax > max) {
                max = tempMax;
            }
        }
        return max;
    }

    console.log(maxProfit([128, 97, 121, 123, 98, 97, 105]));





