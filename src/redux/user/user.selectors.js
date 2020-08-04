import { createSelector } from "reselect";

const selectUser = (state) => state.user;

export const selectEmail = createSelector([selectUser], (user) => user.email);
