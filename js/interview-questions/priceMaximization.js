const b = 10;

const drives = [5, 8, 12];
const keyboards = [40, 50, 60];

function response() {
  let max = 0;
  let keyboard = "";
  let drive = "";
  for (const d of drives) {
    for (const k of keyboards) {
      if (d + k > max && d + k < b) {
        max = d + k;
        keyboard = `${k} Keyboard`;
        drive = `${d} Drive`;
      }
    }
  }

  if (!max) {
    return -1;
  }

  return `Max: ${max}, ${keyboard}, ${drive}`;
}

console.log(response());
