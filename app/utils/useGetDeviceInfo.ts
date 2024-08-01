import UAParser from 'ua-parser-js';

const useGetDeviceInfo = () => {
  const parser = new UAParser();
  return parser.getResult();
};

export default useGetDeviceInfo;
