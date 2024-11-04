import { getServerSession } from "next-auth";
import { authOptions } from '@/app/api/auth/[...nextauth]/authOptions';
import HomePage from "./HomePage"

const PostForm = async () => {
    const session = await getServerSession(authOptions);
    const userData = session?.user || null;

    return <HomePage userData={userData} />;
};

export default PostForm;

