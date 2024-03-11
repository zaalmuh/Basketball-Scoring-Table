let sumA = {
  totalPoints: 0,
  totalAssists: 0,
  totalRebounds: 0,
  totalSteals: 0,
  totalBlocks: 0,
  display: {
    pts: document.querySelector('#totalPoints'),
    asts: document.querySelector('#totalAssists'),
    rebs: document.querySelector('#totalRebounds'),
    stls: document.querySelector('#totalSteals'),
    blks: document.querySelector('#totalBlocks'),
  },
};

const p1 = {
  points: 0,
  assists: 0,
  rebounds: 0,
  steals: 0,
  blocks: 0,
  display: {
    pts: document.querySelector('#p1pts'),
    asts: document.querySelector('#p1asts'),
    rebs: document.querySelector('#p1rebs'),
    stls: document.querySelector('#p1stls'),
    blks: document.querySelector('#p1blks'),
  },
  button: {
    ft: document.querySelector('#p1ft'),
    twopt: document.querySelector('#p12pt'),
    threept: document.querySelector('#p13pt'),
    ast: document.querySelector('#p1ast'),
    reb: document.querySelector('#p1reb'),
    stl: document.querySelector('#p1stl'),
    blk: document.querySelector('#p1blk'),
  },
};
const p2 = {
  points: 0,
  assists: 0,
  rebounds: 0,
  steals: 0,
  blocks: 0,
  display: {
    pts: document.querySelector('#p2pts'),
    asts: document.querySelector('#p2asts'),
    rebs: document.querySelector('#p2rebs'),
    stls: document.querySelector('#p2stls'),
    blks: document.querySelector('#p2blks'),
  },
  button: {
    ft: document.querySelector('#p2ft'),
    twopt: document.querySelector('#p22pt'),
    threept: document.querySelector('#p23pt'),
    ast: document.querySelector('#p2ast'),
    reb: document.querySelector('#p2reb'),
    stl: document.querySelector('#p2stl'),
    blk: document.querySelector('#p2blk'),
  },
};

const p3 = {
  points: 0,
  assists: 0,
  rebounds: 0,
  steals: 0,
  blocks: 0,
  display: {
    pts: document.querySelector('#p3pts'),
    asts: document.querySelector('#p3asts'),
    rebs: document.querySelector('#p3rebs'),
    stls: document.querySelector('#p3stls'),
    blks: document.querySelector('#p3blks'),
  },
  button: {
    ft: document.querySelector('#p3ft'),
    twopt: document.querySelector('#p32pt'),
    threept: document.querySelector('#p33pt'),
    ast: document.querySelector('#p3ast'),
    reb: document.querySelector('#p3reb'),
    stl: document.querySelector('#p3stl'),
    blk: document.querySelector('#p3blk'),
  },
};

const p4 = {
  points: 0,
  assists: 0,
  rebounds: 0,
  steals: 0,
  blocks: 0,
  display: {
    pts: document.querySelector('#p4pts'),
    asts: document.querySelector('#p4asts'),
    rebs: document.querySelector('#p4rebs'),
    stls: document.querySelector('#p4stls'),
    blks: document.querySelector('#p4blks'),
  },
  button: {
    ft: document.querySelector('#p4ft'),
    twopt: document.querySelector('#p42pt'),
    threept: document.querySelector('#p43pt'),
    ast: document.querySelector('#p4ast'),
    reb: document.querySelector('#p4reb'),
    stl: document.querySelector('#p4stl'),
    blk: document.querySelector('#p4blk'),
  },
};

const p5 = {
  points: 0,
  assists: 0,
  rebounds: 0,
  steals: 0,
  blocks: 0,
  display: {
    pts: document.querySelector('#p5pts'),
    asts: document.querySelector('#p5asts'),
    rebs: document.querySelector('#p5rebs'),
    stls: document.querySelector('#p5stls'),
    blks: document.querySelector('#p5blks'),
  },
  button: {
    ft: document.querySelector('#p5ft'),
    twopt: document.querySelector('#p52pt'),
    threept: document.querySelector('#p53pt'),
    ast: document.querySelector('#p5ast'),
    reb: document.querySelector('#p5reb'),
    stl: document.querySelector('#p5stl'),
    blk: document.querySelector('#p5blk'),
  },
};

function updatePoints(player, many, prop) {
  switch (prop) {
    case 'points':
      player.points += many;
      player.display.pts.textContent = player.points;
      sumA.totalPoints += many;
      sumA.display.pts.textContent = sumA.totalPoints;
      break;
    case 'rebound':
      player.rebounds += many;
      player.display.rebs.textContent = player.rebounds;
      sumA.totalRebounds += many;
      sumA.display.rebs.textContent = sumA.totalRebounds;
      break;
    case 'assist':
      player.assists += many;
      player.display.asts.textContent = player.assists;
      sumA.totalAssists += many;
      sumA.display.asts.textContent = sumA.totalAssists;
      break;
    case 'steal':
      player.steals += many;
      player.display.stls.textContent = player.steals;
      sumA.totalSteals += many;
      sumA.display.stls.textContent = sumA.totalSteals;
      break;
    case 'block':
      player.blocks += many;
      player.display.blks.textContent = player.blocks;
      sumA.totalBlocks += many;
      sumA.display.blks.textContent = sumA.totalBlocks;
      break;
  }
}

p1.button.ft.addEventListener('click', function () {
  updatePoints(p1, 1, 'points');
});
p2.button.ft.addEventListener('click', function () {
  updatePoints(p2, 1, 'points');
});
p3.button.ft.addEventListener('click', function () {
  updatePoints(p3, 1, 'points');
});
p4.button.ft.addEventListener('click', function () {
  updatePoints(p4, 1, 'points');
});
p5.button.ft.addEventListener('click', function () {
  updatePoints(p5, 1, 'points');
});

p1.button.twopt.addEventListener('click', function () {
  updatePoints(p1, 2, 'points');
});
p2.button.twopt.addEventListener('click', function () {
  updatePoints(p2, 2, 'points');
});
p3.button.twopt.addEventListener('click', function () {
  updatePoints(p3, 2, 'points');
});
p4.button.twopt.addEventListener('click', function () {
  updatePoints(p4, 2, 'points');
});
p5.button.twopt.addEventListener('click', function () {
  updatePoints(p5, 2, 'points');
});

p1.button.threept.addEventListener('click', function () {
  updatePoints(p1, 3, 'points');
});
p2.button.threept.addEventListener('click', function () {
  updatePoints(p2, 3, 'points');
});
p3.button.threept.addEventListener('click', function () {
  updatePoints(p3, 3, 'points');
});
p4.button.threept.addEventListener('click', function () {
  updatePoints(p4, 3, 'points');
});
p5.button.threept.addEventListener('click', function () {
  updatePoints(p5, 3, 'points');
});

p1.button.reb.addEventListener('click', function () {
  updatePoints(p1, 1, 'rebound');
});
p2.button.reb.addEventListener('click', function () {
  updatePoints(p2, 1, 'rebound');
});
p3.button.reb.addEventListener('click', function () {
  updatePoints(p3, 1, 'rebound');
});
p4.button.reb.addEventListener('click', function () {
  updatePoints(p4, 1, 'rebound');
});
p5.button.reb.addEventListener('click', function () {
  updatePoints(p5, 1, 'rebound');
});

p1.button.ast.addEventListener('click', function () {
  updatePoints(p1, 1, 'assist');
});
p2.button.ast.addEventListener('click', function () {
  updatePoints(p2, 1, 'assist');
});
p3.button.ast.addEventListener('click', function () {
  updatePoints(p3, 1, 'assist');
});
p4.button.ast.addEventListener('click', function () {
  updatePoints(p4, 1, 'assist');
});
p5.button.ast.addEventListener('click', function () {
  updatePoints(p5, 1, 'assist');
});

p1.button.stl.addEventListener('click', function () {
  updatePoints(p1, 1, 'steal');
});
p2.button.stl.addEventListener('click', function () {
  updatePoints(p2, 1, 'steal');
});
p3.button.stl.addEventListener('click', function () {
  updatePoints(p3, 1, 'steal');
});
p4.button.stl.addEventListener('click', function () {
  updatePoints(p4, 1, 'steal');
});
p5.button.stl.addEventListener('click', function () {
  updatePoints(p5, 1, 'steal');
});

p1.button.blk.addEventListener('click', function () {
  updatePoints(p1, 1, 'block');
});
p2.button.blk.addEventListener('click', function () {
  updatePoints(p2, 1, 'block');
});
p3.button.blk.addEventListener('click', function () {
  updatePoints(p3, 1, 'block');
});
p4.button.blk.addEventListener('click', function () {
  updatePoints(p4, 1, 'block');
});
p5.button.blk.addEventListener('click', function () {
  updatePoints(p5, 1, 'block');
});
