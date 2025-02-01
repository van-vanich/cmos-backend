import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('Rivens')
export class RivensEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'varchar' })
  ticker: string;

  @Column({ type: 'varchar' })
  logo?: string;

  @Column({ type: 'varchar' })
  open_api_key?: string;

  @Column({ type: 'varchar' })
  bio?: string; //improved in backend

  @Column({ type: 'varchar' })
  lore?: string; //improved in backend

  @Column({ type: 'varchar' })
  topics?: string; //generated in backend

  @Column({ type: 'varchar' })
  system?: string; //generated in backend

  @Column({ type: 'varchar' })
  adjectives?: string; //generated in backend

  @Column({ type: 'varchar' })
  style?: string; //generated in backend

  @Column({ type: 'varchar' })
  twitter_login?: string;

  @Column({ type: 'varchar' })
  twitter_password?: string;

  @Column({ type: 'varchar' })
  twitter_secret_key?: string;

  @Column({ type: 'varchar' })
  knowledge_base?: string;
}
