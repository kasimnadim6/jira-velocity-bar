import CHART_DATA from './components/data';

import './App.css';
import Chart from './components/chart';

function App() {
  return (
    <>
      <p>
        <a href="https://www.devtools.tech/questions/s/how-to-build-an-interactive-jira-velocity-bar-chart-atlassian-browser-coding-round-interview-question---qid---H24LHAOpjxtuol41iGn8?utm_source=social-share">
          How to build an Interactive JIRA Velocity Bar Chart? Atlassian Browser
          Coding Round Interview Question
        </a>
      </p>
      <Chart data={CHART_DATA} />
    </>
  );
}

export default App;
