import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, Relation } from 'typeorm';
import { Paciente } from '../pacientes/pacienteEntity.js';
import { Especialista } from '../especialistas/EspecialistaEntity.js';

@Entity('consultas')
export class Consulta {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Especialista, (especialista) => especialista.consultas)
  especialista: Relation<Especialista>;

  @ManyToOne(() => Paciente, (paciente) => paciente.consultas)
  paciente: Relation<Paciente>;

  @Column("varchar")
  data: Date;

  @Column("boolean")
  desejaLembrete: boolean;

  @Column("simple-array")
  lembretes: string[];

  @Column("varchar")
  motivoCancelamento: string; // Specify the column type here

  @CreateDateColumn()
  createdAt: Date;
}
