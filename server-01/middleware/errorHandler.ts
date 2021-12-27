const errorHandlerMiddleware = async (err: any, req: any, res: any, next: any) => {
  console.log(err);
  return res.status(500).json({ msg: "Something went wrong,Please try again" });
};

export default errorHandlerMiddleware;
