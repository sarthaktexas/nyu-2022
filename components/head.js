import Head from 'next/head'

export default function HeadObject({children}) {
    const title = "NYU Creative Portfolio";
    const description = "Roses are red, violets are blue, I really hope I get into NYU.";
    const keywords = "nyu, ima, portfolio, creative";
    const author = "Sarthak Mohanty";
    const twitter = "@sarthaktexas";
    //const url = "http://localhost:3000"; // This is your og:url or domain (optional but recommended)
    //const image = "/ogimage.png"; // This is your OpenGraph image
    return (
        <Head>
            <meta charSet="utf-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width,initial-scale=1" />
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="author" content={author} />
            {/* {url ? <meta property="og:url" content={url} /> : ''} */}
            <meta property="og:type" content="website" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            {/* <meta property="og:image" content={image} /> */}
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:site" content={twitter} />
            <meta name="twitter:creator" content={twitter} />
            {/* Add analytics here */}
            {children}
        </Head>
    )
}
