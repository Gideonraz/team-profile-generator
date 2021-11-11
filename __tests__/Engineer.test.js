const { test, expect } = require("@jest/globals");
const Engineer = require("../lib/Engineer");

test('Creates enginineer object', () => {
    const engineer = new Engineer('GR', '25', 'gideonrazzaq1158@gmail.com', 'Gideonraz');

    expect(engineer.name).toBe('GR');
    expect(engineer.id).toBe('25');
    expect(engineer.email).toBe('gideonrazzaq1158@gmail.com');
    expect(engineer.github).toBe('Gideonraz');
});

test('gets engineers github', () => {
    const engineer = new Engineer('GR', '25', 'gideonrazzaq1158@gmail.com', 'Gideonraz');

    expect(engineer.getGithub()).toBe('https://github.com/Gideonraz/')
})

test('gets role of engineer', () => {
    const engineer = new Engineer('GR', '25', 'gideonrazzaq1158@gmail.com', 'Gideonraz');

    expect(engineer.getRole()).toBe('Role: Engineer');
});