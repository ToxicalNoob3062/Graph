function topoSort(V, adj){
    const vismap=[]
    const stack=[]
    function dfs(node){
        vismap[node]=true;
        for (let adjNode of adj[node]){
            if (!vismap[adjNode]) dfs(adjNode)
        }
        stack.push(node)
    }
    
    for (let node=0;node<V;node++){
        if (!vismap[node]) dfs(node)
    }
    stack.reverse();
    return stack;
}


//kahns algorithm.
function topoSort(V, adj)
{
    const indegree=Array.from({length:V},item=>0)
    const topo=[]
    const queue=[]
    
    for (let node=0;node<V;node++){
        for (let adjNode of adj[node]){
            indegree[adjNode]++
        }
    }
    
    for (let node=0;node<V;node++){
        if (indegree[node]==0) queue.push(node)
    }
    
    while (queue.length){
        const elem=queue.shift()
        topo.push(elem)
        for (let adjElem of adj[elem]){
            indegree[adjElem]--
            if (indegree[adjElem]==0) queue.push(adjElem)
        }
    }
    return topo
}