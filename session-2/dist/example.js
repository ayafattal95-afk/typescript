"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ### Why class?
class User {
    userId;
    userName;
    role;
    constructor(userId, userName, role) {
        this.userId = userId;
        this.userName = userName;
        this.role = role || 'user';
    }
    getInfo() {
        console.log(`userId: ${this.userId} this is ${this.userName} and he is an/a ${this.role}`);
    }
}
const user1 = new User(1, 'ka3bora');
const user2 = new User(2, 'rabe3');
// user1.getInfo();
// user2.getInfo();
// ### encapsulation -> private >> not accessible out-of-scope class
class BankAccount {
    accountNumber;
    balance = 0;
    deduction = 500;
    constructor(accountNumber) {
        this.accountNumber = accountNumber;
    }
    // setter method
    deposit(amount) {
        this.balance += amount;
    }
    withdraw(amount) {
        this.balance -= amount;
    }
    // getter method
    getBalance() {
        return this.balance - this.deduction;
    }
}
const account = new BankAccount('ACC-123');
account.deposit(1000);
const balance = account.getBalance();
// console.log(balance);
// ### Inherit behavior from the base class
class Employee {
    name;
    constructor(name) {
        this.name = name;
    }
    work() {
        console.log(`employee ${this.name} is working`);
    }
}
class Manger extends Employee {
}
class Developer extends Employee {
    lang;
    constructor(name, lang) {
        super(name); // this.name = name;
        this.lang = lang;
    }
    work() {
        console.log(`developer ${this.name} is working`);
    }
    writeCode() {
        console.log(`developer ${this.name} is writing code in ${this.lang}`);
    }
}
const developer = new Developer("ka3bora", "javascript");
// console.log(developer.lang);
// developer.work();
// developer.writeCode();
// ### Overriding VS Overloading
// >>>- overriding: A child class provides a new implementation of a method inherited from its parent.
// >>>- overloading: You define multiple ways to call a method using different parameter or counts, with compatible implementation logic.
class Calculator {
    add(a, b) {
        if (typeof a === "number" && typeof b === "number") {
            return a + b; // summation
        }
        if (typeof a === "string" && typeof b === "string") {
            return a + b; // concatenation
        }
        throw new Error("Invalid arguments");
    }
}
const calculator = new Calculator();
class EmailNotification {
    send(message) {
        console.log('sending email with message:' + message);
    }
}
class SmsNotificationService {
    send(message) {
        console.log('sending sms with message:' + message);
    }
}
class WhatsAppNotification {
    send(message) {
        console.log('sending whatsApp message:' + message);
    }
}
// ### polymorphism
// >>>- the same contract can produce different behavior depending on the implementation
