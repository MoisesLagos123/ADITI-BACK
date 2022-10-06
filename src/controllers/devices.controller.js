export const getDevices = (req, res) => {
    res.send('getting project');
};
export const createDevice = (req, res) => {
    console.log(req.body);
    res.send('creating project');
};