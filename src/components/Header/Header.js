import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-titles">
        <div className="header-title-sm">React & Node</div>
        <div className="header-title-lg">Blog</div>
      </div>

      <img
        className="header-image"
        src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt="header_image"
      />
    </div>
  );
};

export default Header;
