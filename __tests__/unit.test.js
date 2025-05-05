// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

import * as functions from '../code-to-unit-test/unit-test-me.js';

/* ---------- Phone Number ---------- */
describe('isPhoneNumber', () => {
  test('valid: 555-555-5555', () => {
    expect(functions.isPhoneNumber('555-555-5555')).toBe(true);
  });
  test('valid: (760) 123-4567', () => {
    expect(functions.isPhoneNumber('(760) 123-4567')).toBe(true);
  });
  test('invalid: 1234567 (no dashes / area code)', () => {
    expect(functions.isPhoneNumber('1234567')).toBe(false);
  });
  test('invalid: letters in number', () => {
    expect(functions.isPhoneNumber('abc-def-ghij')).toBe(false);
  });
});

/* ---------- Email ---------- */
describe('isEmail', () => {
  test('valid: user123@abc.com', () => {
    expect(functions.isEmail('user123@abc.com')).toBe(true);
  });
  test('valid: foo@my_domain.org', () => {
    expect(functions.isEmail('foo@my_domain.org')).toBe(true);
  });
  test('invalid: missing "@"', () => {
    expect(functions.isEmail('not-an-email.com')).toBe(false);
  });
  test('invalid: missing TLD dot', () => {
    expect(functions.isEmail('user@nodot')).toBe(false);
  });
});

/* ---------- Strong Password ---------- */
describe('isStrongPassword', () => {
  test('valid: Abcdef12', () => {
    expect(functions.isStrongPassword('Abcdef12')).toBe(true);
  });
  test('valid: Z9_xxyyzz', () => {
    expect(functions.isStrongPassword('Z9_xxyyzz')).toBe(true);
  });
  test('invalid: Ab1 (too short)', () => {
    expect(functions.isStrongPassword('Ab1')).toBe(false);
  });
  test('invalid: 1Badpass (starts with digit)', () => {
    expect(functions.isStrongPassword('1Badpass')).toBe(false);
  });
});

/* ---------- Date ---------- */
describe('isDate', () => {
  test('valid: 12/31/1999', () => {
    expect(functions.isDate('12/31/1999')).toBe(true);
  });
  test('valid: 01/01/2025', () => {
    expect(functions.isDate('01/01/2025')).toBe(true);
  });
  test('invalid: wrong delimiter 04-15-2024', () => {
    expect(functions.isDate('04-15-2024')).toBe(false);
  });
  test('invalid: year too short 1/1/99', () => {
    expect(functions.isDate('1/1/99')).toBe(false);
  });
});

/* ---------- Hex Color ---------- */
describe('isHexColor', () => {
  test('valid: #fff', () => {
    expect(functions.isHexColor('#fff')).toBe(true);
  });
  test('valid: #1A2b3C', () => {
    expect(functions.isHexColor('#1A2b3C')).toBe(true);
  });
  test('invalid: #abcd (length 4 not allowed)', () => {
    expect(functions.isHexColor('#abcd')).toBe(false);
  });
  test('invalid: #zzzzzz (non‑hex digits)', () => {
    expect(functions.isHexColor('#zzzzzz')).toBe(false);
  });
});