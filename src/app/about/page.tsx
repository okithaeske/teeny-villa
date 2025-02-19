import { NextPage } from 'next';
import Head from 'next/head';
import Navbar from '../../../components/Navbar';

const AboutPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Teeny Villa - About</title>
      </Head>
      <Navbar />
      <h1>About Teeny Villa</h1>
      <p>We specialize in providing compact, yet luxurious living spaces.</p>
    </div>
  );
};

export default AboutPage;