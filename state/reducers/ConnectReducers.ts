import { UpdateAccount } from "../types";

interface UpdateLibraryType {
    type: string;
    payload: object;
}
//*  *//
interface UpdateAccountType {
    type: string;
    payload: string;
}

interface StateType {
    library: object | null;
    account: string | null | undefined;
}

export type ActionType = UpdateLibraryType | UpdateAccountType;

const initialState: StateType = {
    library: null,
    account: "",
};

//* Reducers *//
const ConnectReducers = (state = initialState, action: ActionType) => {
    switch (action.type) {
        //*  *//
        case UpdateAccount.UPDATE_LIBRARY: {
            return {
                ...state,
                library: action.payload,
            };
        }
        //*  *//
        case UpdateAccount.UPDATE_ACCOUNT: {
            return {
                ...state,
                account: action.payload,
            };
        }
        //*  *//
        default:
            return state;
    }
};

export default ConnectReducers;
