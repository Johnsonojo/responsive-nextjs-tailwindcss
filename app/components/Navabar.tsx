import Image from "next/image";
import Logo from "../../public/assets/Logo.svg";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-[20px] py-[16px]">
      <div>
        <Image src={Logo} alt="logo" />
      </div>
    </nav>
  );
};

export default Navbar;
