import "./TransactionCard.css";

export default function TransactionCard({ transaction }) {

    return (

        <div className="transaction-card">

            <div>

                <h3>{transaction.title}</h3>

                <p>{transaction.paymentMethod}</p>

            </div>

            <div>

<h3

className={

transaction.type==="Income"

?

"income"

:

"expense"

}

>

₹{transaction.totalAmount}

</h3>

                <p>

                    {transaction.type}

                </p>

            </div>

        </div>

    );

}