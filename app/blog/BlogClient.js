'use client'
import {useEffect, useState} from "react";
import NikolasLayout from "@/layouts/NikolasLayout";
import {nicolasUtility} from "@/utility";
import Link from "next/link";
import Image from "next/image";

export default function BlogPage() {
    const [result, setResult] = useState(null);
    useEffect( () => {
        nicolasUtility.dataImage();
        const fetchGistData = async () => {
            try {
                const response = await fetch(`https://api.github.com/gists/12bf368add24414ff5d41e7dab2e5bcb`);
                const gist = await response.json();
                const content = gist.files['content.json'].content;
                const parsedContent = JSON.parse(content);
                const blogData = parsedContent.find(item => item.key === "BLOG")
                setResult(blogData.data);
            } catch (error) {
                console.error("Error fetching gist data:", error);
            }
        };
        fetchGistData();
    }, []);

    if (!result) {
        return <div>Loading...</div>;
    }

    return (
        <NikolasLayout>
            {/* Page_title */}
            <div className="nicolas_sm_page_title">
                <div className="container">
                    <div className="page_title_in">
                        <h3>
              <span className="underline">
                {result.title} <br/>
              </span>
                            <span className="stroke_text">{result.title_description}</span>
                        </h3>
                    </div>
                </div>
            </div>
            {/* /Page_title */}
            {/* Blog */}
            <div className="nicolas_sm_blog no_padding blogpage">
                <div className="container">
                    <div className="extra_container">
                        <div className='grid md:grid-cols-3 gap-4 items-center justify-center'>
                            {result.data.map((content,index ) =>(
                                <div className='flex flex-col gap-4 border-2 rounded-xl p-4 shadow-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:bg-slate-200 duration-300'>
                                    <Link href={`blog_details/${content.slug}`}>
                                        <Image src={`/img/blog/blog_${index+1}.jpg`} width={400} height={400}/>
                                        <div className='font-bold text-primary-900'>
                                            {content.spoiler}
                                        </div>
                                        <div className='text-sm text-secondary-600'>
                                            {content.spoiler_date}
                                        </div>
                                    </Link>

                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            {/* /Blog */}
        </NikolasLayout>
    )
}
