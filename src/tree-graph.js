/*
    Undirected - Edges go both Directions
    Not Weighted - Does not have extra properties
    No Cycles - Does not reference itself
*/
class Routes {
    constructor() {
        this.routes = new Map()
    }
    addNode(airport) {
        this.routes.set(airport, [])
    }
    addUndirectedEdge(origin, destination) {
        if (!this.routes.has(origin) || !this.routes.has(destination)) return
            this.routes.get(origin).push(destination)
            this.routes.get(destination).push(origin)
    }
    findLeastHopsRoute(origin, destination) {
        // BFS
        const visited = new Set(), q = [origin]
        let steps = 1
        while (q.length > 0) {
            const airport = q.pop(), routes = this.routes.get(airport)
            for (const route of routes) {
                if (route === destination) {
                    console.log(`BFS Found ${route} in ${steps} step(s)!`)
                }
                if (!visited.has(route)) {
                    steps++
                    visited.add(route)
                    q.push(route)
                    console.log(route)
                }
            }
        }

    }
    findQuickestRoute(origin, destination, visited = new Set(), steps = 1) {
        // DFS
        const q = [origin]
        visited.add(origin)
        while (q.length > 0) {
            const airport = q.pop(), routes = this.routes.get(airport)
            for (const route of routes) {
                if (route === destination) {
                    console.log(`DFS Found ${route} in ${steps} step(s)!`)
                }
                if (!visited.has(route)) {
                    console.log(route)
                    this.findQuickestRoute(route, destination, visited, ++steps)
                }
            }
        }
    }
}

const airports = ['PHX','BKK','OKC','JFK','LAX','MEX','EZE','HEL','LOS','LAP','LIM']
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

const rte = new Routes()
airports.forEach(airport => rte.addNode(airport))
routes.forEach(route => rte.addUndirectedEdge(...route))
rte.findLeastHopsRoute('PHX', 'BKK')
rte.findQuickestRoute('PHX', 'BKK')
