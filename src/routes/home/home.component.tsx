import CollectionsGrid from "../../components/CollectionsGrid/collections-grid.component";

export default function Home() {
  const collections = [
    {
      id: 1,
      heading: "eyes",
      message: "create high-performance looks—from classic to graphic",
      imageDescription: "eye products",
      imageSrc:
        "https://i.ibb.co/gRSyyp3/70454e6ad8697da79294778929003c3d3fb-1.webp",
    },
    {
      id: 2,
      heading: "lips",
      message:
        "swipe on sheer color, a tantalizing scent & mega glossy shine in no time",
      imageDescription: "lip products",
      imageSrc:
        "https://i.ibb.co/v4nFH1r/94791070d793c5c268f7d97f4d5d6492.webp",
    },
    {
      id: 3,
      heading: "face",
      message:
        "meet the long-wear foundations that’s actually high-performance skincare",
      imageDescription: "face products",
      imageSrc:
        "https://i.ibb.co/sswY6wQ/f5819864b58c3a01cd9c445ac1c34d68.webp",
    },
    {
      id: 4,
      heading: "best sellers",
      message: "meet our best sellers",
      imageDescription: "best sellers",
      imageSrc:
        "https://i.ibb.co/V9VDh1S/c02f25099fc2984c2da5b1638e9c1ce4.webp",
    },
  ];

  return <CollectionsGrid collections={collections} />;
}
