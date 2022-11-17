import React, { useState } from "react";
import DropDown from "./Dropdown";

const Menu: React.FC = (): JSX.Element => {
  const [showDropDown, setShowDropDown] = useState<boolean>(false);
  const [selectColor, setSelectedColor] = useState<string>("Green");
  const cities = () => {
    return ["Red", "Blue", "Green", "Yellow"];
  };

  /**
   * Toggle the drop down menu
   */
  const toggleDropDown = () => {
    setShowDropDown(!showDropDown);
  };

  /**
   * Hide the drop down menu if click occurs
   * outside of the drop-down element.
   *
   * @param event  The mouse event
   */
  const dismissHandler = (event: React.FocusEvent<HTMLButtonElement>): void => {
    if (event.currentTarget === event.target) {
      setShowDropDown(false);
    }
  };

  /**
   * Callback function to consume the
   * city name from the child component
   *
   * @param colorVar  The selected city
   */
  const citySelection = (colorVar: string): void => {
    setSelectedColor(colorVar);
  };

  return (
    <>
      <button
        className={showDropDown ? "active" : undefined}
        style={{width:100}}
        onClick={(): void => toggleDropDown()}
        onBlur={(e: React.FocusEvent<HTMLButtonElement>): void =>
          dismissHandler(e)
        }
      >
        <div>{selectColor} </div>
        {showDropDown && (
          <DropDown
            cities={cities()}
            showDropDown={false}
            toggleDropDown={(): void => toggleDropDown()}
            citySelection={citySelection}
          />
        )}
      </button>
    </>
  );
};

export default Menu;
