import React, { ChangeEvent, useState } from "react";
import useDebouncedValue from "../../hooks/useDebouncedValue";
import useDebouncedCallback from "../../hooks/useDebouncedCallback";

const HeaderDesktop = () => {
  const [value, setValue] = useState("");

  const dvalue = useDebouncedValue<string>(value, 500);
  const debouncedFetch = useDebouncedCallback<string>(fetchInfo, 500);

  const inputHandle = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    debouncedFetch(e.target.value);
  };

  function fetchInfo(query: string) {
    console.log(query);
  }

  return (
    <div>
      <p>Value real-time: {value}</p>
      <p>Debounced value: {dvalue}</p>
      <input onChange={inputHandle}></input>
    </div>
  );
};

export default HeaderDesktop;
