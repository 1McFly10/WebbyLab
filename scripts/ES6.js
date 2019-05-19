console.log('ES6');
class Animal{
        constructor(name){
            this.name = name;

            this.getName = function(){
                return this.name;
            }
        }
    }

    class Dog extends Animal{
        constructor(name){
            super(name);
            this.bark =function(name){
                var str = 'Dog '+this.getName()+' is barking';
                console.log(str);
                return str;
            }
        }

    }

    var dogg = new Dog ('Aban');

    console.log(dogg.getName () === 'Aban'); // true
    console.log(dogg.bark () === 'Dog Aban is barking');
