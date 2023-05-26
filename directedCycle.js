function isCyclic(V, adj) {
    // code here
    const dfsMap=[]
    const visMap=[]
    
    function dfs(node){
        dfsMap[node]=true
        visMap[node]=true
        
        for (let adjNode of adj[node]){
            if (!visMap[adjNode]){
                if (dfs(adjNode)) return true;
            }
            else if (dfsMap[adjNode]) return true
        }

        
        dfsMap[node]=false
        return false;
    }
    
    for (let node=0;node<V;node++){
        if (!visMap[node] && dfs(node)) return 1
    }
    
    return 0
}


