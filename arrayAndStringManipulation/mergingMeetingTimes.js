// APPROACH
// - initiate new array with first element (meeting) from existing array
// - loop through existing array to test each meeting object
//      - if new array includes any meetings that overlap w/ current meeting (from existing array):
//          - update it in new array by reassigning startTime and/or endTime
// Cases:
// - old startTime = new startTime && old endTime > new endTime
//      - reassign new endTime
// - old startTime > new startTime && old startTime < new endTime && old endTime > new endTime
//      - reassign new endTime
// - old startTime = new endTime
//      - reassign new endTime
// - old startTime < new startTime && old endTime >= new startTime
//      - if old endTime <= new endTime, reassign new startTime
//      - else reassign new startTime and new endTime
// - old startTime >= new startTime && old endTime <= new endTime
//      - continue

function mergeRanges(meetings) {
  let condensedMeetings = [meetings[0]];
  let mergeFound = false;
  for (let i = 1; i < meetings.length; i++) {
    const currentMeeting = meetings[i];
    for (let j = 0; j < condensedMeetings.length; j++) {
      const newMeeting = condensedMeetings[j];
      if (
        currentMeeting.startTime === newMeeting.startTime &&
        currentMeeting.endTime > newMeeting.endTime
      ) {
        newMeeting.endTime = currentMeeting.endTime;
        mergeFound = true;
      } else if (currentMeeting.startTime === newMeeting.endTime) {
        newMeeting.endTime = currentMeeting.endTime;
        mergeFound = true;
      } else if (
        currentMeeting.startTime > newMeeting.startTime &&
        currentMeeting.startTime < newMeeting.endTime &&
        currentMeeting.endTime > newMeeting.endTime
      ) {
        newMeeting.endTime = currentMeeting.endTime;
        mergeFound = true;
      } else if (
        currentMeeting.startTime < newMeeting.startTime &&
        currentMeeting.endTime >= newMeeting.startTime
      ) {
        newMeeting.startTime = currentMeeting.startTime;
        mergeFound = true;
        if (currentMeeting.endTime > newMeeting.endTime) {
          newMeeting.endTime = currentMeeting.endTime;
        }
      } else if (
        currentMeeting.startTime >= newMeeting.startTime &&
        currentMeeting.endTime <= newMeeting.endTime
      ) {
        mergeFound = true;
        continue;
      } else {
        continue;
      }
    }
    if (mergeFound === false) {
      condensedMeetings.push(currentMeeting);
    } else {
      mergeFound = false;
    }
  }

  return condensedMeetings;

  //how to sort by start time
  // meetings.sort((a,b) => {
  //   if (a.startTime < b.startTime) return 1;
  //   else return -1
  // })
}
