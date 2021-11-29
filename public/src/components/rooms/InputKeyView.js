// Title component
const InputKeyView = (props) => {

  // handle when the username / password field is updated
  const handleOnChange = (e) => {
    // update the corresponding state values
    var isKeyAvailable = (e.target.value) ? true : false
    localStorage.setItem("isKeyAvailable",isKeyAvailable);
    localStorage.setItem("sKey", e.target.value)

  }

  return (
    <div className="title">
      <input type="text"
              placeholder="Enter secret Key"
              onChange={handleOnChange}
              name="inputKey" />
    </div>
  );
};


export default InputKeyView;

