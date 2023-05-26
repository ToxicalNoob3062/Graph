function isCycle(V, adj) {
    const vismap=Array.from({length:V},item=>false)
    const bfs=(head)=>{
        const queue=[head]
        while (queue.length){
            const front=queue.pop()
            vismap[front[0]]=true
            for (let adjNode of adj[front[0]]){
                if (!vismap[adjNode]){
                   queue.push([adjNode,front[0]])
                }
                else if (front[1]!=adjNode) return 1
            }
        }
        return 0;
    }
    for (let node=0;node<V;node++){
        if (!vismap[node]){
            if (bfs([node,-1])) return 1
        }
    }
    return 0
}

function isCycle(V,adj){
    const vismap=Array.from({length:V},item=>false)
    const dfs = (head,prev)=>{
        vismap[head]=true
        for (let adjNode of adj[head]){
            if (!vismap[adjNode]){
               if (dfs(adjNode,head)) return 1
            }
            else if (prev!=adjNode) return 1
        }
        return 0
    }
    for (let node=0;node<V;node++){
        if (!vismap[node]){
            if (dfs(node,-1)) return 1
        }
    }
    return 0
}

