const Amthal = require("./index.json")
const randommathal=()=>{
    return Amthal[Math.floor(Math.random()*Amthal.length)]
}
const randomten =()=> {
    let randomlist=new Set();
    

    while(randomlist.size<10){
        let random=Math.floor(Math.random()*Amthal.length)
        if (!randomlist.has(random)){
            randomlist.add(random)
         
    }}
    // let array = [...randomlist]
    // let output=[{

    // }]
    //     for(let i in array){
    //         output.push(Amthal[array[i]])
    //     }
    return [...randomlist].map(index => {
        return Amthal[index]

    })
    
    
    
    
    
}
module.exports={randommathal,randomten}