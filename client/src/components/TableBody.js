// TABLE JS
// ---------------------------------------------------------------------------

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from './Table';

function TableBody() {
    const [usersState, setUsersState] = useState([]);

    useEffect(() => {
        getRandomUsers()
    }, []);

    async function getRandomUsers() {
        const result = await axios.get("https://randomuser.me/api/?results=100&nat=us");
        setUsersState(result.data.results);
    }

    function sortFirstName() {
        console.log("sorting by first name");

        const sortedFirstName = usersState.sort((a, b) => {
            var nameA = a.name.first.toLowerCase();
            var nameB = b.name.first.toLowerCase();

            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
            return 0;
        });

        setUsersState([...sortedFirstName]);
    }

    function sortLastName() {
        console.log("sorting by last name");

        const sortedLastName = usersState.sort((a, b) => {
            var nameA = a.name.last.toLowerCase();
            var nameB = b.name.last.toLowerCase();
            
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
            return 0;
        });
        setUsersState([...sortedLastName]);
    }

    return (
        <div>
            <Table
                list={usersState}
                sortFirstName={sortFirstName}
                sortLastName={sortLastName}
            />
        </div>
    )
}

export default TableBody;