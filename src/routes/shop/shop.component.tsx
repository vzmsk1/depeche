import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import CollectionsPreview from "../../components/collections-preview/collections-preview.component";
import { fetchCollectionsStart } from "../../store/collections/collection.slice";
import Collection from "../collection/collection.component";

export default function Shop() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCollectionsStart());
  }, []);

  return (
    <Routes>
      <Route index element={<CollectionsPreview />} />
      <Route path=":collection" element={<Collection />} />
    </Routes>
  );
}
