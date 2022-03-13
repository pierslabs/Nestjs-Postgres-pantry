import { Test, TestingModule } from '@nestjs/testing';
import { PantrysController } from './pantrys.controller';
import { PantrysService } from './pantrys.service';

describe('PantrysController', () => {
  let controller: PantrysController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PantrysController],
      providers: [PantrysService],
    }).compile();

    controller = module.get<PantrysController>(PantrysController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
