


export const getAllEvents = async () => {
        try {
            const response = await fetch(`http://localhost:3000/api`)
            const data = await response.json()
            return data;
           
        } catch (error) {
            throw error;
        }
    };
    
    export const getEventsById = async (id) => {
        try {
            const response = await fetch(`http://localhost:3000/api/events/${id}`)
            return response.data;
        } catch (error) {
            throw error;
        }
    };
   