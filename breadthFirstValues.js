class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const breadthFirstValues = (root) => {
    if(root === null) return [];
    
    const values = [];
    const queue = [ root ];

    while(queue.length > 0) {
        const current = queue.shift();
        values.push(current.val);

        if(current.left) queue.push(current.left) 
        if(current.right) queue.push(current.right)
    }

    return values;
}

// iterative method
const treeIncludes = (root, target) => {
    if(root === null) return false;

    const queue = [ root ];

    while(queue.length > 0) {
        const current = queue.shift();
        console.log(current.val)

        // if we find return true, no need to continue queue
        if(current.val === target) return true;

        if(current.left) queue.push(current.left)
        if(current.right) queue.push(current.right)
    }

    // if we traverse through entire tree and val isn't there
    return false;
}

// recursive method
const treeIncludesRecursive = (root, target) => {
    if(root === null) return false;
    if(root.val === target) return true;
    return treeIncludesRecursive(root.left, target) || treeIncludes(root.right, target);
}

// compute total sum of all values in a tree using breadth first alg
// breadth first - iterative
const treeSum = (root) => {
    if(root === null) return 0;

    let sum = 0;
    const queue = [ root ];

    while(queue.length > 0) {
        const current = queue.shift();
        console.log(current.val)
        sum += current.val;

        if(current.left) queue.push(current.left)
        if(current.right) queue.push(current.right)
    }

    return sum;
}

// const a = new Node('a');
// const b = new Node('b');
// const c = new Node('c');
// const d = new Node('d');
// const e = new Node('e');
// const f = new Node('f');
// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f

// console.log(treeIncludes(a, "e"))

const a = new Node(1);
const b = new Node(6);
const c = new Node(0);
const d = new Node(3);
const e = new Node(-6);
const f = new Node(2);
const g = new Node(2);
const h = new Node(2);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
e.left = g;
f.right = h;

console.log(treeSum(a))