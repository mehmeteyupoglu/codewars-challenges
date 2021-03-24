/*
* @function that returns the number of valleys a hiker entered
* @param {number} of steps in a hike
* @param {string} that represents up and downs in a hike
* @return {number} of the valleys a hiker entered
*/


function countingValleys(steps, path) {
    
  
  let result = 0
  let valleyCount = 0
  
  path = path.split('')
  
  const newArr = path.map(item => {
    
    if(item === 'U'){
    
      result += 1
      item = result
      return item 
    
    } else if (item === 'D'){
    
      result -= 1
      item = result
      return item 
      
    }
    
  })
  
  for(let i = 0; i< steps; i++){
    
    if(newArr[i] === 0 && newArr[i + 1] === -1){
    
      valleyCount += 1
    
    } else if (i === 0 && newArr[0] === -1){
      valleyCount += 1
    }
  }
  
  return valleyCount
}