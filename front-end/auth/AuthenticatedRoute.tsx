import { FC, useEffect, useState } from 'react'
import { useRouter } from 'next/router';

const authenticatedRoute = ( Component: any ): any => {

    const AuthenticatedRoute: FC = () => {
    
        let [ loading, setLoading ] = useState( true );
    
        let router = useRouter();
    
        useEffect(() => {
          
            if ( localStorage.getItem( 'auth' ) === 'true' ) {
                setLoading( false );
            } else {
                router.push('/admin');
            }
            
        }, [])
        
    
        return (
    
            <>
                {
                    loading ? <div /> : <Component />
                }
            </>
    
        )
    }

    return AuthenticatedRoute;
}


export default authenticatedRoute;