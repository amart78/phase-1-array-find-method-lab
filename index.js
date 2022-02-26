// code your solution here
function superbowlWin(record){
   const wins = record.find(element => element.result === 'W')
    return wins ? wins.year : undefined
}


