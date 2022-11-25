var ruleGame = document.querySelector(".ruleGame")
var Start = document.querySelector(".Start")
var difficult = document.querySelector(".difficult")

document.querySelector(".list").addEventListener("click" , () => {
    
    document.querySelector(".screenGame").classList.add("listScreen")

    ruleGame.classList.add("hide")
    difficult.classList.add("hide")
    Start.classList.add("hide")
    document.querySelector(".by").classList.add("hide")
    document.querySelector(".difficult").classList.add("hide")
    document.querySelector(".easy").classList.add("hide")
    document.querySelector(".middle").classList.add("hide")
    document.querySelector(".hard").classList.add("hide")

    document.querySelector(".listproperty").classList.remove("listDisplay")

})

document.querySelector(".back").addEventListener("click" , () => {
    
    document.querySelector(".screenGame").classList.add("listExt")

    document.querySelector(".screenGame").classList.remove("listScreen") 

    Start.classList.remove("hide")

    document.querySelector(".listproperty").classList.add("listDisplay")

})

var yesStart = document.querySelector(".yes")
yesStart.addEventListener("click" , () =>{
        Start.classList.add("hide")
        ruleGame.classList.remove("hide")
        document.querySelector(".ruleGameCir").classList.remove("hide")
})

var noStart = document.querySelector(".no")
noStart.addEventListener("click" , () => {
    document.querySelector(".by").classList.remove("hide")
    Start.classList.add("hide")
})


var goRuleGame = document.querySelector(".go")

goRuleGame.addEventListener("click" , () => {
    ruleGame.classList.add("hide")
    document.querySelector(".ruleGameCir").classList.add("hide")
    difficult.classList.remove("hide")
})

/***********Easy***********/

document.querySelector(".easybtn").addEventListener("click" , () => {
    document.querySelector(".easy").classList.remove("hide")
    document.querySelector(".difficult").classList.add("hide")
})

let x = Math.floor(Math.random() * 16)

let jon = 5
console.log(x)
document.querySelector(".easyInput").addEventListener("change" , (e) => {

    
    let num = e.target.value
    
    console.log(num)


    if(num <= 15){
        
        console.log("jon in if: " + jon)

        for(let i = 0 ; i<=5 ; i++){

        document.querySelector(".h2Easy").classList.add("hide")

        if(num == x){
            document.querySelector(".correct").classList.remove("hide")

            document.querySelector(".end").addEventListener("click" , () => {
                document.querySelector(".Start").classList.remove("hide")
                document.querySelector(".correct").classList.add("hide")
                document.querySelector(".easy").classList.add("hide")
            })

            break
        }
        else{
            document.querySelector(".wrong").classList.remove("hide")
            
            document.querySelector("#jon").innerHTML = "❤".repeat(jon)            

            document.querySelector("#next").addEventListener("click" , () => {
                document.querySelector(".wrong").classList.add("hide")
            })
        }
        if(jon == 0){
            document.querySelector(".lose").classList.remove("hide")
            document.querySelector(".wrong").classList.add("hide")
            document.querySelector(".again").addEventListener("click" , () => {
                
                document.querySelector(".Start").classList.remove("hide")
                document.querySelector(".lose").classList.add("hide")
                document.querySelector(".easy").classList.add("hide")
                
            })
            break
        }


        e.target.value = " "
    }

    jon -=1

}else{
    document.querySelector(".h2Easy").classList.remove("hide")
}
e.target.value = " "
})


/***********middle***********/

document.querySelector(".middlebtn").addEventListener("click" , () => {
    document.querySelector(".middle").classList.remove("hide")
    document.querySelector(".difficult").classList.add("hide")
})

let y = Math.floor(Math.random() * 21)

console.log(y)

document.querySelector(".middleInput").addEventListener("change" , (e) => {

    
    let num = e.target.value
    
    console.log(num)


    if(num <= 20){
        
        console.log("jon in if: " + jon)

        for(let i = 0 ; i<=5 ; i++){

        document.querySelector(".h2Middle").classList.add("hide")

        if(num == y){
            document.querySelector(".correct").classList.remove("hide")

            document.querySelector(".end").addEventListener("click" , () => {
                document.querySelector(".Start").classList.remove("hide")
                document.querySelector(".correct").classList.add("hide")
                document.querySelector(".middle").classList.add("hide")
            })

            break
        }
        else{
            document.querySelector(".wrong").classList.remove("hide")
            
            document.querySelector("#jon").innerHTML = "❤".repeat(jon)            

            document.querySelector("#next").addEventListener("click" , () => {
                document.querySelector(".wrong").classList.add("hide")
            })
        }
        if(jon == 0){
            document.querySelector(".lose").classList.remove("hide")
            document.querySelector(".wrong").classList.add("hide")
            document.querySelector(".again").addEventListener("click" , () => {
                
                document.querySelector(".Start").classList.remove("hide")
                document.querySelector(".lose").classList.add("hide")
                document.querySelector(".middle").classList.add("hide")
                
            })
            break
        }

        e.target.value = " "
        
    }

    jon -=1

}else{
    document.querySelector(".h2Middle").classList.remove("hide")
}
e.target.value = " "
})

/********Hard*******/


document.querySelector(".hardbtn").addEventListener("click" , () => {
    document.querySelector(".hard").classList.remove("hide")
    document.querySelector(".difficult").classList.add("hide")
})

let z = Math.floor(Math.random() * 31)

console.log(z)

document.querySelector(".hardInput").addEventListener("change" , (e) => {

    
    let num = e.target.value
    
    console.log(num)


    if(num <= 30){
        
        console.log("jon in if: " + jon)

        for(let i = 0 ; i<=5 ; i++){

        document.querySelector(".h2Hard").classList.add("hide")

        if(num == z){
            document.querySelector(".correct").classList.remove("hide")

            document.querySelector(".end").addEventListener("click" , () => {
                document.querySelector(".Start").classList.remove("hide")
                document.querySelector(".correct").classList.add("hide")
                document.querySelector(".hard").classList.add("hide")
            })

            break
        }
        else{
            document.querySelector(".wrong").classList.remove("hide")
            
            document.querySelector("#jon").innerHTML = "❤".repeat(jon)            

            document.querySelector("#next").addEventListener("click" , () => {
                document.querySelector(".wrong").classList.add("hide")
            })
        }
        if(jon == 0){
            document.querySelector(".lose").classList.remove("hide")
            document.querySelector(".wrong").classList.add("hide")
            document.querySelector(".again").addEventListener("click" , () => {
                
                document.querySelector(".Start").classList.remove("hide")
                document.querySelector(".lose").classList.add("hide")
                document.querySelector(".hard").classList.add("hide")
                
            })
            break
        }


        e.target.value = " "
    }

    jon -=1

}else{
    document.querySelector(".h2Hard").classList.remove("hide")
}
e.target.value = " "
})
