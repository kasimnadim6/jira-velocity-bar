import PropTypes from 'prop-types';
import Bar from './Bar';
import { useMemo } from 'react';
import { useState } from 'react';

const Chart = ({ data }) => {
  const [animatedShow, setAnimatedShow] = useState(true);
  const [showChart, setShowChart] = useState(true);

  const clickHandler = () => {
    setAnimatedShow((prev) => !prev);
    const timer = showChart ? 1000 : 0;
    setTimeout(() => {
      setShowChart((prev) => !prev);
    }, timer);
  };

  const maxTicketCount = useMemo(() => {
    return data.reduce((acc, cur) => {
      if (cur.ticketCount > acc) {
        acc = cur.ticketCount;
      }
      return acc;
    }, 0);
  }, [data]);

  return (
    <>
      <button className="button" onClick={clickHandler}>
        Toggle Chart
      </button>
      {showChart && (
        <div className="chart">
          <span className="y-axis">No. of Tickets</span>
          <span className="x-axis">Departments</span>
          {data.map((bar) => {
            const height = `${(bar.ticketCount / maxTicketCount) * 100}%`;
            return (
              <Bar
                key={bar.id}
                {...bar}
                height={height}
                animatedShow={animatedShow}
              />
            );
          })}
        </div>
      )}
    </>
  );
};

export default Chart;

Chart.propTypes = {
  data: PropTypes.array.isRequired,
};
