"use client";
import Notes from "@/components/Notes";
import ProtectedRoute from "@/components/ProtectedRoute";

const MyNotes = () => {
  const content = [
    "This is my data",
    "ihusfjod jdfgoihj odfjho",
    "hkdxfh bxkjfcv shdfkg",
    "gsiudfh sdofi wy7 uwe9oru",
    "netra hindocha",
    "sohel sheikh",
    "Akshat and Taranjeet",
  ];

  return (
    <ProtectedRoute>
      {content.map((note, index) => (
        <Notes key={index} content={note} />
      ))}
    </ProtectedRoute>
  );
};

export default MyNotes;
