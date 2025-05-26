let player = {
  name: "Hero",
  hp: 100,
  maxHp: 100,
  attack: 10,
};

let enemy = {
  name: "Slime",
  hp: 30,
  maxHp: 30,
  attack: 5,
  level: 1,
};

const playerStats = document.getElementById("playerStats");
const enemyStats = document.getElementById("enemyStats");
const log = document.getElementById("log");
const attackBtn = document.getElementById("attackBtn");

function updateStats() {
  playerStats.innerHTML = <strong>${player.name}</strong><br>HP: ${player.hp}/${player.maxHp};
  enemyStats.innerHTML = <strong>${enemy.name}</strong><br>HP: ${enemy.hp}/${enemy.maxHp};
}

function logMessage(message) {
  log.innerHTML = message;
}

function attack() {
  if (player.hp <= 0) return;

  // Player attacks
  enemy.hp -= player.attack;
  logMessage(You hit the ${enemy.name} for ${player.attack} damage!);

  if (enemy.hp <= 0) {
    logMessage(You defeated the ${enemy.name}!);
    setTimeout(nextEnemy, 1000);
    return;
  }

  // Enemy attacks
  setTimeout(() => {
    player.hp -= enemy.attack;
    logMessage(${enemy.name} hits you for ${enemy.attack} damage!);
    updateStats();

    if (player.hp <= 0) {
      logMessage("You were defeated!");
      attackBtn.disabled = true;
    }
  }, 500);

  updateStats();
}

function nextEnemy() {
  enemy.level += 1;
  enemy.name = Slime Lv.${enemy.level};
  enemy.maxHp += 10;
  enemy.attack += 2;
  enemy.hp = enemy.maxHp;

  logMessage(A new enemy appears: ${enemy.name}!);
  updateStats();
}

attackBtn.addEventListener("click", attack);

updateStats();
