// TASK 1
class Human  {
    constructor(fname,surname,age,gender,nationality){
    this.fname=fname;
    this.surname=surname;
    this.age=age;
    this.gender=gender;
    this.nationality=nationality;
    }
};
let result1 = getFullName(`Person name is ${fname}.Surname is ${surname}`);
console.log(result1);
let result2 = getBirthYear(new Date().getFullYear());
console.log(result2);

class User extends Human{
    constructor(fname,surname,age,gender,nationality,username,email){
        super(fname,surname,age,gender,nationality)
        this.username=username;
        this.email=email
    }

};

if (username="eli") {
    console.log(isAdmin(username));
} else {
    console.log("Invalid Username");
}
if (email="eli123@gamil.com") {
    console.log(isLogged(email));
} else {
    console.log("Invalid Email");
}




let user1= new User("eli","eliyev",20,"male","Azerbaijanian","eli123@gamil.com")
let user2= new User("doja","cat",21,"female","Azerbaijanian","eli123@gamil.com")
let user3= new User("jeysen","zurkinborq",22,"male","Azerbaijanian","eli123@gamil.com")
let user4= new User("emily","william",23,"female","Azerbaijanian","eli123@gamil.com")
let user5= new User("elayla","northern",24,"female","Azerbaijanian","eli123@gamil.com")
let user6= new User("eli","nashwioll",25,"male","Azerbaijanian","eli123@gamil.com")
let user7= new User("djonson","cat",26,"male","Azerbaijanian","eli123@gamil.com")
let user8= new User("nari","rodrigo",27,"female","Azerbaijanian","eli123@gamil.com")
let user9= new User("eli","murfhin",28,"male","Azerbaijanian","eli123@gamil.com")
let user10= new User("palma","salton",29,"female","Azerbaijanian","eli123@gamil.com")


console.log(User.sort((fname)=>User.fname===''))
console.log(User.filter((getBirthYear)=>User.age===''));