import CodeInfo from "./CodeInfo/CodeInfo";

import './CodeInfos.css';

const CodeInfos = ({ data }) => {

  return (
    <div className="codeinfo-container">
      {data.map((data) => (
        <CodeInfo key={data.id} id={data.id} name={data.name} des={data.description} code={data.code} />
      ))}
    </div>
  );
};

export default CodeInfos;
