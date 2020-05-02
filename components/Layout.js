import Head from "next/head";

function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>{`${title} | Hacker News`}</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
          integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
          crossorigin="anonymous"
        />
      </Head>
      <div className="container">{children}</div>
    </>
  );
}

export default Layout;
