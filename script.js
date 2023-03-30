'use strict'

class PrintMachine{
    constructor(fontSize , color , fontFamily){
       this.fontSize = fontSize
       this.color = color
       this.fontFamily = fontFamily
    }
    
    print(myText){
        document.body.style.color = this.color
        document.body.style.fontFamily = this.fontFamily
        document.body.style.fontSize = this.fontSize
        document.write(myText)
        
    }
}

let fontFamily = 'Courier New , Courier, monospace ' 
let color = 'red'
let fontSize = '1.5em'

let myText = '  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis in magnam eveniet fugit mollitia repellat dolor porro odit accusamus, illo possimus ullam dignissimos ad soluta perspiciatis fuga tempora. Iure at asperiores dignissimos! Alias non distinctio ab laudantium quas, animi voluptatum est illum obcaecati eum! Recusandae, ratione natus placeat officia tempore, perferendis quia itaque minus accusantium fugiat ipsum impedit excepturi rerum minima eum cum at sunt. Quidem omnis cum ex laudantium velit architecto? Consequatur, cum sed omnis vel numquam consectetur praesentium laboriosam corporis dolorum architecto, libero a quae provident eaque itaque ab assumenda quas quidem velit quo veniam aliquid tempora. Itaque.'



let myPrintMachine = new PrintMachine(fontSize, color, fontFamily);

myPrintMachine.print(myText)