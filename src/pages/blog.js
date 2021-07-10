import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import styles from "./index.module.css";


const allPosts = ((ctx) => {
  /** @type {string[]} */
  const blogpostNames = ctx.keys();

  return blogpostNames.reduce((blogposts, blogpostName, i) => {
    const module = ctx(blogpostName)
    const { date, formattedDate, title, permalink, tags } = module.metadata;
    return [
      ...blogposts,
      {
        date,
        formattedDate,
        title,
        permalink,
        tags,
      },
    ];
  }, /** @type {string[]}>} */ ([]));
})(require.context("../../blog", false, /.md/));

const postsByTag = allPosts.reduceRight((posts, post) => {
  const maintag = post.tags[0].label;
  const tagPosts = posts.get(maintag) || [];
  return posts.set(maintag, [post, ...tagPosts]);
}, /** @type {Map<string, BlogPost[]>}>} */ (new Map()));

const tagsOfPosts = Array.from(postsByTag, ([maintag, posts]) => ({
  maintag,
  posts,
}));

function Maintag(
  /** @type {{ maintag: string; posts: BlogPost[]}} */ {
    maintag,
    posts,
  }
) {
  return (
    <div className={clsx("col col--4", styles.feature)}>
      <h3 className={clsx("heading-three", styles.heading3)}>{processMaintag(maintag)}</h3>
      <ul>
        {posts.map((post) => (
          <li key={post.tags}>
            <Link to={post.permalink}>
              {post.formattedDate} - {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function processMaintag(maintag){
  maintag = maintag.trim().toLowerCase();
  var firstLetter = maintag.charAt(0).toUpperCase();
  maintag = maintag.replace(maintag[0], firstLetter);
  return maintag;
}

function BlogArchive() {
  return (
    <Layout title="Blog Archive">
      <header className={clsx("blog-hero", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">All blogs</h1>
          {/* <p className="hero__subtitle">Historic posts</p> */}
        </div>
      </header>
      <main>
        {tagsOfPosts && tagsOfPosts.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {tagsOfPosts.map((props, idx) => (
                  <Maintag key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default BlogArchive;