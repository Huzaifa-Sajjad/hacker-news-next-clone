import PropTypes from "prop-types";
import Layout from "../components/Layout";
import Link from "next/link";
import axios from "axios";

function Home({ stories, page }) {
  return (
    <Layout title="Home">
      <div className="row justify-content-center mt-3">
        <h2 className="h2 display-4">
          <b>Hacker News Clone</b>
        </h2>
      </div>
      <div className="row mt-4">
        <div className="col-12">
          <ul className="list-group">
            {stories &&
              stories.map((story) => (
                <li className="list-group-item" key={story.id}>
                  <Link href={`/story?id=${story.id}`}>
                    <a>{story.title}</a>
                  </Link>
                </li>
              ))}
          </ul>
          <div className="my-3 text-right">
            <Link href={`/?page=${page + 1}`}>
              <a>Next Page</a>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}

//This function will be executed at build time on server side
export async function getServerSideProps({ query }) {
  let stories;
  let page;
  try {
    page = Number(query.page) || 1;
    const res = await axios.get(
      `http://node-hnapi.herokuapp.com/news?page=${page}`
    );
    stories = res.data;
  } catch (err) {
    console.error(err);
  }

  //return the props
  return {
    props: {
      page,
      stories,
    },
  };
}

Home.propTypes = {
  stories: PropTypes.array.isRequired,
};

export default Home;
