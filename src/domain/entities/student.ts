import { Entity } from '../../core/entities/entity'
import type { UniqueEntityID } from './value-objects/unique-entity-id'

interface StudentProps {
  name: string
}

export class Student extends Entity<StudentProps> {
  static create(props: StudentProps, id?: UniqueEntityID) {
    const student = new Student(
      {
        ...props,
      },
      id
    )

    return student
  }
}
