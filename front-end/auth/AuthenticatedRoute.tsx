import React from 'react';
import router from 'next/router';

const authenticatedRoute = ( Component: any ) => {

    class AuthenticatedRoute extends React.Component {

        state = {
            loading: true,
        };

        componentDidMount() {
            if ( localStorage.getItem( 'auth' ) === 'true' ) {
                this.setState({ loading: false });
            } else {
                router.push('/admin');
            }
        }

        render() {
            const { loading } = this.state;

            if ( loading ) {
                return <div />;
            }

            return <Component {...this.props} />;
        }
    }

    return AuthenticatedRoute;
};

export default authenticatedRoute;

/* import { FC, useEffect, useState } from 'react'
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


export default authenticatedRoute; */