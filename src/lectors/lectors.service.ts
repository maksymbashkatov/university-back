import { AppDataSource } from '../configs/database/data-source';
import { Lector } from './entities/lector.entity';
import { ILector } from './types/lector.interface';

const lectorsRepository = AppDataSource.getRepository(Lector);

export const getAllLectors = async (): Promise<ILector[]> => {
  const lectors = await lectorsRepository.find();
  return lectors;
};

export const createLector = async (
  createLectorSchema: Omit<ILector, 'id'>,
): Promise<ILector> => {
  return lectorsRepository.save(createLectorSchema);
};
