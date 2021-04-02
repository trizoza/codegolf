// let calc = (
//     a,
//     b,
//     c = 0,
//     d = 86400000,
//     P = (x) => Date.parse(x),
//     D = (x) => x.getDate(),
//     M = (x) => x.getMonth(),
//     Y = (x) => x.getDay(),
//     N = (x) => new Date(x),
//     R = (x) => x,
//     i = P(a) + d
//   ) => {while(i<P(b)){l=N(i);k=D(l);m=M(l);n=Y(l);c+=(k==25&&m==11)||(k==1&&!m)||!n||n==6?0:1;i+=d};return c};

let calc = (
  a,
  b,
  c = 0,
  d = 86400000,
  P = (x) => Date.parse(x),
  D = (x) => x.getDate(),
  M = (x) => x.getMonth(),
  Y = (x) => x.getDay(),
  N = (x) => new Date(x),
  R = (x) => x,
  i = P(a) + d,
) => {
  while (i < P(b)) {
    l = N(i);
    k = D(l);
    m = M(l);
    n = Y(l);
    c += (k == 25 && m == 11) || (k == 1 && !m) || !n || n == 6 ? 0 : 1;
    i += d;
  }
  return c;
};

let res = calc("2020-12-30", "2022-01-02");
console.log("res", res);
