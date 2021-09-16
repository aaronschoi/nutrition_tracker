export default function FoodLogContainer(props){
    return (
        <div className="foodlog-container">
        <div className="foodlog-header-container">
        <h2 className="foodlog-header">What you have eaten today</h2>
        </div>
        <ul className="foodlog-list-container">
            {props.children}
        </ul>
        </div>
    )
}