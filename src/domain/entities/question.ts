import { Entity } from '../../core/entities/entity'
import type { Optional } from '../../core/types/optional'
import type { Slug } from './value-objects/slug'
import type { UniqueEntityID } from './value-objects/unique-entity-id'

interface QuestionProps {
  title: string
  content: string
  slug: Slug
  authorId: UniqueEntityID
  bestAnswerId?: UniqueEntityID
  createdAt: Date
  updatedAt?: Date
}

export class Question extends Entity<QuestionProps> {
  static create(
    props: Optional<QuestionProps, 'createdAt'>,
    id?: UniqueEntityID
  ) {
    const question = new Question(
      {
        ...props,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      id
    )

    return question
  }
}
