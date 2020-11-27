//Object contructor
function User(firstName, lastName, avartar){
    this.firstName = firstName;
    this.lastName = lastName;
    this.avartar = avartar;

    this.getName = function(){
        return `${this.firstName} ${this.lastName}`
    }
}
 User.prototype.className = 'Tam';
 User.prototype.getClassName = function(){
     return this.className;
 }


var author = new User('Sơn', 'Đặng', 'Avartar 1');
var user = new User('Vũ','Nguyễn', 'Avartar 2');

author.title = 'abc';
user.comment = 'xyz';


console.log(author);
console.log(user); 