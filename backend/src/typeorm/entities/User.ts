import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'user',
})
export class User {
  @PrimaryGeneratedColumn({
    type: 'bigint',
  })
  id: number;

  @Column({ unique: true })
  username: string;

  @Column()
  score: number;

  @Column()
  createdAt: Date;

  @Column()
  state: string;
}
