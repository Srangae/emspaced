'use client';
import { useEffect, useState } from 'react';
import NikolasLayout from "../../../layouts/NikolasLayout";

const BlogDetailsPage = ({ params }) => {
    const blog_id = params.id;
    const [blogDetails, setBlogDetails] = useState(null);
    const [metadata, setMetadata] = useState({ title: '', description: '' });

    useEffect(() => {
        const fetchBlogDetails = async () => {
            const response = await fetch(`https://api.github.com/gists/12bf368add24414ff5d41e7dab2e5bcb`);
            const gist = await response.json();
            const content = gist.files['content.json'].content;
            const parsedContent = JSON.parse(content);
            const blogData = parsedContent.find(item => item.key === "BLOG");
            const details = blogData.data.data[parseInt(blog_id) - 1];

            if (details) {
                setBlogDetails(details);
                setMetadata({
                    title: details.metadata_title,
                    description: details.metadata_description // Concatenate all content for description
                });
            }
        };

        fetchBlogDetails();
    }, [blog_id]);

    // Update the document title and meta description dynamically
    useEffect(() => {
        document.title = metadata.title || "Default Title";
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute("content", metadata.description || "Default Description");
        }
    }, [metadata]);

    if (!blogDetails) {
        return <div>Loading ...</div>;
    }

    return (
        <NikolasLayout>
            <div className="nicolas_sm_blog_details">
                <div className="nicolas_sm_page_title">
                    <div className="container">
                        <div className="page_title_in">
                            <span>BLOG</span>
                            <p>{blogDetails.spoiler_date}</p>
                            <h3>{blogDetails.spoiler}</h3>
                            <div className="info_box">
                                <div className="info">
                                    <div className="image">
                                        <img src="/img/blog/avatar.jpg" alt="blog_avatar_7" />
                                    </div>
                                    <div className="title">
                                        <span>Written by</span>
                                        <h3>Admin</h3>
                                    </div>
                                </div>
                                <div className="title">
                                    <span>Viewed</span>
                                    <h3>{blogDetails.view_time}</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hero_image">
                    <img src={`/img/blog/blog_${blog_id}.jpg`} alt="blog_avatar_8" />
                </div>
                <div className="container">
                    <div className="extra_container">
                        <div className="blog_details">
                            <div className="blog_details">
                                <div className="title md:my-8 text-justify">
                                    {blogDetails.content.map((item, index) => (
                                        <div key={index}>
                                            {item.include_header === "TRUE" && (<h3 className='text-2xl'>{item.key}</h3>)}
                                            {item.is_list !== 'TRUE' && (<div className='my-4'>{item.data}</div>)}
                                            {item.is_list === 'TRUE' && (
                                                <div className='my-4'>
                                                    {item.data}
                                                    <div className='flex justify-end'>
                                                        <div className='w-11/12'>
                                                            <ul className='list-disc'>
                                                                {item.list_item.map((listItem, listIndex) => (
                                                                    <li key={listIndex}>{listItem}</li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </NikolasLayout>
    );
};

export default BlogDetailsPage;
