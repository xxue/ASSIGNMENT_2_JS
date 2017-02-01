class Hash {
  constructor (object){this.object = object;}

  keys(){return Object.keys(this.object);}

  values(){return Object.values(this.object);}

  isEmpty(){return this.keys().length === 0;}

  merge(i){return new Hash(Object.assign({},this.object, i.object));}

  hasKey(string){return this.object.hasOwnProperty(string);}
    //   for (let i of this.keys()) {
    //     if (string === i){return true;}
    //   }return false;
    // }
    invert(){
      var final = {};
      for (let i in this.object){
        final[this.object[i].toString()] = i;
      }
      return final;
    }
  inspect(){
      var final = "{";
      var last = this.keys().pop();
      for (let i in this.object){
        if (i === last){
          final += `'${i}' => ${this.object[i]}}`;
        } else {
        final += `'${i}' => ${this.object[i]}, `;
      }
    }
    return final;
  }
}

let emptyHash = new Hash({});
let hash = new Hash({a: 1, b: 2, c: 3});
hash.isEmpty() // returns false
let merged = hash.merge(new Hash({bob: 'yo', jane: 'ya'}));
// returns Hash {a: 1, b: 2, c: 3, bob: 'yo', jane: 'ya'}, should not mutate original
hash.hasKey('a') // returns true
// Values will have to made into strings
hash.invert() // returns Hash {'1':'a', '2':'b', '3':'c'}
hash.inspect() // returns "{'a' => 1, 'b' => 2, 'c' => 3}"
hash.values() // returns [1, 2, 3]
