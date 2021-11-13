const defaultState = {
    customers: []
}

const ADD_CUSTOMER = "ADD_CUSTOMER";
const ADD_MANY_CUSTOMER = "ADD_MANY_CUSTOMER";
const REMOVE_CUSTOMER = "REMOVE_CUSTOMER";

export const customerReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_MANY_CUSTOMER:
            return {...state, customers: [...state.customers, ...action.payload]}
        case ADD_CUSTOMER:
            return {...state, customers: [...state.customers, action.payload]}
        case REMOVE_CUSTOMER:
            return {...state, customers: state.customers.filter(customer => customer.id !== action.payload)}
        default:
            return state;
    }
}

// This functions calls "action creators". They are help when you use dispatch to put some data to reducers.
// You need call someone of this functions into dispatch and put them payload data only, without type
export const addCustomerAction = (payload) => ({type: ADD_CUSTOMER, payload});
export const addManyCustomersAction = (payload) => ({type: ADD_MANY_CUSTOMER, payload});
export const removeCustomerAction = (payload) => ({type: REMOVE_CUSTOMER, payload});