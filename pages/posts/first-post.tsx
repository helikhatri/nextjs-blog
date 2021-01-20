import Link from 'next/link'
import Head from 'next/head'
import Layout from '../components/layout'

export default function firstpost() {
    return (
        <>
                <Head>
                    <title>
                        <h1>My First Post</h1>
                    </title>
                </Head>
                <h1>First Post</h1>
                <h2>
                    <Link href='/'>
                        <a>Back To Home</a>
                    </Link>
                </h2>
        </>
    )
}