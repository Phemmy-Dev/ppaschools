import { Helmet } from 'react-helmet-async';

const SEO = ({
    title = "Profound Performance Academy",
    description = "Quality Nursery & Primary Education in Jikwoyi, Abuja. Building the total child through practical teaching since 2011.",
    keywords = "school, nursery, primary school, education, Jikwoyi, Abuja, Nigeria, affordable school, best school in Abuja",
    image = "/favicon.jpeg",
    url = "https://ppaschools.com.ng",
    type = "website",
    children
}) => {
    const fullTitle = title === "Profound Performance Academy"
        ? title
        : `${title} | Profound Performance Academy`;

    const siteUrl = "https://ppaschools.com.ng";

    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <title>{fullTitle}</title>
            <meta name="title" content={fullTitle} />
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="author" content="Profound Performance Academy" />
            <meta name="robots" content="index, follow" />
            <link rel="canonical" href={`${siteUrl}${url === siteUrl ? '' : url}`} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={`${siteUrl}${url === siteUrl ? '' : url}`} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={`${siteUrl}${image}`} />
            <meta property="og:site_name" content="Profound Performance Academy" />
            <meta property="og:locale" content="en_NG" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={`${siteUrl}${url === siteUrl ? '' : url}`} />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={`${siteUrl}${image}`} />

            {/* Additional SEO */}
            <meta name="geo.region" content="NG-FC" />
            <meta name="geo.placename" content="Jikwoyi, Abuja" />
            <meta name="geo.position" content="8.975;7.346" />
            <meta name="ICBM" content="8.975, 7.346" />

            {/* Theme */}
            <meta name="theme-color" content="#1a365d" />
            <meta name="msapplication-TileColor" content="#C9A227" />

            {children}
        </Helmet>
    );
};

export default SEO;
