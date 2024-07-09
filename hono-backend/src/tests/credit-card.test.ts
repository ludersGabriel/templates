import { describe, expect, it } from 'bun:test'
import app from '..'

import { api, token } from './preload-tests'
import { HttpStatus } from '@/services/error.service'
import {
  creditCardSchemas,
  type CreditCardDto,
  type CreditCardInput,
  type CreditCardUpdate,
} from '@/db/schema/credit-card.model'

describe('Tests for credit card routes', () => {
  const id = '28222da6-2b0a-49df-a328-0703fed118a3'
  const clientId = 'f1b9b3b4-0b3b-4b3b-8b3b-0b3b4b3b4b3b'
  const baseUrl = `${api}/credit-card`

  it('should create a new creditCard', async () => {
    const input: CreditCardInput = {
      id,
      clientId,
      cardholderName: 'Test Cardholder',
      cardNumber: '1234567890123456',
      cvv: '123',
      expirationDate: '2025/12/20',
    }

    const res = await app.request(`${baseUrl}/create`, {
      method: 'POST',
      body: JSON.stringify(input),
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
    })

    expect(res.status).toBe(HttpStatus.OK)
    const data = (await res.json()) as { creditCard: CreditCardDto }
    creditCardSchemas.creditCardDtoSchema.parse(data.creditCard)
  })

  it('should update a credit card', async () => {
    const input: CreditCardUpdate = {
      id,
      cardholderName: 'Test Cardholder Updated',
    }

    const res = await app.request(`${baseUrl}/update`, {
      method: 'POST',
      body: JSON.stringify(input),
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
    })

    expect(res.status).toBe(HttpStatus.OK)

    const data = (await res.json()) as { creditCard: CreditCardDto }
    creditCardSchemas.creditCardDtoSchema.parse(data.creditCard)
    expect(data.creditCard.cardholderName).toBe(input.cardholderName!)
  })

  it('should find a credit card by id', async () => {
    const res = await app.request(`${baseUrl}/${id}`, {
      headers: {
        Authorization: token,
      },
    })

    expect(res.status).toBe(HttpStatus.OK)

    const data = (await res.json()) as { creditCard: CreditCardDto }
    creditCardSchemas.creditCardDtoSchema.parse(data.creditCard)
    expect(data.creditCard.id).toBe(id)
  })

  it('should delete a credit card', async () => {
    const res = await app.request(`${baseUrl}/delete/${id}`, {
      method: 'POST',
      headers: {
        Authorization: token,
      },
    })

    expect(res.status).toBe(HttpStatus.OK)

    const data = (await res.json()) as { creditCard: CreditCardDto }
    creditCardSchemas.creditCardDtoSchema.parse(data.creditCard)
    expect(data.creditCard.id).toBe(id)

    const res2 = await app.request(`${baseUrl}/${id}`, {
      headers: {
        Authorization: token,
      },
    })

    expect(res2.status).toBe(HttpStatus.NOT_FOUND)
  })
})
