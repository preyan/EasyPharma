import { describe, it, expect } from 'vitest';
import { prisma } from './prisma';

describe('prisma', () => {
  it('should work', () => {
    expect(prisma()).toEqual('prisma');
  });
});
