let arr = ['Dhananjay', 7, 33, false, null];
// for (let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }

class Main {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }
    add() {
        return this.a + this.b;
    }
}

let names = new Main(8, 33)
console.log(names.add())
// console.log(typeof(Main)) //Function

arr.forEach(element => {
    console.log(element)
});