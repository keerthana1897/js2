class User {
    constructor(name, age,email) {
      this.name = name;
      this.age = age;
      this.email = email;
      this.courses = [];
      this.luCoins = 0;
    }
    login(){
        console.log(`${this.name} has logged in`);
        return this;
    }
    logout(){
        console.log(`${this.name} has logged out`);
        return this;
    }

}

class Moderator extends User{
    constructor(name,age,email){
        
        super(name,age,email);
    }
    addCoins(){
        this.luCoins++;
        console.log(`${this.name} has ${this.luCoins} coins`);
        return this;
    }
    removecoins(){
        this.luCoins--;
        console.log(`${this.name} has ${this.luCoins} coins`);
        return this;
    }

}

class Admin extends Moderator{
   addCourse(user,course){
       user.courses.push(course);
       console.log(user);
   }
   removeCourse(user,course){
    user.courses.pop(course);
    console.log(user);
}
}


let user1 = new User('karthik',22,'karthik@gmail.com')
let user2 = new User('raja',24,'kraja@gmai.com')
let mod = new Moderator('hemanth',22,'hemanth@gmail.com','Moderator');
let admin = new Admin('steve',23,'steve@gmail.com');
let users = [user1,user2,mod,admin];

users.forEach(element => {
    console.log(element);
});

admin.addCourse(user1,'Javascript');
admin.addCourse(user1,'Python');
admin.removeCourse(user1,'Python');

 mod.login().addCoins().addCoins().removecoins().logout();
