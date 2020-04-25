const { getExpDate, sign, verify } = require('../src/helpers/verify');

jest.useFakeTimers();

describe('Testing getExpDate', () => {
  let now;

  beforeEach(() => {
    now = Date.now();
  });

  test('2s', () => {
    expect(getExpDate(now, '2s')).toBe(2000 + now);
  });

  test('3m', () => {
    expect(getExpDate(now, '3m')).toBe(3 * 60 * 1000 + now);
  });

  test('33h', () => {
    expect(getExpDate(now, '33h')).toBe(33 * 60 * 60 * 1000 + now);
  });

  test('24d', () => {
    expect(getExpDate(now, '24d')).toBe(24 * 24 * 60 * 60 * 1000 + now);
  });

  test('Errors', () => {
    expect(() => getExpDate(now, '2455')).toThrow();
    expect(() => getExpDate(now, '2455y')).toThrow();
    expect(() => getExpDate(now, 'h')).toThrow();
    expect(() => getExpDate('1h')).toThrow();
  });
});

describe('Testing sign and verify', () => {
  const obj = { test: 'test', a: 1 };
  const secret = 'byf7ce4wn5uibTFG';
  const token = sign(obj, secret, '1h');
  const time = 60 * 60 * 1000;
  const realDate = Date.now;

  test('Verify returns sign object', () => {
    expect(obj).toMatchObject(verify(token, secret));
  });

  test('Fails after 1h', () => {
    global.Date.now = jest.fn(() => realDate() + time);

    expect(() => verify(token, secret)).toThrow();
  });

  afterAll(() => {
    global.Date.now = realDate;
  });
});
