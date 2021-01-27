import './duties-item.styles.scss'

const DutiesItem = ({ text }) => {
  return (
    <div className="duties-item">
      <span className = "duties-item-icon">&#187;</span>
      <span className="text">{text}</span>
    </div>
  );
};

export default DutiesItem