import { FC } from 'react';

import Head from 'next/head';

import { Navbar } from '../navbar';
import { Footer } from '../footer';

interface Props {
    children: JSX.Element,
    title?: string,
}

const origin = ( typeof window === 'undefined' ) ? '' : window.location.origin;

export const Layout: FC<Props> = ({ children, title }) => {
    return (
        <>
            <Head>
                <title>{ title || 'Cosapi' }</title>
                <link rel="shortcut icon" href="/logo.svg" />
                <meta name='author' content='Miguel García' />
                <meta name='description' content={`Información sobre Cosapi ${ '- ' + title || null }`} />
                <meta name='keywords' content={`cosapi, venezuela, pdvsa, ${ title || null }`} />
    
                <meta property='og:title' content={`Información sobre Cosapi ${ '- ' + title || null }`} />
                <meta property='og:description' content={`Esta es la página sobre Cosapi ${ '- ' + title || null }`}/>
                <meta property='og:image' content={`${ origin }/main-banner.png`} />
            </Head>
    
            <Navbar />
    
            <main style={{
              marginTop: '6.25rem'
            }}>
                { children }
            </main>

            <Footer />
        </>
    )
}
