import React from 'react'
import { getServerSession } from "next-auth";
import { authOptions } from '../api/auth/[...nextauth]/authOptions';
 

const page = async () => {
    const session = await getServerSession(authOptions);
    const userData = session?.user || null;
        return(
            <div>OKOK {JSON.stringify( userData )}</div>
        )
};

export default page;
