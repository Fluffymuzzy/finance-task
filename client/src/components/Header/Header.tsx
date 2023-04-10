import logo from "../../assets/logo.png";

const Header: React.FC = () => {
  return (
    <div className="text-white bg-gray-100">
      <div className="container mx-auto py-4 flex items-center justify-between">
        <div className="flex items-center mx-auto">
          <img src={logo} alt="logo" className="w-12 h-12 mr-2" />
          <h1 className="text-2xl text-black font-bold">Finance Task</h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
