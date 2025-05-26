let player = {
  name: "Hero",
  hp: 100,
  maxHp: 100,
  attack: 10
};

let enemy = {
  name: "Slime",
  hp: 30,
  maxHp: 30,
  attack: 5,
  level: 1
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
  log.innerText = message;
}

function attack() {
  if (player.hp <= 0 || enemy.hp <= 0) return;

  // Player attacks
  enemy.hp -= player.attack;
  enemy.hp = Math.max(0, enemy.hp);
  logMessage(You hit ${enemy.name} for ${player.attack} damage!);
  updateStats();

  if (enemy.hp <= 0) {
    setTimeout(() => {
      logMessage(You defeated ${enemy.name}!);
      setTimeout(spawnNextEnemy, 1000);
    }, 500);
    return;
  }

  // Enemy attacks after short delay
  setTimeout(() => {
    player.hp -= enemy.attack;
    player.hp = Math.max(0, player.hp);
    logMessage(${enemy.name} hits you for ${enemy.attack} damage!);
    updateStats();

    if (player.hp <= 0) {
      logMessage("You were defeated!");
      attackBtn.disabled = true;
    }
  }, 500);
}

function spawnNextEnemy() {
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
logMessage(A wild ${enemy.name} appears!);
