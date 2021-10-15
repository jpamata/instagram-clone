import Head from 'next/head'
import Feed from '../components/Feed'
import Header from '../components/Header'

export default function Home() {
  return (
    <div className="bg-gray-50 h-screen overflow-y-scroll scrollbar-hide">
      <Head>
        <title>instagram-clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    {/*Header -- contains search, profile, messaging, icons*/}
    <Header/>
    {/*Feed -- contains post and sidebar for suggestions*/}
    <Feed/>
    {/*Modal*/}
    </div>
  )
}
