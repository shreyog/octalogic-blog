import { GetStaticPropsContext } from "next";
import * as React from "react";
import { Grid, Typography, Link } from "@mui/material";
import { format, parseISO } from "date-fns";
import {
  FiberManualRecord as FiberManualRecordIcon,
  Facebook as FacebookIcon,
  Twitter as TwitterIcon,
  LinkedIn as LinkedInIcon,
} from "@mui/icons-material";

// import { useTina } from "tinacms/dist/react";

// import client from "../../../tina/__generated__/client";

import IPostProps from "@/interfaces/IPostProps";
import { POSTS } from "@/constants/posts";

import { BlogPostCard, BLOG_CARD_SIZE_OPTIONS } from "@/pages";

export default function Home(props: IPostProps) {
  // data passes though in production mode and data is updated to the sidebar data in edit-mode
  // const { data } = useTina({
  //   query: props.query,
  //   variables: props.variables,
  //   data: props.data,
  // });

  return (
    <Grid className="global-spacer">
      <Typography sx={{ paddingBlockStart: "4rem" }}>
        {`Updated ${format(new Date(), "MMM dd, yyyy")}`}
        {/* {postData ? format(parseISO(postData?.publishDate), 'MMM dd, yyyy') : ''} */}
      </Typography>

      <Grid
        container
        sx={{
          paddingBlock: "1rem",
          flexDirection: { xs: "column", sm: "row" },
        }}
      >
        <Grid item xs={12} sm={6}>
          <Typography component="span">Written by</Typography>

          {/* <FiberManualRecordIcon /> */}

          {/* <Typography component="span">Reviewed by</Typography> */}
        </Grid>

        <Grid
          container
          item
          xs={12}
          sm={6}
          sx={{
            justifyContent: { xs: "flex-start", sm: "flex-end" },
            gap: "0.5rem",
          }}
          alignItems={"center"}
        >
          <Typography>Share</Typography>
          <Link target="_blank">
            <FacebookIcon />
          </Link>
          <Link target="_blank">
            <TwitterIcon />
          </Link>
          <Link>
            <LinkedInIcon />
          </Link>
        </Grid>
      </Grid>

      <Typography
        sx={{ textAlign: "center", fontWeight: 600, fontSize: "1.2rem" }}
      >
        You may also like
      </Typography>
      <Grid
        sx={{
          marginBlockStart: "2rem",
          paddingBlockEnd: "8rem",
          display: "grid",
          gridTemplateColumns: { xs: "1fr", lg: "repeat(3, 1fr)" },
          gridRowGap: { xs: "5rem", lg: "7rem" },
          gridColumnGap: { xs: "0", lg: "7rem" },
        }}
      >
        {React.Children.toArray(
          POSTS.slice(0, 3).map((post) => (
            <BlogPostCard post={post} size={BLOG_CARD_SIZE_OPTIONS.small} />
          ))
        )}
      </Grid>
    </Grid>
  );
}

// export const getStaticPaths = async () => {
//   const { data } = await client.queries.postConnection();

//   if (!data?.postConnection?.edges?.length)
//     return {
//       paths: [],
//       fallback: false,
//     };

//   const paths = data?.postConnection?.edges
//     .map((x) => {
//       if (!x?.node) return null;

//       return { params: { slug: x.node._sys.filename } };
//     })
//     .filter((row) => row !== null);

//   return {
//     paths,
//     fallback: "blocking",
//   };
// };

// export const getStaticProps = async (ctx: GetStaticPropsContext) => {
//   if (!ctx.params?.slug)
//     return {
//       notFound: true,
//     };

//   const { data, query, variables } = await client.queries.post({
//     relativePath: ctx.params.slug + ".md",
//   });

//   return {
//     props: {
//       data,
//       query,
//       variables,
//     },
//   };
// };
