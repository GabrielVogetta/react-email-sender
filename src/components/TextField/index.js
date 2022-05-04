import './styles.css';

const TextField = ({label, value, name, type, className, readOnly, error, onChange}) => {
    return(
        <div className='textField'>            
            <div className='textField_wrapper'>
                <label className='textField_label' htmlFor={name}>{label}</label>
                {
                    type === 'input' &&
                    <input
                        name={name}
                        id={name}
                        className={`fieldText_success ${error && 'fieldText_error'}`}
                        value={value}
                        readOnly={readOnly}
                        onChange={onChange}
                    />
                }
                {
                    type === 'textarea' &&
                    <textarea
                        name={name}
                        id={name}
                        className={className} 
                        value={value}
                        readOnly={readOnly}
                        onChange={onChange}
                    />
                }
            </div>
            <span className='errorMessage'>{error && error}</span>
        </div>
    );
};

export default TextField;