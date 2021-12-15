// superbowlWin = (record) => {
//     const isWin = record.find( record => record.isWin === "W")
// return !!isWin ? isWin.year : undefined
// }
function superbowlWin(record){
    let isWin = record.find(record => record.result === "W")
    if(isWin){
    return isWin.year
    }else {
        return 
    }
}
