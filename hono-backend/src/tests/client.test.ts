import { describe, expect, it } from 'bun:test'
import app from '..'
import {
  clientSchemas,
  type ClientDto,
  type ClientInput,
  type ClientUpdate,
} from '@/db/schema/client.model'
import { api, token } from './preload-tests'
import { HttpStatus } from '@/services/error.service'

describe('Tests for client routes', () => {
  const id = '28222da6-2b0a-49df-a328-0703fed118a2'

  it('should create a new client', async () => {
    const input: ClientInput = {
      id,
      cnpj: '17.579.768/0001-64',
      name: 'Test Client',
    }

    const res = await app.request(`${api}/client/create`, {
      method: 'POST',
      body: JSON.stringify(input),
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
    })

    expect(res.status).toBe(HttpStatus.OK)
    const data = (await res.json()) as { client: ClientDto }
    clientSchemas.clientDtoSchema.parse(data.client)
  })

  it('should update a client', async () => {
    const input: ClientUpdate = {
      id,
      name: 'Test Client Updated',
    }

    const res = await app.request(`${api}/client/update`, {
      method: 'POST',
      body: JSON.stringify(input),
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
    })

    expect(res.status).toBe(HttpStatus.OK)

    const data = (await res.json()) as { client: ClientDto }
    clientSchemas.clientDtoSchema.parse(data.client)
    expect(data.client.name).toBe(input.name!)
  })

  it('should find a client by id', async () => {
    const res = await app.request(`${api}/client/${id}`, {
      headers: {
        Authorization: token,
      },
    })

    expect(res.status).toBe(HttpStatus.OK)

    const data = (await res.json()) as { client: ClientDto }
    clientSchemas.clientDtoSchema.parse(data.client)
    expect(data.client.id).toBe(id)
  })

  it('should delete a client', async () => {
    const res = await app.request(`${api}/client/delete/${id}`, {
      method: 'POST',
      headers: {
        Authorization: token,
      },
    })

    expect(res.status).toBe(HttpStatus.OK)

    const data = (await res.json()) as { client: ClientDto }
    clientSchemas.clientDtoSchema.parse(data.client)
    expect(data.client.id).toBe(id)

    const res2 = await app.request(`${api}/client/${id}`, {
      headers: {
        Authorization: token,
      },
    })

    expect(res2.status).toBe(HttpStatus.NOT_FOUND)
  })
})
