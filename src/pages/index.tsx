import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { graphql } from "gatsby";

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};

const IndexPage: React.FC<PageProps> = ({data}: {data: any}) => {
  return (
    <main style={pageStyles}>
      <h1>
        Welcome to {data.site.siteMetadata.title}
      </h1>
      <p>
        <pre>
          Here is our master project for our member projects which will be regularly updated.
        </pre>
      </p>
    </main>
  );
};

export const query = graphql`
  # query will go here
  query HomePageQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
