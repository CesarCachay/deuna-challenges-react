import spinnerImage from 'assets/spinner.gif';

const Spinner: React.FC = () => {
  return (
    <div>
      <img
        src={spinnerImage}
        alt='Loading ...'
        style={{ width: '200px', margin: 'auto', display: 'block' }}
      />
    </div>
  );
};

export default Spinner;