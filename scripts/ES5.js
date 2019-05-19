  console.log('ES5');
   function Animals(name) {
       this.name = name;
   }
       Animals.prototype.getName = function () {
           return this.name;
       }

       function Dogs(name) {
           this.name = name;
       }

        Dogs.prototype = Object.create(Animals.prototype);
        Dogs.prototype.constructor = Dogs;

        Dogs.prototype.bark = function(){
        var str = 'Dog '+this.getName()+' is barking';
        console.log(str);
        return str;
    }
    var dog = new Dogs('Aban');

    console.log(dog.getName () === 'Aban'); // true
    console.log(dog.bark () === 'Dog Aban is barking');















