class Form {
    constructor(){
     this.inputname=createInput("NAME ")
     this.inputgender=createInput("GENDER ")
     this.Button=createButton("Play")
    }

    hide(){
        this.inputname.hide();
        this.inputgender.hide();
        this.Button.hide();
    }

    display(){
        this.inputname.position(200,200)
        this.inputgender.position(220,250)
        this.Button.position(260,280)
    }

    
}