import PropTypes from "prop-types";
import Layout from "../components/Layout";
import axios from "axios";
import { withRouter } from "next/router";

function Story({ story, router }) {
  const handleGoBack = (e) => {
    router.back();
  };

  return (
    <Layout title={story.title}>
      <div className="row ">
        <div className="col-12">
          <h3 className="display-4 text-center">{story.title}</h3>
          <h5 className="display-5 text-center">Written by: {story.user}</h5>
          <button className="btn btn-success" onClick={handleGoBack}>
            Go Back
          </button>
          <ul className="list-group mt-5">
            {story.comments &&
              story.comments.map((comment) => (
                <li className="list-group-item" key={comment.id}>
                  {comment.content}
                </li>
              ))}
          </ul>
        </div>
      </div>
    </Layout>
  );
}

Story.propTypes = {
  story: PropTypes.object.isRequired,
};

export async function getServerSideProps({ query }) {
  let story;
  console.log(query.id);
  try {
    const res = await axios.get(
      `http://node-hnapi.herokuapp.com/item/${query.id}`
    );
    story = res.data;
  } catch (err) {
    console.error(err);
  }

  return {
    props: { story },
  };
}

export default withRouter(Story);
