// "use client";
import Link from "next/link";
import ContentfulImage from "./ContentfulImage";

export default function Card({ blog }) {
  console.log(blog);

  return (
    <Link
      href={`/blog/${blog.sys.id}`}
      className="relative flex flex-col w-full min-h-[25rem] h-96 rounded-xl"
    >
      <div className="w-full h-full absolute flex rounded-xl overflow-hidden">
        <ContentfulImage
          src={blog.fields.image.fields.file.url}
          alt={blog.fields.image.fields.title}
          width={blog.fields.image.fields.file.details.image.width}
          height={blog.fields.image.fields.file.details.image.height}
          className="w-full object-cover"
          quality="100"
        />
      </div>
      <div className="grid-block w-full h-full flex flex-col rounded-xl px-6 py-8 justify-between">
        <h2 className="leading-9 text-3xl font-bold">{blog.fields.author}</h2>
        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            <p className="border border-white px-3 py-[2px] rounded-full">
              {blog.fields.createAt}
            </p>
            <p className="flex items-center gap-1 border text-[#70def7] border-[#70def7] px-3 py-[2px] rounded-full ">
              Tech Stack
            </p>
          </div>
          <p className="">{blog.fields.title}</p>
        </div>
      </div>
    </Link>
  );
}

// https://amplifidor-landing.webflow.io/blog
// https://kentcdodds.com/blog
