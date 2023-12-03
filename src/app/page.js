import { client } from "@/lib/contentful";
import Card from "@/components/Card";
import Navbar from "@/components/Navbar";

async function getBlogs() {
  const response = await client.getEntries({
    content_type: "blog",
  });

  return response.items;
}

export default async function Home() {
  const blogs = await getBlogs();

  console.log(blogs);

  return (
    <main className="flex relative container min-h-screen flex-col">
      <Navbar />
      <section className="h-72">
        <div className="flex h-full flex-col items-center justify-center gap-4 pt-16">
          <h1 className="text-5xl">Blog</h1>
          <p className="text-lg text-gray-400">
            Get all the latest news, articles, podcast from Amplifidor
          </p>
        </div>
      </section>
      <section className="blog-list grid grid-cols-3 auto-cols-fr gap-6">
        {blogs.map((blog, i) => (
          <Card blogs={blogs} key={i} blog={blog} />
        ))}
      </section>
      <div></div>
    </main>
  );
}
