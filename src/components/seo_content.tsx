import Script from "next/script";


const SEOContent = () => {
    return (
        <Script
            id="json-ld"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
            __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Website",
                "name": "AI Baby Name Generator",
                "url": "https://yourwebsite.com",
                "description": "Find unique baby names with our AI-powered generator.",
                "keywords": "baby names, AI baby names, unique baby names",
            }),
            }}
        />
    );
};

export default SEOContent;
