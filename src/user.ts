/*
Create a class User add firstName, lastName, age, email, phone, loginAttempts, and password attributes
*/
export class User {
    firstName: string;
    lastName: string;
    age: number;
    email: string;
    phone: string;
    loginAttempts: number;
    password: string;

    constructor(firstName: string, lastName: string, age: number, email: string, phone: string, loginAttempts: number, password: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
        this.phone = phone;
        this.loginAttempts = loginAttempts;
        this.password = password;
    }

    // methods
    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }

    resetLoginAttempts(): void {
        this.loginAttempts = 0;
    }

    // getters and setters
    get getLoginAttempts(): number {
        return this.loginAttempts;
    }
    set setLoginAttempts(loginAttempts: number) {
        this.loginAttempts = loginAttempts;
    }
}