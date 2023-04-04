import * as React from "react";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";
import { Typography, Button } from "@mui/material";
import { styled } from "@mui/material/styles";

import { useTina } from "tinacms/dist/react";
import client from "../../tina/__generated__/client";

import IPostListProps from "@/interfaces/IPostListProps";

const TOPIC_TEXT_VARIANT_OPTIONS = {
  large: "large",
  medium: "medium",
};

const TOPIC_TEXT_VARIANTS: {
  [key: string]: {
    fontSize: string;
    lineHeight: string;
  };
} = {
  large: {
    fontSize: "1.625rem",
    lineHeight: "1.875rem",
  },
  medium: {
    fontSize: "1.125rem",
    lineHeight: "1.125rem",
  },
};

const TopicText = styled(Typography)((props) => ({
  ...(props.customVariant
    ? TOPIC_TEXT_VARIANTS[props.customVariant as keyof {}]
    : TOPIC_TEXT_VARIANTS[TOPIC_TEXT_VARIANT_OPTIONS.medium as keyof {}]),
  color: "#999999",
  fontWeight: 700,
}));

const BLOG_HEADING_TEXT_VARIANT_OPTIONS = {
  large: "large",
  medium: "medium",
};

const BLOG_HEADING_TEXT_VARIANTS: {
  [key: string]: {
    fontSize: string;
    lineHeight: string;
  };
} = {
  large: {
    fontSize: "4rem",
    lineHeight: "4.5rem",
  },
  medium: {
    fontSize: "2rem",
    lineHeight: "2.5rem",
  },
};

const BlogHeadingText = styled(Typography)((props) => ({
  ...(props.customVariant
    ? BLOG_HEADING_TEXT_VARIANTS[props.customVariant as keyof {}]
    : BLOG_HEADING_TEXT_VARIANTS[
        BLOG_HEADING_TEXT_VARIANT_OPTIONS.medium as keyof {}
      ]),
  fontWeight: 700,
}));

const BLOG_SUMMARY_TEXT_VARIANT_OPTIONS = {
  large: "large",
  medium: "medium",
};

const BLOG_SUMMARY_TEXT_VARIANTS: {
  [key: string]: {
    fontSize: string;
    lineHeight: string;
  };
} = {
  large: {
    fontSize: "1.75rem",
    lineHeight: "1.75rem",
  },
  medium: {
    fontSize: "1.125rem",
    lineHeight: "1.125rem",
  },
};

const BlogSummaryText = styled(Typography)((props) => ({
  ...(props.customVariant
    ? BLOG_SUMMARY_TEXT_VARIANTS[props.customVariant as keyof {}]
    : BLOG_SUMMARY_TEXT_VARIANTS[
        BLOG_SUMMARY_TEXT_VARIANT_OPTIONS.medium as keyof {}
      ]),
  color: "#6B7280",
}));

const TAG_VARIANT_OPTIONS = {
  large: "large",
  medium: "medium",
};

const TAG_VARIANTS: {
  [key: string]: {
    fontSize: string;
    lineHeight: string;
  };
} = {
  large: {
    fontSize: "1.75rem",
    lineHeight: "1.75rem",
  },
  medium: {
    fontSize: "1.125rem",
    lineHeight: "1.125rem",
  },
};

const Tag = styled(Typography)((props) => ({
  ...(props.customVariant
    ? BLOG_SUMMARY_TEXT_VARIANTS[props.customVariant as keyof {}]
    : BLOG_SUMMARY_TEXT_VARIANTS[
        BLOG_SUMMARY_TEXT_VARIANT_OPTIONS.medium as keyof {}
      ]),
  backgroundColor: "#D1D5DB",
  color: "#6B7280",
  padding: "0.625rem 1.875rem",
}));

const READ_MORE_BTN_VARIANT_OPTIONS = {
  large: "large",
  medium: "medium",
};

const READ_MORE_BTN_VARIANTS: {
  [key: string]: {
    fontSize: string;
    lineHeight: string;
  };
} = {
  large: {
    fontSize: "1.75rem",
    lineHeight: "1.75rem",
  },
  medium: {
    fontSize: "1.125rem",
    lineHeight: "1.125rem",
  },
};

const ReadMoreBtn = styled(Button)((props) => ({
  ...(props.customVariant
    ? READ_MORE_BTN_VARIANTS[props.customVariant as keyof {}]
    : READ_MORE_BTN_VARIANTS[READ_MORE_BTN_VARIANT_OPTIONS.medium as keyof {}]),
  color: "#6B7280",
  textDecoration: "underline",
}));

const Tags = ({ tags, customVariant }: any) => {
  return (
    <Grid container alignItems="center" sx={{ gap: "0.5rem" }}>
      {React.Children.toArray(
        tags.map((tag: string) => (
          <Tag customVariant={customVariant}>{tag}</Tag>
        ))
      )}
    </Grid>
  );
};

const truncate = ({ words = "", maxlength = 450 }) => {
  return `${words.slice(0, maxlength)} …`;
};

const InteractiveList = (props: IPostListProps) => {
  // data passes though in production mode and data is updated to the sidebar data in edit-mode
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });
  const postsList = data?.postConnection?.edges || [];

  return (
    <Grid container sx={{ paddingX: "200px" }}>
      <Grid>
        <Grid item>
          <TopicText customVariant={TOPIC_TEXT_VARIANT_OPTIONS.large}>
            Web Development
          </TopicText>
        </Grid>
        <Grid item sx={{ marginTop: "0.6rem" }}>
          <BlogHeadingText
            customVariant={BLOG_HEADING_TEXT_VARIANT_OPTIONS.large}
          >
            Say goodbye to servers and hello to serverless architecture! 🚀
          </BlogHeadingText>
        </Grid>
        <Grid item sx={{ marginTop: "2rem" }}>
          <BlogSummaryText
            customVariant={BLOG_SUMMARY_TEXT_VARIANT_OPTIONS.large}
          >
            {truncate({
              words: ` In recent years, serverless computing has emerged as a popular
            paradigm for developing and deploying software applications. Despite
            the name, serverless does not mean that there are no servers
            involved in the process; rather, it refers to the fact that
            developers no longer have to worry about the underlying
            infrastructure and can focus solely on`,
            })}
          </BlogSummaryText>
        </Grid>
        <Grid item sx={{ marginTop: "1.5rem" }}>
          <Grid
            container
            justifyContent="space-between"
            alignItems={"flex-start"}
            // sx={{ gap: "1rem" }}
          >
            <Grid item xs={9}>
              {Tags({
                tags: ["Serverless", "Solution Architecture"],
                customVariant: TAG_VARIANT_OPTIONS.large,
              })}
            </Grid>
            <Grid container justifyContent={"flex-end"} item xs={3}>
              <ReadMoreBtn customVariant={READ_MORE_BTN_VARIANT_OPTIONS.large}>
                Read More
              </ReadMoreBtn>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
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
