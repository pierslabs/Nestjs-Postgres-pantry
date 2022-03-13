import { Product } from 'src/products/entities/product.entity';
import { User } from 'src/users/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Pantry {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ nullable: false })
  name: string;

  @ManyToOne(() => User, (user) => user.pantrys, { cascade: true })
  @JoinColumn({ name: 'user_id' })
  user: User;

  @OneToMany(() => Product, (product) => product.pantry)
  products: Product[];
}
