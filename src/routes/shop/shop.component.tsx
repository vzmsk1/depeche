import { Route, Routes } from "react-router-dom";
import CollectionsPreview from "../../components/collections-preview/collections-preview.component";
import Collection from "../collection/collection.component";

export default function Shop() {
  return (
    <Routes>
      <Route index element={<CollectionsPreview />} />
      <Route path=":collection" element={<Collection />} />
    </Routes>
  );
}
