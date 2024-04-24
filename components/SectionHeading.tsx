"use client";
export default function SectionHeading({ name }: { name: string }) {
  return (
    <h2 className="text-3xl font-medium capitalize mb-8 text-center">{name}</h2>
  );
}
