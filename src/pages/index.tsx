import * as React from "react";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";

import { useTina } from "tinacms/dist/react";
import client from "../../tina/__generated__/client";

import Header from "@/components/header/header";

import IPostListProps from "@/interfaces/IPostListProps";

const InteractiveList = (props: IPostListProps) => {
  // data passes though in production mode and data is updated to the sidebar data in edit-mode
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });
  const postsList = data?.postConnection?.edges || [];

  return (
    <Grid container spacing={2}>
      {/* <Grid item xs={12} md={6}>
        <List>
          {postsList.map((post: any) => (
            <ListItem key={post.node.id}>
              <ListItemText primary={post.node._sys.filename} />
            </ListItem>
          ))}
        </List>
      </Grid> */}
    </Grid>
  );
};

export const getStaticProps = async () => {
  try {
    const { data, query, variables } = await client.queries.postConnection();

    return {
      props: {
        data,
        query,
        variables,
      },
    };
  } catch (e) {
    return {
      props: {},
    };
  }
};

export default InteractiveList;
