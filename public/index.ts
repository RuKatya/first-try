async function handleGetData() {
    const { data } = await axios.get('/get-data')

    console.log(data)
}