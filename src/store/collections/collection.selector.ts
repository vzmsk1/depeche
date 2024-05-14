import { createSelector } from "reselect";
import type { RootState } from "../root-reducer";
import type { CollectionsProps } from "./collection.props";

const selectCollectionReducer = (state: RootState) => state.collections;

export const selectCollectionsIsLoading = createSelector(
  [selectCollectionReducer],
  (collectionsSlice) => collectionsSlice.isLoading,
);

export const selectCollections = createSelector(
  [selectCollectionReducer],
  (collectionsSlice) => collectionsSlice.collections,
);

export const selectCollectionsMap = createSelector(
  [selectCollections],
  (collections) => {
    return collections.reduce(
      (acc: { [title: string]: any }, collection: CollectionsProps) => {
        const { title, items } = collection;
        acc[title.toLowerCase()] = items;
        return acc;
      },
      {},
    );
  },
);
