import React, { useState, useEffect } from "react";
import QualitiesList from "./qualitiesList";
import api from "../api";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import _ from "lodash";
const UserPage = ({ match }, { ...props }) => {
    const history = useHistory();
    const handleSave = () => {
        history.replace("/users");
    };
    const userId = match.params.userId;
    const [user, setUser] = useState();
    useEffect(() => {
        api.users.getById(userId).then((data) => setUser(data));
    }, []);
    const userMasValue = _.values(user);
    if (user) {
        return (
            <>
                <h1>{user.name}</h1>
                <h1>Профессия: {userMasValue[2].name}</h1>
                <QualitiesList qualities={user.qualities} />
                <h1>Встрелился, раз: {user.completedMeetings}</h1>
                <h1>Оценка: {user.rate}</h1>
                <button
                    onClick={() => {
                        handleSave();
                    }}
                >
                    Return to Users
                </button>
            </>
        );
    }

    return "loading...";
};
UserPage.propTypes = {
    match: PropTypes.object.isRequired
};
export default UserPage;
