import Head from 'next/head'
import Image from 'next/image'
import Sidebar from "../components/Sidebar"
import Header from "../components/Header"
import Chat from "../components/Chat"

function Message() {

  return (
    <div className="bg-gray-50 h-screen overflow-y-scroll scrollbar-hide">
        <Head>
            <title>Fakestagram</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>


        <Header /> 
        <div className="grid grid-cols-2 md:grid-cols-3 md:max-w-3xl xl:grid-cols-4 xl:max-w-6xl mx-auto">
          <section className="col-span-1">
                <Sidebar />
          </section>
          <section className="col-span-3">
                <Chat />
          </section>
        </div>
    </div>
  )
}

export default Message