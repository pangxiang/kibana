/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */




export const DATAFEED_STATE = {
  STARTED: 'started',
  STARTING: 'starting',
  STOPPED: 'stopped',
  STOPPING: 'stopping',
  DELETED: 'deleted'
};

export const FORECAST_REQUEST_STATE = {
  FAILED: 'failed',
  FINISHED: 'finished',
  SCHEDULED: 'scheduled',
  STARTED: 'started'
};

export const JOB_STATE = {
  CLOSED: 'closed',
  CLOSING: 'closing',
  FAILED: 'failed',
  OPENED: 'opened',
  OPENING: 'opening'
};
