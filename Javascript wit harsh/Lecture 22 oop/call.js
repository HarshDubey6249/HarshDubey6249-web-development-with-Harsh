function setUsername(username){
    this.username=username;
}

function createUser(username,email,password){

    setUsername.call(this,username);

    this.email=email;
    this.password=password
}

let user=new createUser("harsh","ha@gmail.com",1234);

console.log(user);
