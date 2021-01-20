import Layout from '../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import utilStyles from '../styles/utils.module.css'
import Head from 'next/head'
import Date from '../components/date'

export default function Post({ postData }) {
    return <Layout home>
        <Head>
            <title>{postData.title}</title>
        </Head>
        <article>
        <h1 className={utilStyles.headingXl}>{postData.title} </h1>
        {/* <br />
        {postData.id} */}
        <div className={utilStyles.lightText}>
        <Date dateString={postData.date} />
        </div>
        <br />
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </article>
    </Layout>
}

export async function getStaticPaths() {
    //return list of possible value for id
    const paths = getAllPostIds()
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    // Fetch necessary data for the blog post using params.id
    const postData = await getPostData(params.id)
    return {
        props: {
            postData
        }
    }
}