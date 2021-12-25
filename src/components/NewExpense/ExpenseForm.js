import React from 'react'
import './ExpenseForm.css'

export const ExpenseForm = () => {
    return (
        <div>
            <form>
                <div className="new-expense__controls">
                    <div className="new-expense__control">
                        <label htmlFor="newexpenseTitle">Title</label>
                        <input id='newexpenseTitle' type="text" />
                    </div>
                    <div className="new-expense__control">
                        <label htmlFor="newexpenseAmount">Amount</label>
                        <input id='newexpenseAmount' type="number" min="0" step='0.01'/>
                    </div>
                    <div className="new-expense__control">
                        <label htmlFor="newexpenseDate">Date</label>
                        <input id='newexpenseDate' type="date" min="2021-1-1" max='2022-12-31'/>
                    </div>
                </div>
                <div className="new-expense_actions">
                    <button type="submit">Add Expense</button>
                </div>
            </form>
        </div>
    )
}
