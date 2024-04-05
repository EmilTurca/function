let roomMap = [
    [1,1,0,0,0,0,0,0,1,1],
    [1,1,0,0,0,0,0,0,1,1],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,1,1,1,1,0,0,0],
    [8,0,0,1,1,1,1,0,0,0]
]
let path = [
    [4,0,3,0],
    [3,0,2,0],
    [2,0,2,1],
    [2,1,2,2],
    [2,2,1,2],
    [1,2,0,2],
    [0,3,0,4],
    [0,5,0,6],
    [0,7,1,7],
    [2,7,2,8],
    [2,9]
]
for (let step = 0; step < path.length; step++) {
    roomMap[path[step][0]][path[step][1]] = 0
    roomMap[path[step][2]][path[step][3]] = 8
}