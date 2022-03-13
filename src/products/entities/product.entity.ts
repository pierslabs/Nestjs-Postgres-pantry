import { Pantry } from 'src/pantrys/entities/pantry.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  quantity: string;

  @ManyToOne(() => Pantry, (pantry) => pantry.products, { cascade: true })
  @JoinColumn({ name: 'pantry_id' })
  pantry: Pantry;
}
