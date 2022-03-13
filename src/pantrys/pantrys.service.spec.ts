import { Test, TestingModule } from '@nestjs/testing';
import { PantrysService } from './pantrys.service';

describe('PantrysService', () => {
  let service: PantrysService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PantrysService],
    }).compile();

    service = module.get<PantrysService>(PantrysService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
