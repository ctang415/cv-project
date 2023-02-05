import React from "react";

const Education = (props) => {
    const { handleChange, education, addToEducation, removeFromEducation } = props
    if (education.length === 0) {
        return (
            <div><button onClick={addToEducation}>+</button></div>
        )
    }
    return (
        education.map(education => 
        <div key={education.key} id={education.key} className='information'>
            <div id={education.key}>
                <button className="add" onClick={addToEducation}>+</button><button className="remove" onClick={removeFromEducation}>-</button>
            </div>
            <div className="row">
            <div className="columnone">
                <input type="text" placeholder="School" name="school" onChange={handleChange}></input>
                <input type="text" placeholder="Location" name="place" onChange={handleChange}></input>
            </div>
            <div className="columntwo">
                <input type="text" placeholder="Duration" name="time" onChange={handleChange}></input>
                <input type="text" placeholder="Degree" name="degree" onChange={handleChange}></input>
            </div>
            </div>
            <div>
                <textarea rows="2" placeholder="Achievements" name="achievement" onChange={handleChange}></textarea>
        </div>
        </div>
        )
    )
}

export default Education