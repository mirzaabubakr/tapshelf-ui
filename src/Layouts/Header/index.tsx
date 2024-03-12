import { InputAdornment, TextField } from "@mui/material";
import "./index.css";
import { MdMenu } from "react-icons/md";
import { Search } from "@mui/icons-material";
import { BiBell } from "react-icons/bi";

interface ThemeActions {
  setSideBarView: (value: boolean) => void;
}

function Header({ setSideBarView }: ThemeActions) {
  return (
    <>
      <div className="left-side">
        <MdMenu
          size={32}
          className="menu-button"
          onClick={() => setSideBarView(true)}
        />
        <div className="search-box">
          <TextField
            className="TextField-container"
            placeholder="Search product, supplier, order"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
          />
        </div>
      </div>
      <div className="right-side">
        <div>
          <BiBell size={22} />
        </div>
        <div className="icon-container">
          <img src="./abubakr.jpg" alt="Icon" />
        </div>
      </div>
    </>
  );
}

export default Header;
