/**
 * @description min max 之间随机整数
 * @param {Number} min 
 * @param {Number} max 
 * @returns 
 */
export function random(min, max) {
    return min + Math.floor(Math.random()*(max + 1 - min));
}