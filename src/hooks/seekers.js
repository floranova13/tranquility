import { useQuery, useMutation, useQueryClient } from 'react-query';
import { getSeekers } from '../utils/seekers';

const fetchSeekers = async () => {
  const seekers = getSeekers();
  return seekers;
};

export const useSeekers = () => {
  try {
    return useQuery(['seekers'], fetchSeekers);
  } catch (e) {
    console.log('Error in useSeekers hook');
    console.log(e);
  }
};

// export const useUpdateSeekers = () => {
//   const queryClient = useQueryClient();
//   return useMutation(updatePrices, {
//     onSuccess: () => {
//       queryClient.refetchQueries('blightsources', 'blightsource');
//     },
//   });
// };