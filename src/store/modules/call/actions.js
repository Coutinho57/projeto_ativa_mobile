export function callRequest(configurations, destiny) {
  return {
    type: '@sip/CALL_REQUEST',
    payload: {configurations, destiny},
  };
}
