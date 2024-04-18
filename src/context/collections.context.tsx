import { createContext, useEffect } from "react";
import { useState } from "react";
import type { CollectionPropsRoot } from "../interfaces/collection.props";
import SHOP_DATA from "../shop-data";
import {
  addCollectionAndDocuments,
  getCategoriesAndDocuments,
} from "../utils/firebase/firebase.utils";

interface ShopContextType {
  collectionsMap: CollectionPropsRoot | {};
}

export const CollectionsContext = createContext<ShopContextType>({
  collectionsMap: [],
});

export function CollectionsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [collectionsMap, setCollectionsMap] = useState<
    CollectionPropsRoot | {}
  >(SHOP_DATA);

  useEffect(() => {
    async function getCollectionsMap() {
      const collectionMap = await getCategoriesAndDocuments();
      setCollectionsMap(collectionMap);
    }
    getCollectionsMap();
  }, []);

  const value = { collectionsMap, setCollectionsMap };

  return (
    <CollectionsContext.Provider value={value}>
      {children}
    </CollectionsContext.Provider>
  );
}
