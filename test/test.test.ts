import { describe, expect, it, test } from 'vitest';

describe('Describing', () => {
  it('should BE', () => {
    expect(true).toStrictEqual(true);
  });

  it('should BE', () => {
    expect(true).toStrictEqual(true);
  });

  it.only('should a', () => {
    expect(true).toStrictEqual(true);
  });

  it.todo('should todo', () => {
    expect(true).toStrictEqual(true);
  });

  test('top', () => {
    //
  });


  it('yeooo', () => {
    expect(true).toStrictEqual(true);
  });

  describe('2', () => {
    describe('3', () => {
      describe('4', () => {
        it('should', () => {
          expect(true).toStrictEqual(true);
        });
      });
    });
  });
});
