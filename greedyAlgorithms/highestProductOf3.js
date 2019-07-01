// APPROACH
// - initialize highest3 as an array with the first number from arrayOfInts
//      - if arrayOfInts[1] < highest3[0], unshift it onto highest3
//      - else push it onto highest3
//      - if arrayOfInts[2] < highest3[0], unshift it onto highest3
//      - else if arrayOfInts[2] < highest3[1], insert it into highest3 by reassignment
//      - else push it onto highest3
// - loop over arrayOfInts, starting at index 3
//      - if number at current index > highest3[2], push it onto highest3 and shift off first number
//      - else if currentInt > highest3[1], reassign highest3[1] and highest3[0]
//      - else if currentInt > highest3[0], reassign highest3[0]
//      - else continue
// - return highest3[0] * highest3[1] * highest3[2]
