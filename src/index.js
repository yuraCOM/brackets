module.exports = function check(str, bracketsConfig) {
  // your solution
    let p = {}
    bracketsConfig.forEach(item =>{
        for (let i = 0; i < item.length; i++) {
            p[item[0]] = item[1]
        }
    })
    let bufer = []
    bufer.push(str[0])

    for (let i = 1; i < str.length; i++){
        let lastElementBufer = bufer[bufer.length - 1]
        if ( p[lastElementBufer] === str[i]){
            bufer.pop()
        }
        else{
            bufer.push(str[i])
        }
    }//*
    return bufer.length === 0 ? true : false
}
