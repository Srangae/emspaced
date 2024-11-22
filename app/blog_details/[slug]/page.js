import NikolasLayout from "../../../layouts/NikolasLayout";
import DetailsClient from "@/app/blog_details/[slug]/DetailsClient";

export async function generateMetadata({ params }) {
    const { slug } = params;

    // Fetch metadata from GitHub Gist
    const response = await fetch(`https://api.github.com/gists/12bf368add24414ff5d41e7dab2e5bcb`);
    const gist = await response.json();
    const content = gist.files['content.json'].content;
    const parsedContent = JSON.parse(content);
    const blogData = parsedContent.find(item => item.key === "BLOG");
    const details = blogData.data.data.find(blog => blog.slug === slug);

    if (!details) {
        return {
            title: "Blog Not Found",
            description: "The blog you are looking for does not exist.",
        };
    }

    return {
        title: details.metadata_title,
        description: details.metadata_description,
    };
}

const BlogDetailsPage = ({ params }) => {
    const { slug } = params;

    return (
        <NikolasLayout>
            <DetailsClient slug={slug} />
        </NikolasLayout>
    );
};

export default BlogDetailsPage;
