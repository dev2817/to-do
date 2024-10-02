export const getAllTasks = async () => {
    try {
      return { data: [], message: 'Got all tasks successfully!'};
    } catch (error) {
      throw new Error('Error fetching tasks');
    }
  };