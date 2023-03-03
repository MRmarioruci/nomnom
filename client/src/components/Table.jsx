import {useState, useEffect} from 'react';
import CopyCodeToClipBoard from './misc/CopyCodeToClipBoard';
import data from "./misc/TableMockupData.json";

function Table() {
    const loadedData = JSON.stringify(data);
    const json = JSON.parse(loadedData);
    const [mockupData, setMockupData] = useState(json)
    const availableTables = [
        {title: 'Table Normal', 'class': 'table'},
        {title: 'Table Striped', 'class': 'table table__striped'},
        {title: 'Table Primary', 'class': 'table table__primary'},
        {title: 'Table Secondary', 'class': 'table table__secondary'},
        {title: 'Table Inverted', 'class': 'table table__inverted'},
        {title: 'Table Success', 'class': 'table table__success'},
        {title: 'Table Danger', 'class': 'table table__danger'},
        {title: 'Table Warning', 'class': 'table table__warning'},
    ]
    return (
		<div className="page__content flex flex--row">
            <div className="page__content-left">
                { availableTables.map((table, idx) => {
                    return (
                        <div className="card card__bordered card__transparent" key={`table__${idx}`}>
                            <div className={table.class}>
                                <div className="card__title capitalize">{table.title}</div>
                                <CopyCodeToClipBoard title={table.title}>
                                    <table>
                                        <thead>
                                            <th>#</th>
                                            <th>Name</th>
                                            <th>Surname</th>
                                            <th>Email</th>
                                            <th>Phone Number</th>
                                        </thead>
                                        <tbody>
                                            { mockupData.map((user, idx) => {
                                                return(
                                                    <tr key={`user__${idx}`}>
                                                        <td>{idx+1}</td>
                                                        <td>{user.name}</td>
                                                        <td>{user.surname}</td>
                                                        <td>{user.email}</td>
                                                        <td>{user.phone}</td>
                                                    </tr>
                                                )
                                            })}
                                        </tbody>
                                    </table>
                                </CopyCodeToClipBoard>
                            </div>
                        </div>
                    )
                })}
            </div>
			<div className="page__content-right">
			</div>
		</div>
	);
}

export default Table;
