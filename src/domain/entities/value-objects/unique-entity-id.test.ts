import { expect, test } from 'vitest'
import { UniqueEntityID } from './unique-entity-id'

test('should be able to create a unique entity ID', () => {
  const uniqueEntityID = new UniqueEntityID()

  expect(uniqueEntityID.toValue().toString()).toEqual(expect.any(String))
})
