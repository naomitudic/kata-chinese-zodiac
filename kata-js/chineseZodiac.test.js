import { describe, it, expect } from 'vitest';
import { chineseZodiac } from './script.js';

describe('función chineseZodiac', () => {
    
  it('debe repetirse durante dos años consecutivos', () => {
    expect(chineseZodiac(1984)).toBe('Madera Rata');
    expect(chineseZodiac(1985)).toBe('Madera Buey');
    expect(chineseZodiac(1986)).toBe('Fuego Tigre')
  });

  it('debería cambiar en el siguiente año', () => {
    expect(chineseZodiac(1985)).not.toBe(chineseZodiac(1986));
  });

  it('debe funcionar con años anteriores a 1984', () => {
    expect(chineseZodiac(1983)).toBe('Agua Cerdo');
  });

});