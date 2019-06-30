// APPROACH
// - need 2 pointers to go through movieLengths
// - loop through movieLengths starting at 0
//      - movie1Length = movieLengths[i]
//      - nested loop through movieLengths starting at 1
//          - movie2Length = movieLengths[j]
//          - if movie1Length + movie2Length = flightLength return true
// - return false

function canTwoMoviesFillFlight(movieLengths, flightLength) {
  for (let i = 0; i < movieLengths.length - 1; i++) {
    const movie1Length = movieLengths[i];

    for (let j = 1; j < movieLengths.length; j++) {
      const movie2Length = movieLengths[j];

      if (movie1Length + movie2Length === flightLength) {
        return true;
      }
    }
  }
  return false;
}
