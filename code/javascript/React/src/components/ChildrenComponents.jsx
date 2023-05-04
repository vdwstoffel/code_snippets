import '../styles/ChildrenComponents.css'

/*
Can be used as a wrapper for other components.
*/

function ChildrenComponents (props) {
    const classes = 'ChildrenComponents ' + props.className; // Concatenates classes passed in as props
    return (
        <div className={classes}>{props.children}</div>
    )
}

export default ChildrenComponents;