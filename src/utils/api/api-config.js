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

export const fetchUserByName = {
  path: '/api/v001/users/name/:userName',
  method: 'GET'
};

export const fetchCurrentUser = {
  path: '/api/v001/users/current',
  method: 'GET'
};

export const createUser = {
  path: '/api/v001/users',
  method: 'POST'
};
