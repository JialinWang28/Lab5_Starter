// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

test('isPhoneNumber true 1', () => {
  expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});
test('isPhoneNumber true 2', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});
test('isPhoneNumber false 1', () => {
  expect(isPhoneNumber('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAa')).toBe(false);
});
test('isPhoneNumber false 2', () => {
  expect(isPhoneNumber('123-456')).toBe(false);
});

test('isEmail true 1', () => {
  expect(isEmail('test@example.com')).toBe(true);
});
test('isEmail true 2', () => {
  expect(isEmail('user_123@ucsd.edu')).toBe(true);
});
test('isEmail false 1', () => {
  expect(isEmail('test@example')).toBe(false);
});
test('isEmail false 2', () => {
  expect(isEmail('AAAAAAAAAAAAAAAAAAAAAAAAAAA')).toBe(false);
});

test('isStrongPassword true 1', () => {
  expect(isStrongPassword('a123_')).toBe(true);
});
test('isStrongPassword true 2', () => {
  expect(isStrongPassword('Password123')).toBe(true);
});
test('isStrongPassword false 1', () => {
  expect(isStrongPassword('12345')).toBe(false);
});
test('isStrongPassword false 2', () => {
  expect(isStrongPassword('a!bc')).toBe(false);
});

test('isDate true 1', () => {
  expect(isDate('1/1/2024')).toBe(true);
});
test('isDate true 2', () => {
  expect(isDate('12/31/1999')).toBe(true);
});
test('isDate false 1', () => {
  expect(isDate('1/1/24')).toBe(false);
});
test('isDate false 2', () => {
  expect(isDate('01-01-2024')).toBe(false);
});

test('isHexColor true 1', () => {
  expect(isHexColor('#abc')).toBe(true);
});
test('isHexColor true 2', () => {
  expect(isHexColor('aabbcc')).toBe(true);
});
test('isHexColor false 1', () => {
  expect(isHexColor('#abcd')).toBe(false);
});
test('isHexColor false 2', () => {
  expect(isHexColor('zzzzzz')).toBe(false);
});
