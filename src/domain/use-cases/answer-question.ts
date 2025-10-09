import { Answer } from '../entities/answer'
import type { AnswerRepository } from '../repositories/answer-repository'

interface AnswerQuestionUseCaseRequest {
  questionId: string
  studentId: string
  content: string
}

export class AnswerQuestionUseCase {
  constructor(private answerRepository: AnswerRepository) {}

  async execute({
    questionId,
    studentId,
    content,
  }: AnswerQuestionUseCaseRequest) {
    const answer = new Answer({ content, authorId: studentId, questionId })

    await this.answerRepository.create(answer)

    return answer
  }
}
