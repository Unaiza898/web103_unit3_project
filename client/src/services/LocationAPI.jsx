export const getAllLocations = async () => {
    try {
        const response = await fetch(`http://localhost:3000/api/location`)
        const data = await response.json()
        return data;
       
    } catch (error) {
        throw error;
    }
};


export const getLocation = async (id) => {
    try {
        const response = await fetch(`http://localhost:3000/api/location/${id}`)
        const data = await response.json()
        return data;
    } catch (error) {
        throw error;
    }
};
