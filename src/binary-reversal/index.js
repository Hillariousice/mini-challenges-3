/**
 * Implement the solution in this function
 *
 *  * @param {string} value
 */
function binaryReversal(value) {
    const valueOld =(num)=>{
        let valueNew = Number(num).toString(2);
        let recentValue =`${valueNew}`
        let valuePresent = recentValue.padStart(8, '0').split("").reverse().join('')
        let givingValue = parseInt(valuePresent,2)
    }
    return (givingValue.toString())
}

module.exports = binaryReversal;
console.log(binaryReversal('47'))