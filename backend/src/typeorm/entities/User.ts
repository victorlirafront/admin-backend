import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'user',
})
export class User {
  @PrimaryGeneratedColumn({
    type: 'bigint',
  })
  id: number;

  @Column()
  username: string;

  @Column()
  score: number;

  @Column()
  createdAt: Date;

  @Column()
  state: string;

  @Column()
  occupation: string;
}
