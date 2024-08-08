import React, { useEffect } from "react";
import { Link } from "react-router-dom";
export default function Sidebar() {
  useEffect(() => {
    const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    
    const contactNowLinks = document.querySelectorAll('.contact-now-link');
    contactNowLinks.forEach(link => {
    link.addEventListener('click', handleScrollToTop);
    });
    return () => {
    contactNowLinks.forEach(link => {
    link.removeEventListener('click', handleScrollToTop);
    });
    
    };
    }, []);
  return (
    <>
 
      <div className="list-group">
     <Link to="/AdminHome" className="list-group-item bg-primary mb-1" aria-current="true">
     <i className="fas fa-home"></i>
     <span className="float-end">Admin Home</span>
     </Link>
     <Link to="/AdminUser" className="list-group-item bg-primary mb-1">
     <i className="fas fa-users"></i>
     <span className="float-end">Admin User</span>
     </Link>
     <Link to="/AdminMaincategory" className="list-group-item bg-primary mb-1">
     <i className="fas fa-list"></i>
     <span className="float-end">Maincategory</span>
     </Link>
     <Link to="/AdminSubcategory" className="list-group-item bg-primary mb-1">
     <i className="fas fa-table"></i>
     <span className="float-end">Subcategory</span>
     </Link>
     <Link to="/AdminBrand" className="list-group-item bg-primary mb-1">
     <i className="fas fa-tag"></i>
     <span className="float-end">Brand Name</span>
     </Link>
     <Link to="/AdminProduct" className="list-group-item bg-primary mb-1">
     <i className="fas fa-parking"></i>
     <span className="float-end">Products  All</span>
     </Link>
     <Link to="/AdminTestimonials" className="list-group-item bg-primary mb-1">
     <i className="fas fa-star"></i>
     <span className="float-end">Testimonials</span>
     </Link>
     <Link to="/AdminNewslettes" className="list-group-item bg-primary mb-1">
     <i className="fas fa-envelope"></i>
     <span className="float-end">Newslettes</span>
     </Link>
     <Link to="/AdminCheckouts" className="list-group-item bg-primary mb-1">
     <i className="fas fa-shopping-bag"></i>
     <span className="float-end">Checkouts</span>
     </Link>
     <Link to="/Contact" className="list-group-item bg-primary mb-1 contact-now-link">
     <i className="fas fa-mobile"></i>
     <span className="float-end">Contact Us</span>
     </Link>
   </div>
   </>
   );
   }
