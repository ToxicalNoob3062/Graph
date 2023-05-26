class Solution
{
  findRelation(w1,w2,graph){
      for (let i=0;i<w1.length;i++){
          const char1=w1[i]
          const char2=w2[i]
          if (char1!==char2){
             if (!graph[char1]) graph[char1]=[]
             graph[char1].push(char2)
             return
          }
      }
  }
  findOrder(dict,N,K){
      //code here
      let prev=dict[0]
      const graph={};
      for (let i=1;i<dict.length;i++){
          const word=dict[i]
          this.findRelation(prev,word,graph);
          prev=word;
      };
      
      const indegree={}
      for (let node in graph){
          for (let adjNode of graph[node]){
              if (indegree[adjNode]) indegree[adjNode]+=1
              else indegree[adjNode]=1
          }
      };
      
      const queue=[]
      for (let node in graph){
          if (!indegree[node]) queue.push(node)
      }
      
      const topo=[]
      while (queue.length){
          const node=queue.shift()
          topo.push(node)
          if (graph[node]){
            for (let adjNode of graph[node]){
              indegree[adjNode]-=1
              if (!indegree[adjNode]) queue.push(adjNode);
            }
          }
      }
      return topo
  }
}