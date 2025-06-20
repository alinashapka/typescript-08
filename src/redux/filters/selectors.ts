import { RootState } from "../types";

export const selectNameFilter = (state: RootState) => state.filters.name;