function bfsBipartite(V,adj){
    //code here
    const vismap=[]
    function bfs(node,color){
        const queue=[[node,color]]
        while (queue.length){
            const front=queue.shift()
            const root=front[0]
            vismap[root]=front[1]
            const color=front[1]=="green"?"blue":"green"
            for (let adjNode of adj[root]){
                if (!vismap[adjNode]){
                    queue.push([adjNode,color])
                }
                else{
                    if (vismap[adjNode]==vismap[root]) return 0
                }
            }
        }
        return 1
    }
    
    for (let node=0;node<V;node++){
        if (!vismap[node] && !bfs(node,"green")) return 0
    }
    return 1
}

function dfsBipartite(V,adj){
    //code here
    const vismap=Array.from({length:V},item=>false)
    
    function dfs(node,color){
        if (vismap[node]){
            if (vismap[node]!==color) return true
            return false
        }
        vismap[node]=color

        for (let adjNode of adj[node]){
            if (dfs(adjNode,color=="green"?"blue":"green")) return true
        }
        return false;
    }

    for (let node=0;node<V;node++){
        if (!vismap[node] && dfs(node,"green")) return 0;
    }

    return 1;
}