// user.test.ts
import { User } from '../src/user';


describe('User', () => {
  let user: User;

  beforeEach(() => {
    user = new User('John', 'Doe', 30, 'john@example.com', '1234567890', 0, 'password');
  });

  test('should create a new user', () => {
    expect(user).toBeInstanceOf(User);
    expect(user.firstName).toBe('John');
    expect(user.lastName).toBe('Doe');
    expect(user.age).toBe(30);
    expect(user.email).toBe('john@example.com');
    expect(user.phone).toBe('1234567890');
    expect(user.loginAttempts).toBe(0);
    expect(user.password).toBe('password');
  });

  test('should get full name', () => {
    expect(user.getFullName()).toBe('John Doe');
  });

  test('should reset login attempts', () => {
    user.setLoginAttempts = 5;
    expect(user.getLoginAttempts).toBe(5);
    user.resetLoginAttempts();
    expect(user.getLoginAttempts).toBe(0);
  });
});
