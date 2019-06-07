import { Mascota } from './mascota.entity';
import { Perro } from './perro';
import { Gato } from './gato';

describe('Mascota', () => {
  it('should be defined', () => {
    expect(new Perro()).toBeDefined();
    expect(new Gato()).toBeDefined();
  });
});
