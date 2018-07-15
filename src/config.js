export const SERVER = 'http://115.68.182.229';

const __PRODUCTION = false;

export const LOG = (msg, caller = '') => {
  if (__PRODUCTION) return;
  
  caller !== ''
    ? console.log('####### CALLER :', caller, '\n####### MSG :', msg)
    : console.log('####### :', msg);
};
