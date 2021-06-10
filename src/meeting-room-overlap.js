/**
Given an array of meeting time intervals where intervals[i] = [starti, endi], return the minimum number of conference rooms required.
Input: intervals = [[0,30],[5,10],[15,20]]
Output: 2
**/
class MeetingRoomOverlap {
    constructor(intervals) {
        this.intervals = intervals
    }
    minRooms() {
        let start = [], end = []
        for(let i = 0; i < this.intervals.length; i++) {
            start[i] = this.intervals[i][0]
            end[i] = this.intervals[i][1]
        }
        start.sort((a, b) => a - b)
        end.sort((a, b) => a - b)
        let rooms = 0, endItr = 0
        for(let i = 0; i < start.length; i++) {
            if(start[i] < end[endItr]) rooms++
            else endItr++
        }
        return rooms
    }
}
let intervals = [[0,30],[5,10],[15,20],[9,16]]
let meeting = new MeetingRoomOverlap(intervals)
let rooms = meeting.minRooms()
console.log(rooms)
