import * as React from "react";

import Grid from "@mui/material/Grid";
import { Typography, Button } from "@mui/material";
import { styled } from "@mui/material/styles";

import { useTina } from "tinacms/dist/react";
import client from "../../tina/__generated__/client";

import IPostListProps from "@/interfaces/IPostListProps";

import { PostObjType, POSTS, HERO_POST } from "@/constants/posts";

type CustomTypographyProps = {
  size: string;
};

type CustomButtonProps = {
  customSize: string;
};

const BLOG_CARD_SIZE_OPTIONS = {
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

const TopicText = styled(Typography)<CustomTypographyProps>((props) => ({
  ...(props.size
    ? TOPIC_TEXT_VARIANTS[props.size as keyof {}]
    : TOPIC_TEXT_VARIANTS[BLOG_CARD_SIZE_OPTIONS.medium as keyof {}]),
  color: "#999999",
  fontWeight: 700,
}));

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

const BlogHeadingText = styled(Typography)<CustomTypographyProps>((props) => ({
  ...(props.size
    ? BLOG_HEADING_TEXT_VARIANTS[props.size as keyof {}]
    : BLOG_HEADING_TEXT_VARIANTS[BLOG_CARD_SIZE_OPTIONS.medium as keyof {}]),
  fontWeight: 700,
}));

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

const BlogSummaryText = styled(Typography)<CustomTypographyProps>((props) => ({
  ...(props.size
    ? BLOG_SUMMARY_TEXT_VARIANTS[props.size as keyof {}]
    : BLOG_SUMMARY_TEXT_VARIANTS[BLOG_CARD_SIZE_OPTIONS.medium as keyof {}]),
  color: "#6B7280",
}));

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

const Tag = styled(Typography)<CustomTypographyProps>((props) => ({
  ...(props.size
    ? TAG_VARIANTS[props.size as keyof {}]
    : TAG_VARIANTS[BLOG_CARD_SIZE_OPTIONS.medium as keyof {}]),
  backgroundColor: "#D1D5DB",
  color: "#6B7280",
  padding: "0.625rem 1.875rem",
}));

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

const ReadMoreBtn = styled(Button)<CustomButtonProps>((props) => ({
  ...(props.customSize
    ? READ_MORE_BTN_VARIANTS[props.customSize as keyof {}]
    : READ_MORE_BTN_VARIANTS[BLOG_CARD_SIZE_OPTIONS.medium as keyof {}]),
  color: "#6B7280",
  textDecoration: "underline",
}));

const Tags = ({ tags, size }: any) => {
  return (
    <Grid container alignItems="center" sx={{ gap: "0.5rem" }}>
      {React.Children.toArray(
        tags.map((tag: string) => <Tag size={size}>{tag}</Tag>)
      )}
    </Grid>
  );
};

const truncate = ({ words = "", maxlength = 450 }) => {
  return `${words.slice(0, maxlength)} …`;
};

const BlogPostCard = ({ post, size }: { post: PostObjType; size: string }) => (
  <Grid>
    <Grid item>
      <TopicText size={size}>{post.topic}</TopicText>
    </Grid>
    <Grid item sx={{ marginTop: "0.6rem" }}>
      <BlogHeadingText size={size}>{post.title}</BlogHeadingText>
    </Grid>
    <Grid item sx={{ marginTop: "2rem" }}>
      <BlogSummaryText size={size}>
        {truncate({
          words: post.summary,
        })}
      </BlogSummaryText>
    </Grid>
    <Grid item sx={{ marginTop: { xs: "1rem", sm: "1.5rem" } }}>
      <Grid
        container
        sx={{
          flexDirection: { xs: "column-reverse", sm: "row" },
          justifyContent: { xs: "flex-start", sm: "space-between" },
          gap: { xs: "1rem", sm: "0" },
        }}
        alignItems={"flex-start"}
      >
        <Grid item xs={12} sm={9}>
          {Tags({
            tags: post.tags,
            size: size,
          })}
        </Grid>
        <Grid
          container
          sx={{
            justifyContent: { xs: "flex-start", sm: "flex-end" },
          }}
          item
          xs={12}
          sm={3}
        >
          <ReadMoreBtn customSize={size}>Read More</ReadMoreBtn>
        </Grid>
      </Grid>
    </Grid>
  </Grid>
);

const AboutOctalogicCard = () => (
  <Grid
    sx={{
      padding: "1.5rem",
      backgroundColor: "#3A9086",
    }}
  >
    <Typography
      sx={{
        fontWeight: 700,
        fontSize: "1.375rem",
        lineHeight: "1.5rem",
        color: "#F3F4F6",
      }}
    >
      About
    </Typography>

    <Typography
      sx={{
        fontSize: "1.125rem",
        lineHeight: "1.125rem",
        color: "#F3F4F6",
        marginTop: "1rem",
      }}
    >
      Octalogic Tech is a SaaS company based in Goa, India, that provides custom
      software development, mobile app development, and IT consulting services
      to clients worldwide. Our turnkey solutions are designed to simplify the
      process of software development and deployment, providing clients with a
      seamless end-to-end experience.
    </Typography>

    <Typography
      sx={{
        fontSize: "1.125rem",
        lineHeight: "1.125rem",
        color: "#F3F4F6",
        marginTop: "1rem",
      }}
    >
      Being sector agnostic, we have provided tailor-made solutions to clients
      in FinTech, MedTech, EdTech, FoodTech, and e-commerce verticals.With a
      proven track record of delivering quality and innovative solutions to
      clients in various industries, our team of experienced professionals
      leverages cutting-edge technology and industry best practices that meet
      client&apos;s specific needs and goals.
    </Typography>
  </Grid>
);

const InteractiveList = (props: IPostListProps) => {
  // data passes though in production mode and data is updated to the sidebar data in edit-mode
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });
  const postsList = data?.postConnection?.edges || [];

  return (
    <Grid
      container
      sx={{ paddingX: { xs: "4rem", sm: "9rem", xl: "12.5rem" } }}
    >
      <Grid
        sx={{
          paddingBlockStart: "6rem",
          display: "grid",
          gridTemplateColumns: { xs: "1fr", lg: "2fr 1fr" },
          gridRowGap: { xs: "5rem", lg: "7rem" },
          gridColumnGap: { xs: "0", lg: "7rem" },
        }}
      >
        <BlogPostCard post={HERO_POST} size={BLOG_CARD_SIZE_OPTIONS.large} />
        <AboutOctalogicCard />
      </Grid>

      <Grid
        sx={{
          paddingBlock: "8rem",
          display: "grid",
          gridTemplateColumns: { xs: "1fr", lg: "repeat(2, 1fr)" },
          gridRowGap: { xs: "5rem", lg: "7rem" },
          gridColumnGap: { xs: "0", lg: "7rem" },
        }}
      >
        {React.Children.toArray(
          POSTS.map((post) => (
            <BlogPostCard post={post} size={BLOG_CARD_SIZE_OPTIONS.medium} />
          ))
        )}
      </Grid>
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
