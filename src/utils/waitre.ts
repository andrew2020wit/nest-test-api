export function waiter(delay: string) {
  let d = +delay;
  if (!d) {
    d = 0;
  }
  if (d > 3000) {
    d = 3000;
  }
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve('done!'), d);
  });
}
