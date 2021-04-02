let mountain = (height) => {
  let output = "";
  for (let i = height; i > 0; i--) {
    for (let j = height * 2; j > 0; j--) {
      if (j - 1 === height * 2 - i) {
        output += `/`;
      } else if (j === i) {
        output += `\\`;
      } else if (j === 1) {
        output += `\n`;
      } else {
        output += ` `;
      }
    }
  }
  console.log("output", output);
  return output;
};

// mountain=(h,o=``)=>{for(i=h;i>0;i--){for(j=h*2;j>0;j--){o+=j-1==h*2-i?`/`:j==i?`\\`:j==1?`\n`:` `}}return o}

let res = mountain(4);
console.log("res", res);
