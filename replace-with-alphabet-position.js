/**
 * Replaces letters with their positions in the alphabet, starts with 1
 * @param {string} text 
 * @returns {string} positions
 */

function alphabetPosition(text) {
  let a='abcdefghijklmnopqrstuvwxyz'
  let resultingArray = []
  let textArr = text.toLowerCase().split(/[^A-Za-z]/).join("").split("")
  
  textArr.map(item => resultingArray.push(1+ a.indexOf(item)))
  
  
  return resultingArray.join(" ");
}