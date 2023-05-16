function numIslands(grid) {
    function bfs(row,col){
        const queue=[[row,col]]
        const rows=[-1,-1,-1, 0, 0, 1, 1, 1];
        const cols=[-1, 0, 1,-1, 1,-1, 0, 1];
        while (queue.length){
            const getPosition=queue.shift()
            grid[getPosition[0]][getPosition[1]]=0
            
            for (let i=0;i<8;i++) {
                const newPos=[getPosition[0]+rows[i],getPosition[1]+cols[i]]
                if (newPos[0]>=grid.length || newPos[1]>=grid[0].length || newPos[0]<0 || newPos[1]<0) continue
                if (grid[newPos[0]][newPos[1]]==1){
                    queue.push(newPos)
                }
            }
        }
    }
    let count=0
    for (let row=0;row<grid.length;row++){
        for (let col=0;col<grid[0].length;col++){
            const cell=grid[row][col];
            if (cell==1){
                count++
                bfs(row,col)
            }
        }
    }
    return count
}

console.log(numIslands([[0,1,1,1,0,0,0],[0,0,1,1,0,1,0]]))

