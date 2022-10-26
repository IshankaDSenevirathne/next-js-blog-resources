import { NextPage } from 'next';
import { use } from 'react';
const getPost = async (id: number) => {
    let post = await fetch(`https://dummyjson.com/posts/${id}`);
    return post.json();
};

const Page: NextPage = ({ params }: any) => {
    let id = params.id;
    let post = use(getPost(id));
    return <div>{post.body}</div>;
};

export default Page;
