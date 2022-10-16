const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
 function calculateHanoi(disksNumber, turnsSpeed) {
   function countTurns(dN) {
    if (dN == 1) {
      return 1;
    }
    else {
      return 1 + 2 * countTurns(dN - 1);
    }
  }

  let obj = {}
  obj.turns = countTurns(disksNumber);
  obj.seconds = Math.floor(obj.turns * 3600 / turnsSpeed);
  return obj;
}


module.exports = {
  calculateHanoi
};
