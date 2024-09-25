import NikolasLayout from "@/layouts/NikolasLayout";

const page = async () => {

    const response = await fetch(`https://api.github.com/gists/12bf368add24414ff5d41e7dab2e5bcb`)
    const gist = await response.json()
    const content = gist.files['content.json'].content
    const result = JSON.parse(content)

    return (
        1
    );
};
export default page;
