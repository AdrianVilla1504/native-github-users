export const fetchUserData = async (username) => {
  try {
    const response = await fetch();
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const fetchUsersList = async (searchText) => {
  try {
    const response = await fetch();
    const data = await response.json();
    return data.items;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
