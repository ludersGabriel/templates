import userTable from './user.model'
import clientTable, { clientTableRelations } from './client.model'
import creditCardTable, {
  creditCardTableRelations,
} from './credit-card.model'

export {
  userTable,
  clientTable,
  clientTableRelations,
  creditCardTable,
  creditCardTableRelations,
}

export const tables = [userTable, clientTable, creditCardTable]
