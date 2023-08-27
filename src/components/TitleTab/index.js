import "./style.css";
const TitleTab = () => {
    return (
        <div className="title-tab">
            <div className="title-child title-child-left">
                <h3>Websights</h3>
                <p><span>&#47;</span></p>
                <p>Analytics</p>
            </div>
            <div className="title-child title-child-right">
                <button className="button-style secondary">My searches</button>
                <button className="button-style secondary">Save Search</button>
                <button className="button-style primary">Create workflow</button>
            </div>
        </div>
    )
}

export default TitleTab;