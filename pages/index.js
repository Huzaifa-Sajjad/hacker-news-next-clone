import PropTypes from "prop-types";
import Layout from "../components/Layout";
import axios from "axios";

function Home({ stories }) {
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
                  {story.title}
                </li>
              ))}
          </ul>
        </div>
      </div>
    </Layout>
  );
}

//This function will be executed at build time on server side
export async function getStaticProps() {
  let stories;
  try {
    const res = await axios.get("http://node-hnapi.herokuapp.com/news?page=1");
    stories = res.data;
  } catch (err) {
    console.error(err);
  }

  //return the props
  return {
    props: {
      stories,
    },
  };
}

Home.propTypes = {
  stories: PropTypes.array.isRequired,
};

export default Home;
