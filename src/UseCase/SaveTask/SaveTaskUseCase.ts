import { Injectable } from '@nestjs/common';
import { Task } from '@prisma/client';
import { UseCase } from '../../index';
import SaveTaskDto from './SaveTaskDto';

@Injectable()
export default class SaveTaskUseCase
  implements UseCase<Promise<Task>, [dto: SaveTaskDto]>
{
  private taskRepository: any;
  constructor() {}

  async handle(dto: SaveTaskDto) {
    /*
     * @todo IMPLEMENT HERE : VALIDATION DTO, DATA SAVING, ERROR CATCHING
     */
    if (!dto.name || dto.name.trim.length === 0) {
      throw new Error('Task name is required');
    }

    try {
      return await this.taskRepository.save(dto);
    } catch (error) {
      throw Error(error.message);
    }
  }
}
