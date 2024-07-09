import type db from '..'
import { creditCardTable } from '../schema'
import type { CreditCardInput } from '../schema/credit-card.model'

export default async function seed(db: db) {
  await db.insert(creditCardTable).values(creditCardData)
}

const creditCardData: CreditCardInput[] = [
  {
    clientId: 'f1b9b3b4-0b3b-4b3b-8b3b-0b3b4b3b4b3b',
    cardNumber: '1234 5678 9012 3456',
    cardholderName: 'John Doe',
    expirationDate: '2025-12-31',
    cvv: '123',
  },
  {
    clientId: 'f1b9b3b4-0b3b-4b3b-8b3b-0b3b4b3b4b3b',
    cardNumber: '9876 5432 1098 7654',
    cardholderName: 'Jane Smith',
    expirationDate: '2024-06-30',
    cvv: '456',
  },
  {
    clientId: '12345678-1234-1234-1234-123456789012',
    cardNumber: '5555 4444 3333 2222',
    cardholderName: 'Alice Johnson',
    expirationDate: '2023-09-15',
    cvv: '789',
  },
  {
    clientId: '12345678-1234-1234-1234-123456789012',
    cardNumber: '1111 2222 3333 4444',
    cardholderName: 'Bob Williams',
    expirationDate: '2026-03-01',
    cvv: '012',
  },
  {
    clientId: '12345678-1234-1234-1234-123456789012',
    cardNumber: '9999 8888 7777 6666',
    cardholderName: 'Sarah Davis',
    expirationDate: '2025-11-30',
    cvv: '345',
  },
  {
    clientId: '87654321-4321-4321-4321-210987654321',
    cardNumber: '4444 5555 6666 7777',
    cardholderName: 'Michael Brown',
    expirationDate: '2022-07-10',
    cvv: '678',
  },
]
