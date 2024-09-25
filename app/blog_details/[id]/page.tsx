import Link from "next/link";
import NikolasLayout from "../../../layouts/NikolasLayout";


const BlogDetailsPage = async ({params}: any) => {
    const blog_id = params.id;
    const response = await fetch(`https://api.github.com/gists/12bf368add24414ff5d41e7dab2e5bcb`);
    const gist = await response.json();
    const content = gist.files['content.json'].content;
    const parsedContent = JSON.parse(content);
    const blogData = parsedContent.find(item => item.key === "BLOG")
    const blogDetails = blogData.data.data[parseInt(blog_id)-1]

    if(!blogData) {
        return (
            <div>
                Loading ...
            </div>
        )
    }

    return (
        <>
            <NikolasLayout>
                <div className="nicolas_sm_blog_details">
                    <div className="nicolas_sm_page_title">
                        <div className="container">
                            <div className="page_title_in">
                                <span>BLOG</span>
                                <p>{blogDetails.spoiler_date}</p>
                                <h3>
                                    {blogDetails.spoiler}
                                </h3>
                                <div className="info_box">
                                    <div className="info">
                                        <div className="image">
                                            <img src="/img/blog/avatar.jpg" alt={7}/>
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
                        <img src={`/img/blog/blog_${blog_id}.jpg`} alt={8}/>
                    </div>
                    {/* Details */}
                    <div className="container">
                        <div className="extra_container">
                            <div className="blog_details">
                                <div className="blog_details ">
                                    <div className="title md:my-8 text-justify">
                                        {blogDetails.content.map((item) => (
                                            <div>
                                                {item.include_header === "TRUE" && (<h3 className='text-2xl'>{item.key}</h3>)}
                                                {item.is_list !== 'TRUE' && (<div className='my-4'>
                                                    {item.data}
                                                </div>)}
                                                {item.is_list === 'TRUE' && (
                                                    <div className='my-4'>
                                                        {item.data}
                                                        <div className='flex justify-end'>
                                                            <div className='w-11/12'>
                                                                <ul className='list-disc'>
                                                                    {item.list_item.map((item) => (
                                                                        <li>{item}</li>
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
                    {/* /Details */}
                </div>
            </NikolasLayout>
        </>
    )
}

export default BlogDetailsPage
