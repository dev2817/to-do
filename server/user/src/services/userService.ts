export const getAllUsers = async () => {
    try {
      return { data: [], message: 'Got all users successfully!'};
    } catch (error) {
      throw new Error('Error fetching users');
    }
  };