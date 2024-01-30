import React from "react";
import type { FC } from "react";
import { useEffect, useState, useRef } from "react";
import { login } from "../../services/index";

interface Props {
  type?: "primary" | "info" | "success";
  children?: JSX.Element;
}

const App: FC<Props> = (props) => {
  const [count, setCount] = useState(() => 1);
  const [user, setUser] = useState<LoginResponse>();
  const updateCount = () => setCount((prev) => prev + 1);
  const divRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    console.log(props.type);
    console.log(divRef.current?.className);
    login({ userName: "ls", passWord: "123" })
      .then(function (res) {
        setUser(res.data);
      })
      .catch(function (err) {
        console.log(err);
      });
  }, [props.type]);
  return (
    <div ref={divRef} onClick={updateCount}>
      {props.children}
      {count}
      {user?.msg}
      {user?.code}
    </div>
  );
};

export default App;
