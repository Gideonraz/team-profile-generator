const { test, expect } = require("@jest/globals")
const Intern = require("../lib/Intern")

test('creates intern object', () => {
    const intern = new Intern('GR', '25', 'gideonrazzaq1158@gmail.com', 'UCF');

    expect(intern.name).toBe('GR');
    expect(intern.id).toBe('25');
    expect(intern.email).toBe('gideonrazzaq1158@gmail.com');
    expect(intern.school).toBe('UPENN');
});

test('gets the interns school', () => {
    const intern = new Intern('Gideonraz', 'GR', '25', 'UPENN');

    expect(intern.getSchool()).toBe('School: UPENN');
});

test('gets the interns role', () => {
    const intern = new Intern('Gideonraz', 'GR', '25', 'UPENN');

    expect(intern.getRole()).toBe('Role: Intern');
});