// ### Why class?
class User {
    userId!: number;
    userName!: string;
    role!: string;

    constructor(userId: number, userName: string, role?: string) {
        this.userId = userId;
        this.userName = userName;
        this.role = role || 'user';
    }

    getInfo() {
        console.log(`userId: ${this.userId} this is ${this.userName} and he is an/a ${this.role}`);
    }
}

const user1 = new User(1, 'ka3bora')
const user2 = new User(2, 'rabe3')

// user1.getInfo();
// user2.getInfo();

// ### encapsulation -> private >> not accessible out-of-scope class
class BankAccount {
    private balance: number = 0;
    private deduction: number = 500;

    constructor(public readonly accountNumber: string) {
    }

    // setter method
    deposit(amount: number): void {
        this.balance += amount;
    }

    withdraw(amount: number): void {
        this.balance -= amount;
    }

    // getter method
    getBalance() : number {
        return this.balance - this.deduction;
    }
}

const account = new BankAccount('ACC-123');
account.deposit(1000);
const balance = account.getBalance();
// console.log(balance);

// ### Inherit behavior from the base class
class Employee {
    constructor(public name: string) {
    }

    work(): void {
        console.log(`employee ${this.name} is working`);
    }
}

class Manger extends Employee {
}

class Developer extends Employee {
    constructor(name: string, public lang: string) {
        super(name);  // this.name = name;
    }

    work() {
        console.log(`developer ${this.name} is working`);
    }

    writeCode(): void {
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
    add(a: number, b: number) : number;
    add(a: string, b: string): string;
    add(
        a:number | string,
        b: number | string
    ): number | string {
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
// console.log(calculator.add(10, 20));
// console.log(calculator.add('Hello ', 'TS'));

// ### Abstraction and interfaces
// >>>- Use an interface when you want to define a contract. Use an abstract class when you want to define a contract plus shared behavior or sate.
// ### Use an interface when:
// 1. Different classes need to follow the same contract.
// 2. You want to support multiple implementations. class implements multiple interfaces. not a multiple class.
// 2. You don't need to share constructor logic or instance state.
// 4. You want to define the
interface NotificationService {
    send(message: string): void;
}
class EmailNotification implements NotificationService {
    send(message: string): void {
        console.log('sending email with message:' + message);
    }
}
class SmsNotificationService implements NotificationService {
    send(message: string): void {
        console.log('sending sms with message:' + message);
    }
}
class WhatsAppNotification implements NotificationService {
    send(message: string): void {
        console.log('sending whatsApp message:' + message);
    }
}

// ### polymorphism
// >>>- the same contract can produce different behavior depending on the implementation












