//creando un array---->

// const array=["hola","mundo","como","estas"];

// let repo=[array.pop()];
// console.log(array);


//generación del constructor: (construcción de un método array "a mano")
class myArray {
    constructor ( ) {
        this.length = 0;
        this.data = { };
    }
    get(index) {
        return this.data[index];
    }
    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }
}
 