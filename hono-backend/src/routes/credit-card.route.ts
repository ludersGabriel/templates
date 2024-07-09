import { CreditCardService } from '@/services/credit-card.service'
import Container from 'typedi'
import { honoWithJwt } from '..'
import { zValidator } from '@hono/zod-validator'
import { creditCardSchemas } from '@/db/schema/credit-card.model'
import { HttpStatus, createApexError } from '@/services/error.service'

const service = Container.get(CreditCardService)

export const creditCardRouter = honoWithJwt()
  .post(
    '/create',
    zValidator('json', creditCardSchemas.creditCardInputSchema),
    async (c) => {
      try {
        const input = await c.req.valid('json')

        const creditCard =
          creditCardSchemas.creditCardDtoSchema.parse(
            await service.create(input)
          )

        return c.json({ creditCard })
      } catch (e) {
        return c.json(
          createApexError({
            status: 'error',
            message: 'could not create credit card',
            code: HttpStatus.BAD_REQUEST,
            path: c.req.routePath,
            suggestion: 'check the input and try again',
          }),
          HttpStatus.BAD_REQUEST
        )
      }
    }
  )
  .post(
    '/update',
    zValidator('json', creditCardSchemas.creditCardUpdateSchema),
    async (c) => {
      try {
        const input = await c.req.valid('json')

        const creditCard =
          creditCardSchemas.creditCardDtoSchema.parse(
            await service.update(input)
          )

        return c.json({ creditCard })
      } catch (e) {
        console.log(e)

        return c.json(
          createApexError({
            status: 'error',
            message: 'could not update credit card',
            code: HttpStatus.BAD_REQUEST,
            path: c.req.routePath,
            suggestion: 'check the input and try again',
          }),
          HttpStatus.BAD_REQUEST
        )
      }
    }
  )
  .post('/delete/:id', async (c) => {
    try {
      const id = c.req.param('id')

      const creditCard = creditCardSchemas.creditCardDtoSchema.parse(
        await service.delete(id)
      )

      return c.json({ creditCard })
    } catch (e) {
      return c.json(
        createApexError({
          status: 'error',
          message: 'could not delete credit card',
          code: HttpStatus.BAD_REQUEST,
          path: c.req.routePath,
          suggestion: 'check the input and try again',
        }),
        HttpStatus.BAD_REQUEST
      )
    }
  })
  .get('/:id', async (c) => {
    try {
      const id = c.req.param('id')

      const creditCard = creditCardSchemas.creditCardDtoSchema.parse(
        await service.find(id)
      )

      return c.json({ creditCard })
    } catch (e) {
      return c.json(
        createApexError({
          status: 'error',
          message: 'could not find credit card',
          code: HttpStatus.NOT_FOUND,
          path: c.req.routePath,
          suggestion: 'are you sure the credit card exists?',
        }),
        HttpStatus.NOT_FOUND
      )
    }
  })
