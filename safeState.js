//this is very interesting problem as you could easily be sure from this that the dfsMap array while detecting the cycle in directed
//graph contains the cycle elements marked with true and elements which are not in scycle are marked with false.
var eventualSafeNodes = function(adj) {
    const V=adj.length;
    const visMap=[]
    const dfsMap=[]
    
    function dfs(node){
        visMap[node]=true;
        dfsMap[node]=true;

        for (let adjNode of adj[node]){
            if (!visMap[adjNode]){
                if (dfs(adjNode)) return true
            }
            else if (dfsMap[adjNode]) return true
        }

        dfsMap[node]=false
        return false
    }

    for (let node=0;node<V;node++){
        if (!visMap[node]) dfs(node)
    }

    const ans=[]
    dfsMap.forEach((elem,index)=>{
        if (!elem) ans.push(index)
    })
    return ans;
};


//using bfs topo sort reverse graph methodology
var eventualSafeNodes = function(adj) {
    function topoSort(V, adj){
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
    };
    function reverseGraph(graph){
        const V=graph.length;
        const reversed=Array.from({length:V},item=>[])
        for (let node=0;node<V;node++){
            for (let adjNode of graph[node]){
               reversed[adjNode].push(node)
            }
        }
        return reversed
    }
    const reverseAdj=reverseGraph(adj)
    return topoSort(adj.length,reverseAdj).sort((a,b)=>a-b)
};