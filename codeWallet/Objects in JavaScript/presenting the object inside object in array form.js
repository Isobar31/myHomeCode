var Isaac = {
  name:"Isaac Thomas"
  , age:25
  , appearance:"thick bodied"
};


var friends = {
  friend1:Isaac
  , friend2:{
    name:"Tari-ebi Suobo"
    , age:26
    , appearance:"slim"
  }
};

var friend1 = [Isaac, {name:"Tari-ebi Suobo", age:26, appearance:"slim"}];
// console.log();






//To retrieve the a particular property in a particular object from the objects inside the object.
friend1[0].appearance
"thick bodied" // result.
friend1[1].appearance
"slim" // result.
