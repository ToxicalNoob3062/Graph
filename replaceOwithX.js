function fill(n,m,mat){
    //code here
    const rows=[0,0,1,-1]
    const cols=[1,-1,0,0]
    
    function dfs(row,col){
        if (row<0 || col<0 || row>=n || col>=m || mat[row][col]=="I" || mat[row][col]=="X") return;
        mat[row][col]="I";
        for (let i=0;i<4;i++){
            dfs(row+rows[i],col+cols[i])
        }
    }
    
    for (let col=0;col<m;col++){
        if (mat[0][col]=="O") dfs(0,col)
        if (mat[n-1][col]=="O") dfs(n-1,col)
    }
    
    for (let row=0;row<n;row++){
        if (mat[row][0]=="O") dfs(row,0)
        if (mat[row][m-1]=="O") dfs(row,m-1)
    }
    
    for (let row=0;row<n;row++){
        for (let col=0;col<m;col++){
            if (mat[row][col]=="I") mat[row][col]="O"
            else if  (mat[row][col]=="O") mat[row][col]="X"
        }
    }
    
    return mat;
}

console.log(fill(5,4,[
    ["X","X","X","X"],
    ["X","O","X","X"],
    ["X","O","O","X"],
    ["X","O","X","X"],
    ["X","X","O","O"]
]))