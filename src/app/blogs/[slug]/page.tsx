import Image from "next/image";
import Layout from "@/components/shared/layout";
import Link from "next/link";
import axios from "axios";
import { notFound } from "next/navigation";
import React from "react";

interface BlogImage {
    imageUrl: {
      original: string;
      key: string
    };
    altText: string;
  }
  
  interface BlogData {
    _id: string;
    urlSlug: string;
    title: string;
    shortDescription: string;
    metaData: {
        title: string,
        keyword: string,
        description: string
    }
    body: {
      blocks: Array<{
        type: string;
        id: string;
        data: {
          level?: number;
          text?: string;
          style?: string;
          items?: string[];
          caption?: string;
          file?: { url?: string };
          title?: string;
          message?: string;
          code?: string;
          content?: string[][];
        };
        tunes?: {
          textVariant?: string;
        };
      }>;
    };
    writer: {
      name: string,
      description: string
      image: BlogImage;
    }
    activityDate: string;
    images: BlogImage;
  }

  type BlogDetailPageProps = {
    params: Promise<{ slug: string[] }>;
  };  


  export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
    const { slug } = await params;

  // Fetch blog details and related blog list in a single API call
  const blogResponse = await axios.get(
    `https://api.tablacuisine.com/api/website/activity/${slug}?website=TABLAFRANCHISE`
  );
  const blog:BlogData = blogResponse.data?.data;
  if (!blog) {
    notFound(); // Handle if blog is not found
  }

  // Fetch the blog list (other blog posts)
  const blogDetails = await axios.get(
    `https://api.tablacuisine.com/api/website/activity?pagination=true&type=BLOG&page=1&limit=6&website=TABLAFRANCHISE`
  );

  const blogList: BlogData[] = blogDetails.data.data.filter(
    (res: BlogData) => res._id !== blog._id
  );

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  return (
    <>
        <Layout>
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex mt-30 pt-6 bread-outer" aria-label="Breadcrumb">
            <ol className=" inline-flex flex-wrap items-start space-x-1 md:space-x-2 rtl:space-x-reverse">
              <li className="inline-flex items-center">
                <Link href="/" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-red-900 dark:text-gray-400 dark:hover:text-white">
                  <svg className="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                  </svg>
                  Home
                </Link>
              </li>
              <li>
                <div className="flex items-center">
                  <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                  </svg>
                  <Link href="/blogs" className="ms-1 text-sm font-medium text-gray-700 hover:text-red-900 md:ms-2 dark:text-gray-400 dark:hover:text-white">Blogs</Link>
                </div>
              </li>
              <li className="hidden md:block" aria-current="page">
                <div className="flex items-center">
                  <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                  </svg>
                  <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">{blog?.urlSlug}</span>
                </div>
              </li>
            </ol>
          </nav>
        </div>

        <section id="blog-details" className="blogdetails-area pb-6 pt-6">
          <div className="max-w-7xl px-4 mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 detail-outer">
            <div className="md:col-span-2 blog-left">
              <div className="content-img relative mb-4">
                <Image
                  width={900}
                  height={400}
                  className="object-cover mb-2 rounded-xl"
                  src={blog?.images?.imageUrl?.original}
                  alt={blog?.images?.altText}
                />
                <div className="detail-date">
                  <span className="day">{new Date(blog?.activityDate).getDate()}</span>
                  <span className="month">{monthNames[new Date(blog?.activityDate).getMonth()]}</span>
                </div>
              </div>

              {blog?.body?.blocks.map((elem) => {
                switch (elem.type) {
                  case 'header':
                    return (
                      <React.Fragment key={elem.id}>
                        {elem.data.level === 1 && (
                          <h1 id={elem.id} className="text-3xl font-semibold mb-4 text-red-800" dangerouslySetInnerHTML={{ __html: elem.data.text || '' }} />
                        )}
                        {elem.data.level === 2 && (
                          <h2 id={elem.id} className="text-2xl font-semibold mb-4 text-gray-800" dangerouslySetInnerHTML={{ __html: elem.data.text || ''}} />
                        )}
                        {elem.data.level === 3 && (
                          <h3 id={elem.id} className="text-xl font-semibold mb-4 text-gray-800" dangerouslySetInnerHTML={{ __html: elem.data.text || ''}} />
                        )}
                        {elem.data.level === 4 && (
                          <h4 id={elem.id} className="text-lg font-semibold mb-4 text-gray-800" dangerouslySetInnerHTML={{ __html: elem.data.text || ''}} />
                        )}
                        {elem.data.level === 5 && (
                          <h5 id={elem.id} className="text-md font-semibold mb-4 text-gray-800" dangerouslySetInnerHTML={{ __html: elem.data.text || ''}} />
                        )}
                        {elem.data.level === 6 && (
                          <h6 id={elem.id} className="text-sm font-semibold mb-4 text-gray-800" dangerouslySetInnerHTML={{ __html: elem.data.text || ''}} />
                        )}
                      </React.Fragment>
                    );

                  case 'paragraph':
                    return (
                      <React.Fragment key={elem.id}>
                        {elem.tunes?.textVariant === '' && (
                          <p id={elem.id} className="text-gray-800 mb-4" dangerouslySetInnerHTML={{ __html: elem.data.text || ''}} />
                        )}
                        {elem.tunes?.textVariant === 'call-out' && (
                          <p id={elem.id} className="call-out text-gray-800 mb-4" dangerouslySetInnerHTML={{ __html: elem.data.text || ''}} />
                        )}
                        {elem.tunes?.textVariant === 'citation' && (
                          <p id={elem.id} className="italic text-gray-800 mb-4" dangerouslySetInnerHTML={{ __html: elem.data.text || ''}} />
                        )}
                        {elem.tunes?.textVariant === 'details' && (
                          <p id={elem.id} className="text-gray-800 mb-4" dangerouslySetInnerHTML={{ __html: elem.data.text || ''}} />
                        )}
                      </React.Fragment>
                    );

                  case 'list':
                    return (
                      <React.Fragment key={elem.id}>
                        {elem.data.style === 'unordered' && (
                          <ul id={elem.id} className="text-gray-500 unordered-list pl-5">
                            {elem.data.items?.map((item, i) => (
                              <li key={i} className="mb-3" dangerouslySetInnerHTML={{ __html: item }} />
                            ))}
                          </ul>
                        )}
                        {elem.data.style === 'ordered' && (
                          <ol id={elem.id} className="text-gray-500 ordered-list pl-5">
                            {elem.data.items?.map((item, i) => (
                              <li key={i} className="mb-3" dangerouslySetInnerHTML={{ __html: item }} />
                            ))}
                          </ol>
                        )}
                      </React.Fragment>
                    );

                  case 'image':
                    return (
                      <div id={elem.id} className="position-relative" key={elem.id}>
                        <caption dangerouslySetInnerHTML={{ __html: elem.data.caption || ''}} />
                        <Image className="blog-image max-w-full rounded-lg mb-4" src={elem.data.file?.url || ''} alt="blog-img" />
                      </div>
                    );

                  case 'warning':
                    return (
                      <div id={elem.id} className="warning bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-4" key={elem.id}>
                        <i className="material-icons">report_problem</i>
                        <div>
                          <p dangerouslySetInnerHTML={{ __html: elem.data?.title || ''}} />
                          <p dangerouslySetInnerHTML={{ __html: elem.data?.message || ''}} />
                        </div>
                      </div>
                    );

                  case 'code':
                    return (
                      <div id={elem.id} className="code bg-gray-800 text-white p-4 rounded mb-4" key={elem.id}>
                        <code dangerouslySetInnerHTML={{ __html: elem.data.code || ''}} />
                      </div>
                    );

                  case 'table':
                    return (
                      <table id={elem.id} className="mb-4 mt-4 table-auto border-collapse w-full" key={elem.id}>
                        <thead>
                          <tr className="bg-gray-200">
                            {elem.data.content?.[0].map((column, colIndex) => (
                              <th key={colIndex} className="border px-4 py-2" dangerouslySetInnerHTML={{ __html: column }} />
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {elem.data.content?.slice(1).map((row, rowIndex) => (
                            <tr key={rowIndex}>
                              {row.map((column, colIndex) => (
                                <td key={colIndex} className="border px-4 py-2" dangerouslySetInnerHTML={{ __html: column }} />
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    );

                  default:
                    return null;
                }
              })}

              <div className="comments-area my-4 p-4 bg-gray-200 rounded-lg flex items-start">
                
                <Image
                  width={50}
                  height={30}
                  className="rounded-t-2xl w-full object-cover"
                  src={blog?.writer?.image?.imageUrl?.key}
                  alt={blog?.writer?.image?.altText}
                />
                <div className="w-full">
                  <p className="font-semibold">{blog?.writer?.name}</p>
                  <p className="text-gray-600 text-[14px]">
                  {blog?.writer?.description}
                  </p>
                </div>
              </div>

              <div className="blog-form">
                {/* <Form /> */}
              </div>
            </div>

            {/* Featured Posts */}
            <div className="p-6 pt-0 featured-posts">
              <h2 className="text-2xl font-semibold text-red-900 mb-4">
                - Featured Posts
              </h2>
              <div className="featured-posts-inner pr-4">
                {blogList.map((blog) => (
                  <div key={blog._id} className="flex items-start flex-col space-y-4 pb-4 border-b border-gray-200">
                    <Image
                      width={400}
                      height={140}
                      className="object-cover mb-2 rounded-lg"
                      src={blog.images.imageUrl.original}
                      alt={blog.images.altText || 'Blog Image'}
                    />
                    <div>
                      <h3 className="text-lg font-semibold line-clamp-2">
                        <Link href={`/blogs/${blog.urlSlug}`} className="hover:text-blue-500 transition">
                          {blog?.title}
                        </Link>
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-2">
                        {blog.shortDescription}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
      </Layout>
    </>
  );
}


export async function generateMetadata({ params }: BlogDetailPageProps) {

  const { slug } = await params;

  // Fetch blog details and related blog list in a single API call
  const blogResponse = await axios.get(
    `https://api.tablacuisine.com/api/website/activity/${slug}?website=TABLAFRANCHISE`
  );
  const blog:BlogData = blogResponse.data.data;
  if (!blog) {
    notFound(); // Handle if blog is not found
  }

  return {
    title: `${blog?.metaData?.title}`,
    description: blog?.metaData?.description,
    keywords: blog?.metaData?.keyword,
    openGraph: {
      title: blog?.metaData?.title,
      description: blog?.metaData?.description
    },
  };
}
