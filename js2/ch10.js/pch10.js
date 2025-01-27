class math {
    constructor(complex, real) {
       this.complex = complex
       this.real = real
    }
    add(num) {
       this.complex = this.complex + num.complex
       this.real = this.real + num.real
    }
    display() {
       console.log(`${this.complex}+` + `${this.real}i`)
    }
 
    get real(){
       return this._real
    }
    get complex(){
       return this._complex
    }
    set real(newReal){
       this._real = newReal
    }
    set complex(newcomplex){
       this._complex = newcomplex
    }
 
 
 }
 let a = new math(2, 4)
 let b = new math(9, 6)
 a.add(b)
 a.real = 10
 a.complex = 20
 a.display(5)
 
 
 
 class human {
    kind() {
       console.log("kind")
    }
 }
 class student extends human {
    study() {
       console.log("last bancher")
    }
 }
 let c = new student;
 c.kind();
 
 console.log(c instanceof human)
 console.log(c instanceof student)