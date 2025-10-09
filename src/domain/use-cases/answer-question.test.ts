import { expect, test } from 'vitest'
import { AnswerQuestionUseCase } from './answer-question'

test('Create an answer', () => {
  const answerQuestion = new AnswerQuestionUseCase()

  const answer = answerQuestion.execute({
    questionId: 'question-1',
    studentId: 'student-1',
    content: 'This is an answer.',
  })

  expect(answer.content).toEqual('This is an answer.')
})
