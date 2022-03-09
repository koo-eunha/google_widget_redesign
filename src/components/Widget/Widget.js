import './Widget.css';

const Widget = (props) => {
    const classes = 'widget ' + props.className;

    return <div className={classes}>{props.children}</div>
};

export default Widget;