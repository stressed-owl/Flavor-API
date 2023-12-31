import { Module } from '@nestjs/common';
import { RecipeController } from './recipe.controller';

@Module({
  controllers: [RecipeController],
})
export class RecipeModule {}
