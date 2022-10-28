import { useState } from "react";
import { useLocation } from "react-router-dom";
import styles from './AddWorkRequest.module.css'
const AddWorkRequest = (props) => {
  const location = useLocation();
  const [form, setForm] = useState({
    category: '',
    details: '',
    resolution: 'Currently Working'
  })

  const handleChange = ({ target }) => {

    setForm({ ...form, [target.name]: target.value })
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.handleAddWorkRequest(location.state._id, form);
  };

  return (
    <>
      <h2>Add a work request</h2>
      <div className={styles.container}>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="category-input">Category</label>
          </div>
          <div>
            <input
              type="text"
              name="category"
              value={form.category}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="details-input">Details</label>
          </div>
          <div id="text-area">
            <textarea
              type="text"
              name="details"
              value={form.details}
              onChange={handleChange}
            ></textarea>
          </div>
          <div>
            <label htmlFor="resolution-input">Resolution</label>
          </div>
          <div>
            <select
              name="resolution"
              value={form.resolution}
              multiple={false}
              onChange={handleChange}
            >
              <option value="Currently Working">Currently Working</option>
              <option value="Completed">Completed</option>
              <option value="Now Started">Now Started</option>
            </select>
          </div>
          <div>
            <button type='submit'>Submit</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddWorkRequest;
