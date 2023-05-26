def countDistinctIslands(self, grid):
    m = len(grid)
    n = len(grid[0])
    islands = set()
    rows = [0, 0, 1, -1]
    cols = [1, -1, 0, 0]

    def dfs(row, col, start, components):
        if row < 0 or col < 0 or row >= m or col >= n or grid[row][col] == 0:
            return components
        grid[row][col] = 0
        components.append((start[0] - row, start[1] - col))
        for i in range(4):
            dfs(row + rows[i], col + cols[i], start, components)
        return components

    for row in range(m):
        for col in range(n):
            components = dfs(row, col, [row, col], [])
            if len(components) > 0:
                islands.add(tuple(components))
    return len(islands)
