import './content-item.styles.scss';

import DutiesItem from '../duties-item/duties-item.component';

const ContentItem = ({ title, dates, company, duties}) => {
  return (
    <div className="content-item">
      <div className="content-item-descr">
        <span className="title">{title}</span>
        <span className="company">{company}</span>
        <span className="dates">{dates}</span>
      </div>
      <div className="content-item-info">
        {
          duties.map((text, index) => <DutiesItem key = {index} text = {text}/>)
        }
      </div>
    </div>
  );
};

export default ContentItem;