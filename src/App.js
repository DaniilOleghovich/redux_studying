import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {addCustomerAction, removeCustomerAction} from "./store/customerReducer";
import {addCashAction, getCashAction} from "./store/cashReducer";
import {fetchCustomers} from "./asyncActions/customer";

function App() {

    const dispatch = useDispatch();
    const cash = useSelector(state => state.cash.cash);
    const customers = useSelector(state => state.customers.customers);

    const addCash = (cash) => {
        if (Number.isNaN(cash) && cash !== undefined) {
            dispatch(addCashAction(0));
            addCash(Number(prompt()));
        } else {
            dispatch(addCashAction(cash));
        }
    }

    const getCash = (cash) => {
        if (Number.isNaN(cash) && cash !== undefined) {
            dispatch(getCashAction(0));
            getCash(Number(prompt()));
        } else {
            dispatch(getCashAction(cash));
        }
    }

    const addCustomer = (name) => {
        const customer = {
            name: name,
            id: Date.now()
        }
        dispatch(addCustomerAction(customer));
    }

    const removeCustomer = (customer) => {
        dispatch(removeCustomerAction(customer.id));
    }

    return (
        <div className="App">
            <div className="wrap" style={{display: 'flex'}}>
                { !Number.isNaN(cash) ?
                    <div>
                        <h1>Balance: {cash}</h1>
                    </div>
                    :
                    <div>
                        <h1>Please type a number value</h1>
                    </div>
                }

                <div>
                    <button onClick={() => addCash(Number(prompt()))}>Add cash</button>
                    <button onClick={() => getCash(Number(prompt()))}>Get cash</button>
                    <button style={{width: "200px"}} onClick={() => addCustomer(prompt())}>Add Customer</button>
                    <button style={{width: "270px"}} onClick={() => dispatch(fetchCustomers())}>Get List Of Customers</button>
                </div>
            </div>
            { customers.length > 0 ?
                <div>
                    {customers.map(customer =>
                        <div onClick={() => removeCustomer(customer)} key={customer.id} className="customer">
                            {customer.name}
                        </div>
                    )}
                </div>
                :
                <div style={{fontSize: "1.5rem", marginTop: "10px"}}>
                    Customers are not exists!
                </div>
            }
        </div>
    );
}

export default App;
