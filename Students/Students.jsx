import PropTypes from "prop-types";
import Styles from "./Students.module.css";

function Students({ name = "Bhatti Sab", age = 30, IsStudent = false }) {
    return(
        <div className={Styles.Student}>
            <p>Name: {name}</p>
            <p>Age:{age}</p>
            <p>Student:{IsStudent ? "Yes":"No"}</p>
        </div>
    );
}

Students.propTypes={
    name: PropTypes.string,
    age: PropTypes.number,
    IsStudent: PropTypes.bool,
}

export default Students;