import { UpdateAccount } from "../types";
//*  *//
export const updateAccount = (account: string) => {
    return {
        type: UpdateAccount.UPDATE_ACCOUNT,
        payload: account,
    };
};
//*  *//
export const updateLibrary = (library: any) => {
    return {
        type: UpdateAccount.UPDATE_LIBRARY,
        payload: library,
    };
};
