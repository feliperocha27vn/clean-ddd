import { expect, test } from 'vitest'
import type { Answer } from '../entities/answer'
import type { AnswerRepository } from '../repositories/answer-repository'
import { AnswerQuestionUseCase } from './answer-question'

const fakeAnswerRepository: AnswerRepository = {
  create: async (answer: Answer) => {
    return
  },
}

test('Create an answer', async () => {
  const answerQuestion = new AnswerQuestionUseCase(fakeAnswerRepository)

  const answer = await answerQuestion.execute({
    questionId: 'question-1',
    instructorId: 'instructor-1',
    content: 'This is an answer.',
  })

  expect(answer.content).toEqual('This is an answer.')
})
