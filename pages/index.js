import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Main from '../pages/images/main.svg'
export default function Home() {

    return (
    <div className="container ">
        <Head>
        <title>The S.T.E.M Club</title>
        <link rel="icon" href="/favicon.ico" />
        <script src="https://kit.fontawesome.com/2d400a976a.js" crossOrigin="anonymous" />

        </Head>

      <main>
        {/*<img className="img-fluid" src={Main} alt="profile picture"/>*/}
        <Header title="Welcome to The S.T.E.M Club!" />
        <p className="description text-center mt-3">
          The stem club is a project driven club with lots of fields and areas to explore. <br/>
            Our goal as a club is to provide our members with the support and resources needed to get real hands on <br/>
            experience, by working on diverse engineering projects.
        </p>
            <section className="mb-4 ">
                {/* Discord */}
                <a className="btn btn-outline-primary btn-floating m-1 " href="https://discord.gg/JxG4PqU8sQ" target="_blank" role="button "><i className="fa-brands fa-discord"/>Discord</a>
                {/* Instagram */}
                {/*<a className="btn btn-outline-danger btn-floating m-1 " href="https://www.instagram.com/excell_pepple" target="_blank" role="button "><i className="fab fa-instagram " /></a>*/}
                {/* Github */}
                {/*<a className="btn btn-outline-secondary btn-floating m-1 " href="https://discord.gg/JxG4PqU8sQ" target="_blank" role="button "><i className="fa-brands fa-github" /></a>*/}
            </section>
      </main>

      <Footer />
    </div>
  )
}
