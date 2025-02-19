import { NextPage } from 'next';
import Head from 'next/head';
import Navbar from '../../../components/Navbar';

const ContactPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Teeny Villa - Contact</title>
      </Head>
      <Navbar />
      <h1>Contact Us</h1>
      <p>Get in touch with us for reservations or inquiries:</p>
      <ul>
        <li>Email: info@teenyvilla.com</li>
        <li>Phone: (123) 456-7890</li>
      </ul>
    </div>
  );
};

export default ContactPage;