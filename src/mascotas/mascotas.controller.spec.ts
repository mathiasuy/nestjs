import { Test, TestingModule } from '@nestjs/testing';
import { MascotasController } from './mascotas.controller';

describe('Mascotas Controller', () => {
  let controller: MascotasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MascotasController],
    }).compile();

    controller = module.get<MascotasController>(MascotasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
