function numProvinces(V, adj) {
    const vismap = []
    let count = 0;

    function dfs(node, level = 1) {
        vismap[node] = true
        console.log(level)
        let count=0
        for (let j = 0; j < V; j++) {
            count++
            const actualNode = j + 1
            const checkValue = adj[node - 1][j]
            if (checkValue && actualNode !== node && !vismap[actualNode]) {
                dfs(actualNode, level + 1)
            }
        }
        console.log("_____loop_count______")
        console.log(count)
    }

    for (let node = 1; node <= V; node++) {
        if (!vismap[node]) {
            count++
            console.log("____dfs_nested_levels___")
            dfs(node)
        }
    }
    return count
}
numProvinces(7, [
    [1, 1, 0, 0, 0, 0, 0],
    [0, 1, 1, 0, 0, 0, 0],
    [0, 0, 1, 1, 0, 0, 0],
    [0, 0, 0, 1, 1, 0, 0],
    [0, 0, 0, 0, 1, 1, 0],
    [0, 0, 0, 0, 0, 1, 1],
    [0, 0, 0, 0, 0, 0, 1],
])