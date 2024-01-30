import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { GlobalService } from './global.service';
import { IcreateContact } from './global.dto';

@Controller('')
export class GlobalController {
  // src/search/search.controller.ts
  constructor(private readonly globalService: GlobalService) {}

  @Post('/contact')
  async createContact(@Body() payload: IcreateContact) {
    return await this.globalService.createContact(payload);
  }
}
