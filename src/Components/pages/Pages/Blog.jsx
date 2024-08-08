import React from "react";
import { Link } from "react-router-dom";

export default function Blog() {
return (
<>
    {/*<!-- Modal Search Start --> */}

    <div className="modal fade" id="searchModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-fullscreen">
            <div className="modal-content rounded-0">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">
                        Search by keyword
                    </h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body d-flex align-items-center">
                    <div className="input-group w-75 mx-auto d-flex">
                        <input type="search" className="form-control p-3" placeholder="keywords"
                            aria-describedby="search-icon-1" />
                        <span id="search-icon-1" className="input-group-text p-3">
                            <i className="fa fa-search"></i>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>

    {/*<!-- Modal Search End --> */}

    {/*<!-- Single Page Header start --> */}

    <br /><br />
    <div className="container-fluid page-header py-5">
        <h1 className="text-center text-white display-6 mt-5">Blogs</h1>
        <ol className="breadcrumb justify-content-center mb-0">
            <li className="breadcrumb-item">
                <Link to="/Home">Home</Link>
            </li>
            <li className="breadcrumb-item">
                <Link to="/Shop">Shop</Link>
            </li>
            <li className="breadcrumb-item active text-white">
                <Link to="/Shop" className="text-white">
                Blogs
                </Link>
            </li>
        </ol>
    </div>

    {/*<!-- Single Page Header End --> */}

    {/*<!--================Blog Area =================--> */}

    <section className="blog_area section_gap">
        <div className="container">
            <div className="row">
                <div className="col-lg-8 mb-5 mb-lg-0">
                    <div className="blog_left_sidebar">
                        <article className="blog_item">
                            <div className="blog_item_img">
                                <img className="card-img rounded-0" src="img/blog/main-blog/m-blog-1.jpg" alt="" />
                                <Link to="/Blog" className="blog_item_date">
                                <h3>15</h3>
                                <p>Jan</p>
                                </Link>
                            </div>

                            <div className="blog_details">
                                <Link className="d-inline-block" href="single-blog.html">  
                                <h2>Google inks pact for new 35-storey office</h2>
                                </Link>
                                <p>
                                    That dominion stars lights dominion divide years for
                                    fourth have don't stars is that he earth it first without
                                    heaven in place seed it second morning saying.
                                </p>
                                <ul className="blog-info-link">
                                    <li>
                                        <Link to="/Blog">
                                        <i className="ti-user fw-bold"></i> Travel, Lifestyle
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/Blog">
                                        <i className="ti-comments"></i> 03 Comments
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </article>

                        <article className="blog_item">
                            <div className="blog_item_img">
                                <img className="card-img rounded-0" src="img/blog/main-blog/m-blog-2.jpg" alt="" />
                                <Link to="/Blog" className="blog_item_date">
                                <h3>15</h3>
                                <p>Jan</p>
                                </Link>
                            </div>

                            <div className="blog_details">
                                <Link className="d-inline-block" href="single-blog.html">
                                <h2>Google inks pact for new 35-storey office</h2>
                                </Link>
                                <p>
                                    That dominion stars lights dominion divide years for
                                    fourth have don't stars is that he earth it first without
                                    heaven in place seed it second morning saying.
                                </p>
                                <ul className="blog-info-link">
                                    <li>
                                        <Link to="/Blog">
                                        <i className="ti-user"></i> Travel, Lifestyle
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/Blog">
                                        <i className="ti-comments"></i> 03 Comments
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </article>

                        <article className="blog_item">
                            <div className="blog_item_img">
                                <img className="card-img rounded-0" src="img/blog/main-blog/m-blog-3.jpg" alt="" />
                                <Link to="/Blog" className="blog_item_date">
                                <h3>15</h3>
                                <p>Jan</p>
                                </Link>
                            </div>

                            <div className="blog_details">
                                <Link className="d-inline-block" href="single-blog.html">
                                <h2>Google inks pact for new 35-storey office</h2>
                                </Link>
                                <p>
                                    That dominion stars lights dominion divide years for
                                    fourth have don't stars is that he earth it first without
                                    heaven in place seed it second morning saying.
                                </p>
                                <ul className="blog-info-link">
                                    <li>
                                        <Link to="/Blog">
                                        <i className="ti-user"></i> Travel, Lifestyle
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/Blog">
                                        <i className="ti-comments"></i> 03 Comments
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </article>

                        <article className="blog_item">
                            <div className="blog_item_img">
                                <img className="card-img rounded-0" src="img/blog/main-blog/m-blog-4.jpg" alt="" />
                                <Link to="/Blog" className="blog_item_date">
                                <h3>15</h3>
                                <p>Jan</p>
                                </Link>
                            </div>

                            <div className="blog_details">
                                <Link className="d-inline-block" href="single-blog.html">
                                <h2>Google inks pact for new 35-storey office</h2>
                                </Link>
                                <p>
                                    That dominion stars lights dominion divide years for
                                    fourth have don't stars is that he earth it first without
                                    heaven in place seed it second morning saying.
                                </p>
                                <ul className="blog-info-link">
                                    <li>
                                        <Link to="/Blog">
                                        <i className="ti-user"></i> Travel, Lifestyle
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/Blog">
                                        <i className="ti-comments"></i> 03 Comments
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </article>

                        <article className="blog_item">
                            <div className="blog_item_img">
                                <img className="card-img rounded-0" src="img/blog/main-blog/m-blog-5.jpg" alt="" />
                                <Link to="/Blog" className="blog_item_date">
                                <h3>15</h3>
                                <p>Jan</p>
                                </Link>
                            </div>

                            <div className="blog_details">
                                <Link className="d-inline-block" href="single-blog.html">
                                <h2>Google inks pact for new 35-storey office</h2>
                                </Link>
                                <p>
                                    That dominion stars lights dominion divide years for
                                    fourth have don't stars is that he earth it first without
                                    heaven in place seed it second morning saying.
                                </p>
                                <ul className="blog-info-link">
                                    <li>
                                        <Link to="/Blog">
                                        <i className="ti-user"></i> Travel, Lifestyle
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/Blog">
                                        <i className="ti-comments"></i> 03 Comments
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </article>
                        {/*
                        <div className="col-12 text-center">
                            <div className="pagination d-flex justify-content-center mt-5 text-center ms-5"><a
                                    className="rounded" href="/">«</a><a className="active rounded" href="/">1</a><a
                                    className="rounded" href="/">2</a><a className="rounded" href="/">3</a><a className="rounded"
                                    href="/">4</a><a className="rounded" href="/">5</a><a className="rounded" href="/">6</a><a
                                    className="rounded" href="/">»</a></div>
                        </div> */}
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="blog_right_sidebar">
                        <aside className="single_sidebar_widget search_widget">
                            <form action="#">
                                <div className="form-group">
                                    <div className="input-group mb-3">
                                        <input type="text" className="form-control" placeholder="Search Keyword" />
                                        <div className="input-group-append">
                                            <button className="btn" type="button">
                                                <i className="ti-search"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <button className="main_btn rounded-0 w-100" type="submit">
                                    Search
                                </button>
                            </form>
                        </aside>

                        <aside className="single_sidebar_widget post_category_widget">
                            <h4 className="widget_title">Category</h4>
                            <ul className="list cat-list">
                                <li>
                                    <Link to="/Blog" className="d-flex">
                                    <p>Resaurant food</p>
                                    <p>(37)</p>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/Blog" className="d-flex">
                                    <p>Travel news</p>
                                    <p>(10)</p>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/Blog" className="d-flex">
                                    <p>Modern technology</p>
                                    <p>(03)</p>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/Blog" className="d-flex">
                                    <p>Product</p>
                                    <p>(11)</p>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/Blog" className="d-flex">
                                    <p>Inspiration</p>
                                    <p>21</p>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/Blog" className="d-flex">
                                    <p>Health Care (21)</p>
                                    <p>09</p>
                                    </Link>
                                </li>
                            </ul>
                        </aside>

                        <aside className="single_sidebar_widget popular_post_widget">
                            <h3 className="widget_title">Recent Post</h3>
                            <div className="media post_item">
                                <img src="img/blog/popular-post/post1.jpg" alt="post" />
                                <div className="media-body">
                                    <Link href="single-blog.html">
                                    <h3>From life was you fish...</h3>
                                    </Link>
                                    <p>January 12, 2019</p>
                                </div>
                            </div>
                            <div className="media post_item">
                                <img src="img/blog/popular-post/post2.jpg" alt="post" />
                                <div className="media-body">
                                    <Link href="single-blog.html">
                                    <h3>The Amazing Hubble</h3>
                                    </Link>
                                    <p>02 Hours ago</p>
                                </div>
                            </div>
                            <div className="media post_item">
                                <img src="img/blog/popular-post/post3.jpg" alt="post" />
                                <div className="media-body">
                                    <Link href="single-blog.html">
                                    <h3>Astronomy Or Astrology</h3>
                                    </Link>
                                    <p>03 Hours ago</p>
                                </div>
                            </div>
                            <div className="media post_item">
                                <img src="img/blog/popular-post/post4.jpg" alt="post" />
                                <div className="media-body">
                                    <Link href="single-blog.html">
                                    <h3>Asteroids telescope</h3>
                                    </Link>
                                    <p>01 Hours ago</p>
                                </div>
                            </div>
                        </aside>
                        <aside className="single_sidebar_widget tag_cloud_widget">
                            <h4 className="widget_title">Tag Clouds</h4>
                            <ul className="list">
                                <li>
                                    <Link to="/Blog">project</Link>
                                </li>
                                <li>
                                    <Link to="/Blog">love</Link>
                                </li>
                                <li>
                                    <Link to="/Blog">technology</Link>
                                </li>
                                <li>
                                    <Link to="/Blog">travel</Link>
                                </li>
                                <li>
                                    <Link to="/Blog">restaurant</Link>
                                </li>
                                <li>
                                    <Link to="/Blog">life style</Link>
                                </li>
                                <li>
                                    <Link to="/Blog">design</Link>
                                </li>
                                <li>
                                    <Link to="/Blog">illustration</Link>
                                </li>
                            </ul>
                        </aside>

                        <aside className="single_sidebar_widget instagram_feeds">
                            <h4 className="widget_title">Instagram Feeds</h4>
                            <ul className="instagram_row flex-wrap">
                                <li>
                                    <Link to="/Blog">
                                    <img className="img-fluid" src="img/instagram/widget-i1.png" alt="" />
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/Blog">
                                    <img className="img-fluid" src="img/instagram/widget-i2.png" alt="" />
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/Blog">
                                    <img className="img-fluid" src="img/instagram/widget-i3.png" alt="" />
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/Blog">
                                    <img className="img-fluid" src="img/instagram/widget-i4.png" alt="" />
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/Blog">
                                    <img className="img-fluid" src="img/instagram/widget-i5.png" alt="" />
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/Blog">
                                    <img className="img-fluid" src="img/instagram/widget-i6.png" alt="" />
                                    </Link>
                                </li>
                            </ul>
                        </aside>

                        <aside className="single_sidebar_widget newsletter_widget">
                            <h4 className="widget_title">Newsletter</h4>

                            <form action="#">
                                <div className="form-group">
                                    <input type="email" className="form-control" placeholder="Enter email"
                                        required="" />
                                </div>
                                <button className="main_btn rounded-0 w-100" type="submit">
                                    Subscribe
                                </button>
                            </form>
                        </aside>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/*<!--================Blog Area =================--> */}


</>
);
}