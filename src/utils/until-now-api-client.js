import untilNowApi from 'until-now-client-api';

/* Configuration imported from '.env' file */
untilNowApi.protocol = process.env.REACT_APP_API_PROTOCOL;
untilNowApi.host = process.env.REACT_APP_API_HOST;
untilNowApi.port = process.env.REACT_APP_API_PORT;

export default untilNowApi;
