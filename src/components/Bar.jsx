import PropTypes from 'prop-types';

const Bar = ({ name, ticketCount, color, height, animatedShow }) => {
  return (
    <>
      <div
        className={['bar', !animatedShow && 'collapse'].join(' ')}
        style={{ backgroundColor: color, '--barHeight': height }}
      >
        <span className="tooltip">{`${name} - ${ticketCount}`}</span>
      </div>
    </>
  );
};

export default Bar;

Bar.propTypes = {
  name: PropTypes.string.isRequired,
  ticketCount: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  animatedShow: PropTypes.bool.isRequired,
};
