import Head from "next/head";

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Somtochukwu is an amazing developer that like to make complex stuff as easy as possible."
      />
      <meta
        name="keywords"
        content="Somtochukwu Mazi, FullStack W3B & W2B Developer, mern+solidity stack, vscode-portfolio"
      />
      <meta property="og:title" content="Somtochukwu K. Onwuajuese" />
      <meta
        property="og:description"
        content="...an amazing developer that likes to make complex stuff as easy as possible 😊."
      />
      <meta property="og:url" content="https://somtochukwu-ko.vercel.app/" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: "Somtochukwu Mazi",
};
