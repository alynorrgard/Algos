// APPROACH
// - need 2 pointers to go through movieLengths
// - loop through movieLengths starting at 0
//      - movie1Length = movieLengths[i]
//      - nested loop through movieLengths starting at 1
//          - movie2Length = movieLengths[j]
//          - if movie1Length + movie2Length = flightLength return true
// - return false
