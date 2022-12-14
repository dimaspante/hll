const m = -0.237035714285714;
const b = 1001.46547619048;
const xmin = 100;
const xmax = 1600;

let calcula = (x) => {
  if (x >= xmin && x <= xmax) document.getElementById('elevacao').innerHTML = Math.round(m * x + b) + ' MIL';
  else document.getElementById('elevacao').innerHTML = '...';
};
