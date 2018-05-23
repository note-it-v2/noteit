chrome.runtime.onMessage.addListener((msg) => {
  console.log('message received!');
  // If the received message has the expected format...
  if (msg.type === 'notes_to_highlight') {
      // use the following once requests return arrays:
      // msg.data.forEach(e => {
      //   highlightNotes(e);
      // });
      // but for the test case, use this:
      highlightNotes(msg.data)
  }
});

function highlightNotes(DBobjs {
  let start = 3, length = 140;
  // once the selector arrays are properly constructed, use this: 
  elements.forEach((e, i) => {
    startIndex = i === 1?
    element = $('html body p:eq(2)');
    element.markRanges([{start: 5, length: 100000}]);
  secondElement = $('html body p:eq(3)');
  secondElement.markRanges([{start: 0, length: 40}]);
}