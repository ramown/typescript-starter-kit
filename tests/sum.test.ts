import { describe, expect, it } from 'vitest';

import { sum } from '#/sum';

describe('sum', () => {
  it('should sum two numbers', () => {
    expect(sum(2, 3)).toBe(5);
  });
});
