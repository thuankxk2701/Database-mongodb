const notFound = (res: any, req: any) => res.status(404).send("Route does not exist");

export default notFound;
