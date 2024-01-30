import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  UpdateProductsDto,
  addProductsDto,
  getProductsDto,
} from './product.dto';
import { ProductEntity } from 'src/models';
import * as Exception from '@nestjs/common/exceptions';
import { Like, Repository } from 'typeorm';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(ProductEntity)
    private productRepo: Repository<ProductEntity>,
  ) {}

  async addProducts(payload: addProductsDto) {
    if (!payload.thumbnail) {
      throw new Exception.BadRequestException('Thumbnail is required');
    }

    try {
      const response = await this.productRepo.save(payload);
      return {
        message: 'Product Successfully Added',
      };
    } catch (err) {
      console.log({ addproductErr: err });
      throw new Exception.BadRequestException('Something went wrong');
    }
  }

  getProducts(payload: getProductsDto) {
    return this.productRepo.find({
      where: {
        ...(payload?.title && { title: Like(`%${payload.title}%`) }),
        ...(payload?.price && { price: Like(`%${payload.price}%`) }),
      },
      order: {
        createdAt: 'DESC',
      },
    });
  }

  async deleteProduct(payload: { id: number }) {
    return await this.productRepo.delete(payload);
  }

  async updateProduct(payload: UpdateProductsDto) {
    const data = await this.productRepo.findOne({
      where: {
        ...(payload?.id && { id: +payload.id }),
      },
    });
    if (!data) {
      throw new Exception.NotFoundException('Product not found');
    }

    const update = await this.productRepo.update(payload.id, {
      ...(payload?.title && { title: payload.title }),
      ...(payload?.thumbnail && { thumbnail: payload.thumbnail }),
      ...(payload?.price && { price: payload.price }),
    });

    if (update.affected > 0) {
      return {
        message: 'Product Successfully Updated',
      };
    } else {
      throw new Exception.HttpException(
        'Product Not Found',
        HttpStatus.NOT_FOUND,
      );
    }
  }
}
