import './Code.css';

const Code = (props) => {
    const classes = 'code ' + props.className;

    return <div className={classes}>{props.children ? props.children : "* Some code here *"}</div>
};

export default Code;