import DataTable from 'react-data-table-component';
import "./style.css";

const MainPanel = ({columns,data}) => {
    
    return (
        <div className="main-panel">
            <DataTable
                columns={columns}
                data={data}
                selectableRows
            />
        </div>
    )
}

export default MainPanel;