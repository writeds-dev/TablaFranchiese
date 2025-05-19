import Image from "next/image";
import Layout from "@/components/shared/layout";
import Link from "next/link";
import axios from "axios";
import { Metadata } from "next";

interface BlogPost {
  isFav: boolean;
  _id: string;
  urlSlug: string;
  title: string;
  shortDescription: string;
  images: {
    imageUrl: {
      original: string;
    };
    altText: string;
  };
  type: "BLOG";
  createdAt: string;
  updatedAt: string;
}

async function getBlogs() {
  try {
    const response = await axios.get(
      "https://api.tablacuisine.com/api/website/activity?pagination=true&type=BLOG&page=1&limit=5000&website=TABLAFRANCHISE"
    );
    return response.data?.data || [];
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return [];
  }
}

export const metadata: Metadata = {
  title: "Blog",
  description: "Read the latest blog posts",
};

export default async function Blog() {
  const blogs: BlogPost[] = await getBlogs();

  return (
    <Layout>
      <section id="blog" className="blog-area mt-30 pb-16 pt-6">
        <div className="max-w-6xl mx-auto px-2">
          <div className="flex justify-start flex-wrap">
            {blogs.map((blog) => (
              <div key={blog._id} className="group w-full max-lg:max-w-xl md:w-1/3 p-3">
                <div className="blog-list border border-gray-300 rounded-2xl">
                  <div className="flex items-center overflow-hidden image-outer">
                    <Link href={"/blogs/" + blog.urlSlug}>
                      <Image
                        width={350}
                        height={230}
                        className="rounded-t-2xl w-full object-cover"
                        src={blog.images.imageUrl?.original}
                        alt={blog?.images?.altText}
                      />
                    </Link>
                  </div>
                  <div className="p-4 transition-all duration-300 rounded-b-2xl blog-content-card">
                    <h4 className="text-gray-900 font-medium mb-4 line-clamp-2">
                      <Link href={"/blogs/" + blog.urlSlug} className="text-xl cursor-pointer leading-8 font-normal">
                        {blog?.title}
                      </Link>
                    </h4>
                    <p className="text-gray-500 leading-6 mb-2 line-clamp-3">
                      {blog?.shortDescription}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
