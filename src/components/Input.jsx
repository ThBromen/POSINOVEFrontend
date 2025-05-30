const Input = ({ label, ...rest }) => (
  <div className='mb-4'>
    <label className='block mb-1 font-bold'>{label}</label>
    <input className='w-full px-3 py-2 border rounded' {...rest} />
  </div>
);

export default Input;
