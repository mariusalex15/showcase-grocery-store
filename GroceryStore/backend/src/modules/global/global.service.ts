import { Injectable } from '@nestjs/common';
import {
  InjectConnection,
  InjectEntityManager,
  InjectRepository,
} from '@nestjs/typeorm';
import {
  getMetadataArgsStorage,
  EntityTarget,
  SelectQueryBuilder,
  Brackets,
  EntityManager,
  Repository,
} from 'typeorm';
import { ContactEntity } from 'src/models';
import { IcreateContact } from './global.dto';

@Injectable()
export class GlobalService {
  constructor(
    @InjectRepository(ContactEntity)
    private readonly contactRepository: Repository<ContactEntity>,
  ) {}

  async createContact(payload: IcreateContact) {
    return await this.contactRepository.save(payload);
  }
}
