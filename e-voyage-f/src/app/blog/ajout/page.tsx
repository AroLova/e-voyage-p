// app/visiteur/ajout/PostForm.tsx
import { getServerSession } from "next-auth";
import { authOptions } from '../../api/auth/[...nextauth]/authOptions';
import PostCreation from './PostCreation'; 

const PostForm = async () => {
    const session = await getServerSession(authOptions);
    const userData = session?.user || null;
    
    return <PostCreation userData={userData} />;
};

export default PostForm;
