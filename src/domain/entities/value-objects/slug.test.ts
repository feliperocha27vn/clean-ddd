import { expect, test } from 'vitest'
import { Slug } from './slug'

test('should be able to create a slug value object', () => {
  const slug = Slug.createFromText('This is a Title!')

  expect(slug.value).toBe('this-is-a-title')
})
