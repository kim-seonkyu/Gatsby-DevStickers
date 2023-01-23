import { graphql, PageProps, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import * as React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

export default function IndexPage({ data }: PageProps<Queries.StickersQuery>) {
  return (
    <Layout title="Welcome to DevStickers 👋🏻">
      <div className="grid">
        {data.allContentfulStickerPack.nodes.map((sticker) => (
          <article>
            <GatsbyImage
              image={getImage(sticker.preview?.gatsbyImageData!)!}
              alt={sticker.name!}
            />
            <Link to={`/product/${sticker.id}`}>
              <h2>{sticker.name}</h2>
            </Link>
            <h4>${sticker.price}</h4>
          </article>
        ))}
      </div>
    </Layout>
  );
}

export const query = graphql`
  query Stickers {
    allContentfulStickerPack {
      nodes {
        id
        name
        price
        preview {
          gatsbyImageData(placeholder: BLURRED, height: 250)
        }
      }
    }
  }
`;

export const Head = () => <Seo title="Home" />;
