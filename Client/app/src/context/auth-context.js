import { createContext } from 'react';

const defaultState = {
    roles: [],
    username: '',
    isLoggedIn: false,
    updateUser() { }
};
const { Consumer: UserConsumer, Provider: UserProvider } = createContext(defaultState);

export {
    UserConsumer,
    UserProvider,
    defaultState
}