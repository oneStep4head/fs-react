export const fetchMetrics = {
  path: '/api/v001/metrics',
  method: 'GET'
};

export const createMetric = {
  path: '/api/v001/metrics',
  method: 'POST'
};

export const putcheMetric = {
  path: '/api/v001/metrics/:metricId',
  method: 'PATCH'
};

export const addDataToMetric = {
  path: '/api/v001/metrics/:metricId',
  method: 'POST'
};

export const deleteMetric = {
  path: '/api/v001/metrics/:metricId',
  method: 'DELETE'
};
