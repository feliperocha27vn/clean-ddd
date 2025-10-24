import { Entity } from '../../core/entities/entity'
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

export class Question extends Entity<QuestionProps> {}
