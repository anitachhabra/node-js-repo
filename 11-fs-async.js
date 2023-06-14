const { log } = require('console');
const {readFile, writeFile} = require('fs')

readFile('./content/first.txt', 'utf8',(errStr, res)=>{
if(errStr){
    console.log(`Error String : ${errStr}`);
    return
} 
const first = res

readFile('./content/second.txt', (err, result)=> {
if(err){
    console.log(err);
    return
}
const second = res
writeFile('./content/result-async.txt', 
`${first} + ${second}`,
(err,result)=> {
    if(err){
        return
    }
    console.log(result);
})

})
console.log(`Final result : ${res}`);
})