function orangesRotting(grid) {
    const rows = [0, 0, 1, -1]
    const cols = [1, -1, 0, 0]
    const vismap = Array.from({length: grid.length}, () => Array.from({length: grid[0].length}))

    function dfs(row, col, level) {
        let min = Infinity
        vismap[row][col] = true
        const cellValue = grid[row][col]
        if (cellValue == 1) {
            for (let i = 0; i < 4; i++) {
                const newPos = [row + rows[i], col + cols[i]]
                if (newPos[0] < 0 || newPos[1] < 0 || newPos[0] >= grid.length || newPos[1] >= grid[0].length || vismap[newPos[0]][newPos[1]]) continue;
                const val = dfs(newPos[0], newPos[1], level + 1)
                min = Math.min(min, val)
            }
        }
        vismap[row][col] = false
        if (cellValue == 2) return level
        return min;
    }
    
    let max = 0;
    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[0].length; c++) {
            if (grid[r][c] == 1) {
                const steps = dfs(r, c, 0);
                if (steps == Infinity) return -1;
                max = Math.max(max, steps);
            }
        }
    };
    return max;
}

