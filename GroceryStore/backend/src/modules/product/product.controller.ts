import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
  UploadedFile,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import {
  UpdateProductsDto,
  addProductsDto,
  getProductsDto,
} from './product.dto';
import { ProductService } from './product.service';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Post('/')
  @UseInterceptors(FileInterceptor('thumbnail'))
  async addProducts(
    @UploadedFile() thumbnail,
    @Body() payload: addProductsDto,
  ) {
    try {
      if (!thumbnail) {
        throw new HttpException(
          'Thumbnail is required',
          HttpStatus.BAD_REQUEST,
        );
      }

      payload = {
        ...payload,
        thumbnail: thumbnail.buffer,
      };
      payload.price = payload.price;

      return await this.productService.addProducts(payload);
    } catch (error) {
      throw new HttpException(
        `Error adding products: ${error.message}`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get('/')
  async getProducts(@Query() payload: getProductsDto) {
    return await this.productService.getProducts(payload);
  }

  @Delete()
  deleteProduct(@Query() payload: { id: number }) {
    return this.productService.deleteProduct(payload);
  }

  @Put('/:id')
  @UseInterceptors(FileInterceptor('thumbnail'))
  async updateProduct(
    @Param('id') id: string,
    @Body() payload: UpdateProductsDto,
    @UploadedFile() thumbnail?: any,
  ) {
    payload = {
      ...payload,
      id: +id,
      ...(thumbnail && { thumbnail: thumbnail.buffer }),
    };

    return await this.productService.updateProduct(payload);
  }
  //
}
