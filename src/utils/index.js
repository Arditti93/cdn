export const getVideoLibary = async () => {
    try {
        const response = await fetch(`${process.env.REACT_APP_REST_API}getVideos`, {
            method: "GET",
            headers: {"Content-Type": "application/json"}
        })
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error)
    }
}