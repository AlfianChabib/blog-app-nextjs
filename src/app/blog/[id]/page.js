import Navbar from "@/components/Navbar";
import blogbg from "#/public/blogbg.webp";
import Image from "next/image";
import { client } from "@/lib/contentful";
import ContentfulImage from "@/components/ContentfulImage";
import { FiInstagram, FiLinkedin } from "react-icons/fi";
import { FiFacebook } from "react-icons/fi";
import RichText from "@/components/RichText";
import Sidebar from "@/components/Sidebar";

async function getBlog(id) {
  const response = await client.getEntry(id);
  return response;
}

async function getSidebar() {
  const response = await client.getEntries({
    content_type: "blog",
  });

  return response.items;
}

export default async function Page({ params }) {
  const blog = await getBlog(params.id);
  const sidebar = await getSidebar();
  const sidebarList = [];

  sidebar.forEach((item) => {
    if (item.sys.id !== params.id) {
      sidebarList.push(item);
    }
  });

  return (
    <main className="flex container min-h-screen flex-col">
      <Navbar />
      <section className="flex w-full absolute left-0 h-[30rem] -z-10">
        <div className="flex w-full relative">
          <span className="w-full h-full absolute bg-black/40 backdrop-blur-md" />
          <Image src={blogbg} alt="img" className="w-full object-cover" />
        </div>
      </section>
      <section className="flex w-full flex-col items-center justify-center my-20 gap-4">
        <h1 className="text-3xl w-2/3 text-center">{blog.fields.title}</h1>
        <div className="flex gap-4">
          <p className="border border-white px-3 py-[2px] rounded-full">
            {blog.fields.createAt}
          </p>
          <p className="flex items-center gap-1 border text-[#70def7] border-[#70def7] px-3 py-[2px] rounded-full ">
            Tech Stack
          </p>
        </div>
      </section>
      <div className="flex w-full h-96 rounded-3xl overflow-hidden">
        <ContentfulImage
          src={blog.fields.image.fields.file.url}
          alt={blog.fields.image.fields.title}
          width={blog.fields.image.fields.file.details.image.width}
          height={blog.fields.image.fields.file.details.image.height}
          className="w-full object-cover object-center"
          quality="100"
        />
      </div>
      <section className="flex gap-10 my-8">
        <div className="flex flex-col mt-2 gap-4">
          <FiInstagram size={24} />
          <FiFacebook size={24} />
          <FiLinkedin size={24} />
        </div>
        <div className="flex flex-col gap-4 content">
          <RichText content={blog.fields.mainBlog} />
          <div className="flex gap-6 w-full border-t border-white pt-4 place-content-end">
            <FiInstagram size={24} />
            <FiFacebook size={24} />
            <FiLinkedin size={24} />
          </div>
        </div>
        <div className="flex gap-4 flex-col w-3/4">
          {sidebarList.map((item, i) => (
            <Sidebar item={item} key={i} />
          ))}
        </div>
      </section>
    </main>
  );
}
