import { GetStaticPropsContext } from "next";

import { useTina } from "tinacms/dist/react";

import client from "../../../tina/__generated__/client";

import IPostProps from "@/interfaces/IPostProps";

export default function Home(props: IPostProps) {
  // data passes though in production mode and data is updated to the sidebar data in edit-mode
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  return (
    <code>
      <pre
        style={{
          backgroundColor: "lightgray",
        }}
      >
        {JSON.stringify(data.post, null, 2)}
      </pre>
    </code>
  );
}

export const getStaticPaths = async () => {
  const { data } = await client.queries.postConnection();

  if (!data?.postConnection?.edges?.length)
    return {
      paths: [],
      fallback: false,
    };

  const paths = data?.postConnection?.edges
    .map((x) => {
      if (!x?.node) return null;

      return { params: { slug: x.node._sys.filename } };
    })
    .filter((row) => row !== null);

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async (ctx: GetStaticPropsContext) => {
  if (!ctx.params?.slug)
    return {
      notFound: true,
    };

  const { data, query, variables } = await client.queries.post({
    relativePath: ctx.params.slug + ".md",
  });

  return {
    props: {
      data,
      query,
      variables,
    },
  };
};
