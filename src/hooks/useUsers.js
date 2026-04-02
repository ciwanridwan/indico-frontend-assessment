import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com/users';

// Fetch Users
export const useGetUsers = () => {
    return useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const { data } = await axios.get(BASE_URL);
            return data;
        },
    });
};

// Delete User
export const useDeleteUser = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (id) => axios.delete(`${BASE_URL}/${id}`),
        onSuccess: (data, deletedId) => {
            queryClient.setQueryData(['users'], (oldData) => {
                return oldData ? oldData.filter((user) => user.id !== deletedId) : [];
            });
        },
    });
};

// Add User
export const useAddUser = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (newUser) => axios.post(BASE_URL, newUser),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['users'] });
        },
    });
};

