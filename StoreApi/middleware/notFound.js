const notFound = (req, res) => res.status(404).send("Route dose not exits");

module.exports = notFound;
