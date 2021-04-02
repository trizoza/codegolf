const wordGameInitial = (submittedWord, sourcePhrase) => {
  if (typeof submittedWord === "string" && typeof sourcePhrase === "string") {
    if (submittedWord.split(" ").length > 1) {
      return false;
    }
    let sourceLetters = sourcePhrase.split("");
    let counter = 0;
    submittedWord.split("").forEach((letter) => {
      let index = sourceLetters.indexOf(letter);
      if (index < 0) {
        counter += 1;
      } else {
        sourceLetters.splice(index, 1);
      }
    });
    if (!counter) {
      return true;
    } else {
      return false;
    }
  } else {
    throw new TypeError("not strings");
  }
};

const wordGameShorter = (w, p) => {C=(s,d)=>s.split(d);L=C(p,"");c=1;C(w,"").map(l=>{i=L.indexOf(l);i<0?(c++):L.splice(i,1)});return C(w," ").length>1||c>1?!!0:!0}
const wordGameShortest = (w, p) => {L=[...p];c=1;[...w].map(l=>{i=L.indexOf(l);i<0?c++:L.splice(i,1)});return w.includes(" ")||c>1?!!0:!0}
const wordGameShortestWithTrim = (w, p) => {L=[...p];c=1;[...w].map(l=>{i=L.indexOf(l);i<0?c++:L.splice(i,1)});return w.trim().includes(" ")||c>1?!!0:!0}

module.exports = {
  wordGame: wordGameShortest,
};
