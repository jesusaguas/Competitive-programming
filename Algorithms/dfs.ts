var graph1: any = {
    'A' : ['B','C'],
    'B' : ['D', 'E', 'F'],
    'C' : ['G'],
    'D' : [],
    'E' : [],
    'F' : ['H'],
    'G' : ['I'],
    'H' : [],
    'I' : []
}

function dfs(graph, node){
    let visited = new Set();
    let queue = [];

    visited.add(node);
    queue.push(node);

    while (queue.length>0){
        let s = queue.pop()
        console.log(s)

        for (let n of graph[s]){
            if(!visited.has(n)){
                visited.add(n)
                queue.push(n)
            }
        }
    }
}

bfs(graph1,'A')