const { test, expect } = require("@jest/globals")
const Manager = require("../lib/Manager")

test('creates manager object', () => {
    manager = new Manager('GR', '25', 'gideonrazzaq1158@gmail.com', '52');

    expect(manager.name).toBe('GR');
    expect(manager.id).toBe('25');
    expect(manager.email).toBe('gideonrazzaq1158@gmail.com');
    expect(manager.officeNumber).toBe('52');
});

test('gets managers office number', () => {
    manager = new Manager('GR', '25', 'gideonrazzaq1158@gmail.com', '52');

    expect(manager.getOfficeNumber()).toBe('Office Number: 52');
});

test('gets managers role', () => {
    manager = new Manager('GR', '25', 'gideonrazzaq1158@gmail.com', '52');

    expect(manager.getRole()).toBe("Role: Manager")
})
