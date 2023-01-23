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

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');
a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f

console.log(treeIncludes(a, "e"))