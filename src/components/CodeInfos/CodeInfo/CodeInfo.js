import Code from "./Code/Code";

import "./CodeInfo.css";

const CodeInfo = ({ name, des, code }) => {
  return (
    <div>
      <div className="code-des">
        <p>
          For more information, see{" "}
          <span>Setting Up a {name} Development Environment</span>.
        </p>
        <p>{des}</p>
      </div>
      <Code>{code}</Code>
    </div>
  );
};

export default CodeInfo;
