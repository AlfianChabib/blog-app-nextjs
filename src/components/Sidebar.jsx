"use client";
import Link from "next/link";
import ContentfulImage from "./ContentfulImage";

export default function Sidebar({ item }) {
  return (
    <Link
      href={`/blog/${item.sys.id}`}
      className="flex flex-col w-full h-24 xl:h-36 relative rounded-xl overflow-hidden"
    >
      <div className="w-full h-full absolute flex overflow-hidden">
        <ContentfulImage
          src={item.fields.image.fields.file.url}
          alt={item.fields.image.fields.title}
          width={item.fields.image.fields.file.details.image.width}
          height={item.fields.image.fields.file.details.image.height}
          className="w-full object-cover"
          quality="100"
        />
      </div>
      <div className="grid-block w-full h-full flex flex-col py-1 xl:py-2 px-2 xl:px-4 justify-between">
        <h2 className="text-xl font-bold">{item.fields.author}</h2>
        <div className="w-full h-10 overflow-hidden">
          <p className="text-sm">{item.fields.title}</p>
        </div>
      </div>
    </Link>
  );
}
