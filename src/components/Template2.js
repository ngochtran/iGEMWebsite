import React from "react";
import PropTypes from 'prop-types';
import Navbar from './Navbar';
import Footer from './Footer';

function Template({ title, children }) {
  return (
    <>
      <Navbar />
      <div className="row body">
        {children}
      </div>
      <Footer />
    </>
  )
}

Template.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Template;