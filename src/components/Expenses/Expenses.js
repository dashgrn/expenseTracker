import './Expenses.css'
import { ExpenseItem } from './ExpenseItem'
import { Card } from '../UI/Card'

export const Expenses = ({ expenseData }) => {

  return (
    <Card className='expenses'>
      {expenseData.map(expense =>
        <ExpenseItem key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date} />
      )}

    </Card>
  )
}