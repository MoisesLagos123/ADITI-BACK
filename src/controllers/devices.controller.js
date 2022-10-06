export const getDevices = (req, res) => {
    res.send('getting Devices');
};
export const createDevice = (req, res) => {
    console.log(req.body);
    res.send('creating Devices');
};