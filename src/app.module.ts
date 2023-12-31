import { Module } from '@nestjs/common';
import { RecipeService } from './recipe/recipe.service';
import { RecipeModule } from './recipe/recipe.module';

@Module({
  imports: [RecipeModule],
  providers: [RecipeService],
})
export class AppModule {}
