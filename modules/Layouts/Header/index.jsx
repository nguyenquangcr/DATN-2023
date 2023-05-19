import React, {Fragment, useEffect} from 'react';
import {connect} from 'react-redux';
import Head from 'next/head';
import {useRouter} from 'next/router';

// Assets
import {getObjectPropSafely, gtagInject, gtagTrackingEvent} from 'Libs/utils';
import Favicon from 'Static/favicon.ico';

const Header = (props) => {
    const router = useRouter();
    const document = getObjectPropSafely(() => props.document, null);
    const og = getObjectPropSafely(() => document.og, null);
    const tags = getObjectPropSafely(() => og.tags, null) || [];

    let title = getObjectPropSafely(() => og.title, null) || document.defaultTitle;
    let description = getObjectPropSafely(() => og.description, null) || document.defaultDescription;
    let keywords = 'mẹo vặt, mẹo vặt hay, chia sẻ mẹo vặt, đời sống, khám phá, chuyện lạ, làm đẹp, thời trang, nấu ăn, khéo tay';

    /*if (title) {
        title = title.split(' ', 12).join(' ');
    }*/

    if (description) {
        description = description.split(' ', 25).join(' ');
    }

    if (tags && tags.length) {
        keywords = '';

        tags.map((tag) => {
            if (tag.name) {
                keywords = keywords ? (keywords + ', ' + tag.name) : tag.name;
            }
        });
    }

    const breadcrumbStructure = getObjectPropSafely(() => props.breadcrumbStructure.itemListElement, null)
    && props.breadcrumbStructure.itemListElement.length ? props.breadcrumbStructure : null;

    const json = '{"@context":"http://schema.org","@type":"NewsArticle","name":"meovathay.vn","url":"https://meovathay.vn","address":"","sameAs":["https://www.facebook.com/meovathaymoingay1", "https://www.youtube.com/channel/UCYDyUZJ2T_2tPqwQtJH1EAA"]}';

    const breadcrumbJson = breadcrumbStructure ? JSON.stringify(breadcrumbStructure) : null;

    useEffect(() => {
        try {
            if (!window.GA_INITIALIZED) {
                gtagInject('G-7Y28F7MWLS');
                window.GA_INITIALIZED = true;
            }
        } catch (error) {
            console.error(error);
        }
    }, []);

    useEffect(() => {
        gtagTrackingEvent('event', 'pageview', {
            event_category: 'pageview',
            event_label: router.asPath
        });
    }, [router.asPath]);

    return (
        <Fragment>
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=5, user-scalable=1" />
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
                <link rel="shortcut icon" type="image/x-icon" href={Favicon} />
                <meta name="theme-color" content="#ffffff" />
                <link rel="canonical" href={document.canonical ? document.canonical : 'https://meovathay.vn/'} />
                <link rel="alternate" media="only screen and (max-width: 640px)" href={document.alternate ? document.alternate : 'https://m.meovathay.vn/'} />
                <link rel="alternate" media="handheld" href={document.alternate ? document.alternate : 'https://m.meovathay.vn/'} />
                <link rel="dns-prefetch" href="//www.google-analytics.com" />
                <link rel="dns-prefetch" href="//www.googletagmanager.com" />
                <link rel="dns-prefetch" href="//image.meovathay.vn" />

                {/*<meta property="fb:app_id" content="697962497080802" />*/}
                {
                    title ? (
                        <meta property="og:title" itemProp="headline" content={title} />
                    ) : null
                }
                <meta property="og:type" content="article" />
                {
                    description ? (
                        <meta property="og:description" itemProp="description" content={description} />
                    ) : null
                }
                {
                    og.images ? (
                        og.images.map((image, key) => {
                            return (
                                <Fragment key={'og-image-' + key}>
                                    <meta property="og:image" itemProp="thumbnailUrl" content={image} />
                                    <meta name="twitter:image" content={image} />
                                </Fragment>
                            );
                        })
                    ) : null
                }

                {
                    og.updatedTime ? (
                        <>
                            <meta property="og:updated_time" content={og.updatedTime} />
                            <meta property="article:published_time" content={og.updatedTime} />
                            <meta property="article:modified_time" content={og.updatedTime} />
                        </>
                    ) : null
                }

                {
                    og.url ? (
                        <meta property="og:url" itemProp="url" content={og.url} />
                    ) : null
                }

                {
                    og.tags && og.tags.length ? (
                        og.tags.map((tag, key) => {
                            if (tag.name) {
                                return <meta key={'tag-' + key} property="article:tag" content={tag.name} />;
                            }
                        })

                    ) : null
                }

                <meta content="news" itemProp="genre" name="medium" />
                <meta content="vi-VN" itemProp="inLanguage" />
                <meta content="Mẹo vặt hay" itemProp="sourceOrganization" name="source" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:url" content="https://meovathay.vn/" />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={description} />
                <meta name="twitter:site" content="@meovathay.vn" />
                <meta name="twitter:creator" content="@meovathay.vn" />
                <meta name="robots" content="index,follow" />
                <meta name="copyright" content="meovathay.vn" />
                <meta name="author" content="meovathay.vn" />

                <meta property="og:site_name" content="meovathay.vn" />
                <link rel="apple-touch-icon-precomposed" href="https://meovathay.vn/logo/72x72.png" sizes="72x72" />
                <link rel="apple-touch-icon-precomposed" href="https://meovathay.vn/logo/114x114.png" sizes="144x144" />
                <link rel="apple-touch-icon-precomposed" href="https://meovathay.vn/logo/57x57.png" sizes="57x57" />
                <link rel="apple-touch-icon-precomposed" href="https://meovathay.vn/logo/114x114.png" sizes="114x114" />
                <link rel="apple-touch-icon-precomposed" href="https://meovathay.vn/logo/114x114.png" sizes="1x1" />
                <link rel="nokia-touch-icon" href="https://meovathay.vn/logo/57x57.png" />
                {
                    json ? (
                        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: json}} />
                    ) : null
                }
                {
                    breadcrumbJson ? (
                        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: breadcrumbJson}} />
                    ) : null
                }
            </Head>
            {props.children}
        </Fragment>
    );
};

function mapStateToProps(state) {
    return {
        document: state.document,
        articleStructure: state.articleStructure,
        breadcrumbStructure: state.breadcrumbStructure
    };
}

export default connect(mapStateToProps, null)(Header);
