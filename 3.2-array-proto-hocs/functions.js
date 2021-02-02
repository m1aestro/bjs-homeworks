const weapons = [new Knife(), new Staff(), new Axe(), new StormStaff(), new LongBow(), new Bow()];

function getNames() {
  return weapons.map(weapon => weapon.name);
}

function getCountReliableWeapons(durability) {
  return weapons.filter(weapon => weapon.durability > durability).length;
}

function hasReliableWeapons(durability) {
  return weapons.some(weapon => weapon.durability > durability);
}

function getReliableWeaponsNames(durability) {
  return weapons.filter(weapon => weapon.durability > durability).map(weapon => weapon.name);
}

function getTotalDamage() {
  return weapons.reduce((sumAttack, weapon) => sumAttack + weapon.attack, 0);
}

// function getValuestCountToSumValues(arr, requiredSum) {
//   return arr.reduce((resultArr, currentElem) => {
//       if (resultArr.reduce((sum, currentElem) => sum + currentElem, 0) < requiredSum) {
//           resultArr.push(currentElem);
//       };
//       return resultArr;
//   }, []).length;
// }