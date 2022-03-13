import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { Pantry } from 'src/pantrys/entities/pantry.entity';
import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false, unique: true })
  email: string;

  @Column({ nullable: false, type: 'varchar' })
  password: string;

  @OneToMany(() => Pantry, (pantry) => pantry.user)
  pantrys: Pantry[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updateAt: Date;

  @BeforeInsert()
  async hashPassword() {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  }

  async validatePassword(password: string): Promise<boolean> {
    return await bcrypt.compare(password, this.password);
  }

  createToken(
    user: { id: number; email: string; name: string },
    secret: string,
    expiresIn: string,
  ) {
    const { id, email, name } = user;
    return jwt.sign({ id, email, name }, secret, { expiresIn });
  }
}
