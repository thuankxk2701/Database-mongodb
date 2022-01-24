const notFound = (req, res) => res.status(404).send("Router Does Not Exits");

module.exports = notFound;
