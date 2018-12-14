import { createContext } from 'react';

const MetricContext = createContext({
  metrics: [],
  addMetric: () => {},
  deleteMetric: () => {}
});

export default MetricContext;
