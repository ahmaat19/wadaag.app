import dynamicAPI from './dynamicAPI'
import { useQuery, useMutation, useQueryClient } from 'react-query'

const url = '/api/auth/permissions'

const queryKey = 'permissions'

export default function usePermissionsHook() {
  const queryClient = useQueryClient()

  const getPermissions = useQuery(
    queryKey,
    async () => await dynamicAPI('get', url, {}),
    { retry: 0 }
  )

  const updatePermission = useMutation(
    async (obj) => await dynamicAPI('put', `${url}/${obj._id}`, obj),
    {
      retry: 0,
      onSuccess: () => queryClient.invalidateQueries([queryKey]),
    }
  )

  const deletePermission = useMutation(
    async (id) => await dynamicAPI('delete', `${url}/${id}`, {}),
    {
      retry: 0,
      onSuccess: () => queryClient.invalidateQueries([queryKey]),
    }
  )

  const postPermission = useMutation(
    async (obj) => await dynamicAPI('post', url, obj),
    {
      retry: 0,
      onSuccess: () => queryClient.invalidateQueries([queryKey]),
    }
  )

  return { getPermissions, updatePermission, deletePermission, postPermission }
}
