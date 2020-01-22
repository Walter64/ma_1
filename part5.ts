function hello():void{
    console.log("Hello");
}
hello();

function saySomething(x:string):void{
    console.log(x);

}
saySomething("Hello Galaxy");

function charCount(word:string):number{
    //return word.replace(/s/g, '').length;
    return word.length;
}
let myCount = charCount("test 1");
console.log(myCount);

function both_charCount(word:string, spaces?:boolean):number{
    if(spaces){
        return word.replace(/s/g, '').length;
    }
    else{
        return word.length;
    }
}
let bothchar = both_charCount("test 1", false);
let bothchar1 = both_charCount("test 1", true);
let bothchar2 = both_charCount("test 1");

console.log(bothchar);
console.log(bothchar1);
console.log(bothchar2);

