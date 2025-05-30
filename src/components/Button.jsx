const Button = ({ children, ...rest }) => (
  <button className='px-4 py-2 bg-blue-500 text-white rounded' {...rest}>
    {children}
  </button>
);

export default Button;
