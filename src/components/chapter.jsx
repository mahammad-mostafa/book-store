import PropTypes from 'prop-types';
import Styles from '../styles/chapter.module.css';

const Chapter = ({ number }) => {
  const progress = Math.min(Math.floor(number / 0.3), 100);
  const chapter = Math.max(Math.floor(number / 3), 1);
  const indicator = `radial-gradient(closest-side, var(--light-color) 84%, transparent 86% 98%), conic-gradient(var(--accent-color) ${progress}%, var(--border-color) 0)`;
  return (
    <div className={Styles.chapters}>
      <div className={Styles.progress}>
        <div className={Styles.indicator} style={{ background: indicator }} />
        <div>
          <div className={Styles.number}>
            {progress}
            %
          </div>
          <div>Completed</div>
        </div>
      </div>
      <div className={Styles.chapter}>
        <div>
          <div>Current Chapter</div>
          <span>
            Chapter
            {' '}
            {chapter}
          </span>
        </div>
        <button className={Styles.button} type="button">Update Progress</button>
      </div>
    </div>
  );
};

Chapter.propTypes = { number: PropTypes.number.isRequired };

export default Chapter;
