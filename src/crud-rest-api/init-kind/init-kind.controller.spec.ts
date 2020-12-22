import { Test, TestingModule } from '@nestjs/testing';
import { InitKindController } from './init-kind.controller';

describe('InitKindController', () => {
  let controller: InitKindController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InitKindController],
    }).compile();

    controller = module.get<InitKindController>(InitKindController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
