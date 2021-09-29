class Car{
    brandName;
    model;
    weight;
    colors;
    pirce;
    constructor(aName,bModel,cWeight,dColors,ePrice){
        this.brandName=aName;
        this.model=bModel;
        this.weight=cWeight;
        this.colors=dColors;
        this.pirce=ePrice;
    }
    description(){
        let list=this.colors.join();
        return `The ${this.brandName} ${this.model} weighs ${this.weight}kg, it comes in the color(s) ${list} and costs ${this.pirce}Euros.`
    }
    luckyFunction(){
        let d=new Date();
        if (d.getMonth()===8){
            return "You can have 10% off!"
        }
        else{
            return "You have to pay the full price. Sorry."
        }
    }
}
var car1= new Car("Mercedes","A","2000",["grey","black","blue"],29000);
const carDiv=document.getElementById("cars");
let list=carDiv.getElementsByClassName("ex1");
let mes1=list[0].getElementsByClassName("method1")[0];
let mes2=list[0].getElementsByClassName("method2")[0];
mes1.innerHTML=car1.description();
mes2.innerHTML=car1.luckyFunction();
//New child class
class Motorbike extends Car{
    wheelNumber;
    constructor(aName,bModel,cWeight,dColors,ePrice,fWheel){
        super(aName,bModel,cWeight,dColors,ePrice);
        this.wheelNumber=fWheel;
    }
    browserFunction(){
        document.body.innerHTML+=`<div class="motrobikes">
      <h2 class="method1">${this.description()} and it has ${this.wheelNumber} wheels.</h2>
      <h3 class="method2">${this.luckyFunction()}</h3>
    </div>` 
    }
}
var yamaha=new Motorbike("Yamaha","R-6 Race","189",["Icon Blue","Midnight Black"],15.500,2);
console.log(yamaha.wheelNumber);
yamaha.browserFunction();