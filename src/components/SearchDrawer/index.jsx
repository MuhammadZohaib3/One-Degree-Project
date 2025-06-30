import { Drawer } from "antd";
import { CiSearch } from "react-icons/ci";
import { CloseOutlined } from "@ant-design/icons";
const SearchDrawer = ({ open, onClose }) => {
  return (
    <Drawer
      className="bg-black"
      title={
        <div className="flex justify-between items-center text-white pt-8">
          <span className="text-2xl italic">SEARCH</span>
          <CloseOutlined
            className="text-white cursor-pointer"
            onClick={onClose}
          />
        </div>
      }
      width={520}
      closable={false} // hide default close icon
      onClose={onClose}
      open={open}
    >
      <div className="flex items-center border border-gray-400 rounded overflow-hidden w-full max-w-md">
        <input
          type="text"
          className="w-full px-4 py-2 text-white bg-black outline-none placeholder-gray-400"
          placeholder="Search..."
        />
        <button className="px-4 py-2 text-white bg-gray-800 hover:bg-gray-700 transition">
          <CiSearch className="text-xl" />
        </button>
      </div>
    </Drawer>
  );
};
export default SearchDrawer; 
