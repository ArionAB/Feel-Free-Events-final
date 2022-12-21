import React from "react";
import Layout from "../components/layout";

const Contact = () => {
  return (
    <Layout>
      <main>
        <h1>About Me</h1>
        <p>
          Hi there! I'm the proud creator of this site, which I built with
          Gatsby.
        </p>
      </main>
    </Layout>
  );
};

export const Head = () => (
  <>
    <title>Pagina de Contact</title>;
    <meta name="contact" content="Feel free events pagina de contact" />
  </>
);

export default Contact;
