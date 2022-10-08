import { FC } from 'react';

import Head from 'next/head';

import { Navbar } from '../navbar';

interface Props {
    children: JSX.Element,
    title?: string,
}

export const Layout: FC<Props> = ({ children, title }) => {
    return (
        <>
            <Head>
                <title>{ title || 'Cosapi'}</title>
                <link rel="shortcut icon" href="/logo.svg" />
                <meta name='author' content='Miguel García' />
                <meta name='description' content={`Información sobre el pokemon ${ title }`} />
                <meta name='keywords' content={`cosapi, venezuela, pdvsa, ${ title }`} />
    
                <meta property='og:title' content={`Información sobre ${ title }`} />
                <meta property='og:description' content={`Esta es la página sobre ${ title }`}/>
                {/* <meta property='og:image' content={`${ origin }/img/banner.png`} /> */}
            </Head>
    
            <Navbar />
    
            <main style={{
              marginTop: '6.25rem'
            }}>
                { children }
            </main>
        </>
    )
}
