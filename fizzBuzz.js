// DAVE 55 CHARS
// const Sumoffactors = (x) => [...Array(x)].reduce((a,b,i)=>(i%3==0||i%5==0)?a+i:a,0)
//
// GREG 47 CHARS
// c = (n)=>[...Array(n)].reduce((a,b,i)=>i%3&&i%5?a:a+i,0)
//
// BEN 77 CHARS
// x=(y)=>{l=Array(y).fill(1);T=0;l.map((a,i)=>(i/3)%1==0||(i/5)%1==0?T+=i:0);return T}
//
// CRAIG 47 CHARS
// m=b=>{t=0;for(i=b;i;){!(--i%3&&i%5)?t+=i:t}return t}
//
// MARCUS 55 CHARS
// name = (n) => {s=0;n-=1;while(n){(n%3==0||n%5==0)?s+=n:0;n--}return s}

const submissions = [
  {
    f: (x) =>
      [...Array(x)].reduce(
        (a, b, i) => (i % 3 == 0 || i % 5 == 0 ? a + i : a),
        0,
      ),
    a: "DAVE",
  },
  {
    f: (n) =>
      [...Array(n)].reduce((a, b, i) => (i % 3 && i % 5 ? a : a + i), 0),
    a: "GREG",
  },
  {
    f: (y) => {
      l = Array(y).fill(1);
      T = 0;
      l.map((a, i) => ((i / 3) % 1 == 0 || (i / 5) % 1 == 0 ? (T += i) : 0));
      return T;
    },
    a: "BEN",
  },
  {
    f: (b) => {
      t = 0;
      for (i = b; i; ) {
        !(--i % 3 && i % 5) ? (t += i) : t;
      }
      return t;
    },
    a: "CRAIG",
  },
  {
    f: (n) => {
      s = 0;
      n = n - 1;
      while (n) {
        n % 3 == 0 || n % 5 == 0 ? (s += n) : 0;
        n--;
      }
      return s;
    },
    a: "MARCUS",
  },
];

const test = (func, author) => {
  const expected10 = 23;
  const expected1000 = 233168;
  const received10 = func(10);
  const received1000 = func(1000);
  console.log("received10", received10);
  console.log("received1000", received1000);
  if (received10 === expected10 && received1000 === expected1000) {
    console.log(`${author} ✅`);
  } else {
    console.log(`${author} ❌`);
  }
};

submissions.forEach((sub) => {
  test(sub.f, sub.a);
});

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// CRAIG 2.0 45 CHARS
// (b) => {t=0;for(i =b;i;){--i%3&&i%5?t:t+=i}return t}
//
// {
//   f: (b) => {
//     t = 0;
//     for (i = b; i; ) {
//       --i % 3 && i % 5 ? t : (t += i);
//     }
//     return t;
//   },
//   a: "CRAIG 2.0",
// },
