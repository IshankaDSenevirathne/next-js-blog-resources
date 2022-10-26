import Link from 'next/link';
import { use } from 'react';

async function getPosts() {
    let posts = await fetch('https://dummyjson.com/posts?limit=3');
    return posts.json();
}

const PostListLayout = ({ children }: { children: React.ReactNode }) => {
    let { posts } = use(getPosts());
    return (
        <div>
            <ul>
                {posts.map((post: any, idx: number) => (
                    <li key={idx}>
                        <Link href={`/posts/${post.id}`}>{post.title}</Link>
                    </li>
                ))}
            </ul>
            {children}
        </div>
    );
};

export default PostListLayout;
