import {useQuery} from 'h3';

export default async (req, res) => {
  const uri = (await useQuery(req)).uri;
  return {uri: uri};
}
