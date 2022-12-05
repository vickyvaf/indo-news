import Navbar from "../navbar";

const NavbarLayout = (props) => {
  return (
    <>
      <Navbar />
      {props.children}
    </>
  );
};

export default NavbarLayout
