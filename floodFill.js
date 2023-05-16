function floodFill(arr,n, m, sr, sc, newColor) {
    // code here
    function bfs(row,col,color){
        const queue=[[row,col]]
        const rows=[0,  0, 1, -1];
        const cols=[1, -1, 0,  0];
        while (queue.length){
            const getPosition=queue.pop()
            arr[getPosition[0]][getPosition[1]]=newColor
            for (let i=0;i<4;i++) {
                const newPos=[getPosition[0]+rows[i],getPosition[1]+cols[i]]
                if (newPos[0]>=n || newPos[1]>=m || newPos[0]<0 || newPos[1]<0) continue
                const newVal=arr[newPos[0]][newPos[1]]
                if (newVal==color && newVal!==newColor){
                    queue.push(newPos)
                }
            }
        }
    }
    bfs(sr,sc,arr[sr][sc])
    return arr
}