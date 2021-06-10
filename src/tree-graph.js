/*
Undirected - Edges go both Directions
Not Weighted - Does not have extra properties
No Cycles - Does not reference itself
*/
const airports = 'PHX,BKK,OKC,JFK,LAX,MEX,EZE,HEL,LOS,LAP,LIM'.split(',')
const routes = [
    ['PHX', 'LAX'],
    ['PHX', 'JFK'],
    ['JFK', 'OKC'],
    ['JFK', 'HEL'],
    ['JFK', 'LOS'],
    ['MEX', 'LAX'],
    ['MEX', 'BKK'],
    ['MEX', 'LIM'],
    ['MEX', 'EZE'],
    ['LIM', 'BKK'],    
]

const adjacencyList = new Map()

function addNode(airport) {
    adjacencyList.set(airport, [])
}

function addEdge(origin, destination) {
    adjacencyList.get(origin).push(destination)
    adjacencyList.get(destination).push(origin)
}

airports.forEach(addNode)
routes.forEach(route => addEdge(...route))

// breadthFirstSearch => All possible routes to determine which one is most efficient
function breadthFirstSearch(startNode, endNode) {
    const visited = new Set()
    const queue = [startNode]
    let steps = 1
    while (queue.length > 0) {
        const airport = queue.shift()
        const destinations = adjacencyList.get(airport)
        for (const destination of destinations) {
            if (destination === endNode) {
                console.log(`BFS Found ${endNode} in ${steps} step(s)!`)
            }
            if (!visited.has(destination)) {
                steps++
                visited.add(destination)
                queue.push(destination)
                console.log(destination)
            }
        }
    }
}
breadthFirstSearch('PHX', 'BKK')

// depthFirstSearch => Find Route where we don't care about shortest or best but as quickly as possible
function depthFirstSearch(startNode, endNode, visited = new Set(), steps = 1) {
    visited.add(startNode)
    const destinations = adjacencyList.get(startNode)
    for (const destination of destinations) {
        if (destination === endNode) {
            console.log(`DFS Found ${endNode} in ${steps} step(s)!`)
            return
        }
        if (!visited.has(destination)) {
            console.log(destination)
            depthFirstSearch(destination, endNode, visited, ++steps)
        }
    }
}

depthFirstSearch('PHX', 'BKK')