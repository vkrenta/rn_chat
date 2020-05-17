import { TFBGetRequest } from '../types';

let url = "https://graph.facebook.com";
const version = "v7.0";
const path = "me";

const fbGetRequest = async (args: TFBGetRequest) => {
  args = {...{version: version, path: path}, ...args};
  url = `${url}/${args.version}/${args.path}?fields=${args.fields.toString()}&access_token=${args.accessToken}`;
  
  const response = await fetch(url);
  
  const json = await response.json();
  if(json.error) throw new Error(json.error.message);
  return {
    email: json.email,
    firstName: json.first_name,
    lastName: json.last_name
  };
};

export default fbGetRequest;