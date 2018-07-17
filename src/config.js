export const SERVER = 'http://115.68.182.229';

if (process.env.NODE_ENV && process.env.NODE_ENV === 'production')
  console.log = () => {};

export const LOG = (msg, caller = null) => {
  caller !== null
    ? console.log('####### CALLER :', caller, '\n####### MSG :', msg)
    : console.log('####### :', msg);
};
