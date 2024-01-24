import {useState} from 'react';

// Constant
const options =['Bengluru', 'Pune', 'Gurgaon', 'Chennai'];

const Dropdown = (props) => {
  const {selectedValue, setSelectedValue} = props;
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="dropdown">
      <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
        {selectedValue}
        <i class="fa fa-caret-down" aria-hidden="true"></i>
      </div>
      {isActive && 
      <div className="dropdown-content">
        {options.map((option) => (
          <div className="dropdown-option"
           onClick={(e) => {setSelectedValue(option); setIsActive(false)}}>
            {option}
           </div>
        ))}
      </div>}
    </div>
  )
}

export default Dropdown;