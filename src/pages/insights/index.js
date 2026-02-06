import React from "react"
import { Link } from "gatsby"
import Helmet from "react-helmet"
import Layout from '../../components/Layout'

const posts = [
  {
    title: "How Much Weight Can a Pallet Hold?",
    slug: "/insights/how-much-weight-can-a-pallet-hold/",
    date: "2025-10-20",
    excerpt:
      "Learn about pallet load capacity—static, dynamic, and racking ratings. Understand weight limits for wooden, plastic, and metal pallets.",
    tags: [
      "pallet weight capacity",
      "pallet load capacity",
      "static load",
      "dynamic load",
    ],
  },
  {
    title: "Plastic Pallet Specifications, Sizes, and Dimensions Guide",
    slug: "/insights/plastic-pallet-specifications-sizes-and-dimensions-guide/",
    date: "2025-10-19",
    excerpt:
      "Quick reference for common plastic pallet specifications, standard sizes, typical load capacities, and how to choose the right pallet.",
    tags: [
      "plastic pallet specifications",
      "plastic pallet size",
      "plastic pallet dimensions",
    ],
  },
  // add more insights here
]

const InsightsIndex = () => (
  <Layout>
    <Helmet>
      <title>Insights — Pallets Supplier</title>
      <meta name="description" content="News and product knowledge about plastic pallets, sizes, specs and dimensions." />
      <meta name="keywords" content="plastic pallet specifications, plastic pallet size, plastic pallet dimensions" />
    </Helmet>
    
    <section className="section">
      <div className="container-fluid">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb bg-white my-2">
            <li className="breadcrumb-item">
              <Link to="/">
                Home
              </Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">Insights</li>
          </ol>
        </nav>
      </div>
    </section>

    <div className="container-fluid">
      <div className='mb-5 border p-3 bg-white'>
        <div className="mb-2">
          <h1 className="h4">Insights</h1>
          <p className="text-muted">
            Product news, guides and knowledge about plastic pallets and pallet boxes.
          </p>
        </div>
        <div className='post-list'>
          {posts.map(post => (
            <article key={post.slug} className="mb-4 p-3 border bg-light">
              <h2 className="h5 mb-2">
                <Link to={post.slug} className="text-primary text-decoration-none">
                  {post.title}
                </Link>
              </h2>
              <div className="text-muted small mb-2">{post.date}</div>
              <p className="mb-2">{post.excerpt}</p>
              <div>
                {post.tags.map(tag => (
                  <span
                    key={tag}
                    className="badge bg-primary me-1"
                    style={{ fontSize: "0.75rem" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  </Layout>
)

export default InsightsIndex