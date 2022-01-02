import PropTypes from "prop-types";
import Header from "../header/Header";

function Layout({ children, page }) {
  return (
    <>
      <Header page={page} />
      <main className={`container ${page}`}>{children}</main>
      <footer className="page-footer">
        <p>Made by Asbj&oslash;rn Kallevik</p>
      </footer>
    </>
  );
}

// Type check
Layout.propTypes = {
  children: PropTypes.node.isRequired,
  pageClass: PropTypes.string,
};
Layout.defaultProps = {
  pageClass: "",
};

export default Layout;