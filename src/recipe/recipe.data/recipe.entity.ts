import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Recipe {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  type: string;

  @Column()
  cuisine: string;

  @Column({
    type: 'text',
  })
  ingredients: string;

  @Column()
  cookingTime: string;

  @Column({
    type: 'text',
  })
  instructions: string;
}
