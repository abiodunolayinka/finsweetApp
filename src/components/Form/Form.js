import './Form.css';

const FormGroup = ({ height, label, ...props }) => {
  return (
    <div className="form-group">
      <label className="form-label">{label}</label>
      <input {...props}  style={{ height }} className="form-input" />
    </div>
  );
};

export default FormGroup;