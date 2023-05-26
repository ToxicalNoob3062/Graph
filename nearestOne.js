//utilities
import Queue from "./utilities/queue.js";

//bad dfs approach !! so choose wisely!!
//considering each cell! take the path which gives you minimum result for each cell!
function nearest(grid) {
    const vismap = Array.from({
            length: grid.length
        }, () =>
        Array.from({
            length: grid[0].length
        }, () => false)
    );
    const rows = [0, 0, 1, -1, 1, 1, -1, -1];
    const cols = [1, -1, 0, 0, 1, -1, -1, 1];

    function dfs(row, col, start) {
        const cellValue = grid[row][col];
        let minDist = Infinity;
        if (!cellValue) {
            grid[row][col] = -1;
            for (let i = 0; i < 8; i++) {
                const nextPos = [row + rows[i], col + cols[i]];
                if (
                    nextPos[0] < 0 ||
                    nextPos[1] < 0 ||
                    nextPos[0] >= grid.length ||
                    nextPos[1] >= grid[0].length ||
                    grid[nextPos[0]][nextPos[1]] == -1
                ) continue;
                const dist = dfs(nextPos[0], nextPos[1], start);
                minDist = Math.min(minDist, dist);
            }
            grid[row][col] = 0;
        } else {
            minDist = Math.abs(start[0] - row) + Math.abs(start[1] - col);
        }
        return minDist;
    }


    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            vismap[row][col] = dfs(row, col, [row, col]);
        }
    }
    return vismap;
}

//dfs approach 2 //considering 1 valued cell! //worst complexity 
//travel to every 0 in grid from the perspective of every 1 and only take the minimum distance which wins from all 1s perspective! 
//lazy bfs() approach
function nearest2(grid) {
    const rows = [0, 0, 1, -1]
    const cols = [1, -1, 0, 0]
    const vismap = Array.from({length: grid.length}, () => Array.from({length: grid[0].length},item=>Infinity))

    function dfs(row, col, level) {
        vismap[row][col] = Math.min(vismap[row][col],level)
        grid[row][col] = -1
        for (let i = 0; i < 4; i++) {
            const newPos = [row + rows[i], col + cols[i]]
            if (newPos[0] < 0 || newPos[1] < 0 || newPos[0] >= grid.length || newPos[1] >= grid[0].length || grid[newPos[0]][newPos[1]]!=0) continue;
            dfs(newPos[0], newPos[1], level + 1)
        }
        grid[row][col] = 0;
    }

    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[0].length; c++) {
            if (grid[r][c] == 1) {
                dfs(r, c, 0);
            }
        }
    };
    return vismap
}

//bfs approach
function nearest3(grid){
    const m=grid.length;
    const n=grid[0].length;
    const rows=[0,0,1,-1];
    const cols=[1,-1,0,0];
    const answer=Array.from({length:m},item=>[])
    let queue=new Queue();
    for (let i=0; i<m; i++){
        for (let j=0; j<n;j++){
            if (grid[i][j]==1){
               queue.push([i,j,0])
               answer[i][j]=0
            }
        }
    } 
    while (queue.length){
        const front=queue.shift()
        for (let i=0;i<4;i++){
            const next=[front[0]+rows[i],front[1]+cols[i],front[2]+1]
            if (next[0]<0 || next[1]<0 || next[0]>=m || next[1]>=n || answer[next[0]][next[1]]!=undefined) continue;
            answer[next[0]][next[1]]=next[2]
            queue.push(next)
        }
    }
    return answer
}