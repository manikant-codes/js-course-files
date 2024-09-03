function getNextCharacterStr(str) {
  const newStr = str.replaceAll(/[a-zA-Z]/g, (matched) => {
    const nextCharCode = matched.charCodeAt() + 1;
    if (nextCharCode === 91 || nextCharCode === 123) {
      return matched;
    }
    const nextChar = String.fromCharCode(nextCharCode);
    return nextChar;
  });

  console.log(newStr);
}

getNextCharacterStr("toz");
