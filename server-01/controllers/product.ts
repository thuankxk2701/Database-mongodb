import Product from "../models/product";

const getAllProductsStatic = async (req: any, res: any) => {
  const products = await Product.find({ price: { $gt: 30 } })
    .sort("price")
    .select("name price");
  res.status(200).json({ products, nbHits: products.length });
};

const getAllProducts = async (req: any, res: any) => {
  const { featured, company, name, sort, fields, numericFilters } = req.query;

  interface queryObjectState {
    featured: boolean;
    company: string;
    name: string;
    field: object;
  }

  const queryObject = {} as queryObjectState;

  if (featured) {
    queryObject.featured = featured === "true" ? true : false;
  }
  if (company) {
    queryObject.company = company;
  }
  if (name) {
    queryObject.name = name;
  }
  if (numericFilters) {
    // const operatorMap1 = {
    //   ">": "$gt",
    //   ">=": "$gte",
    //   "=": "$eq",
    //   "<": "$lt",
    //   "<=": "$lte",
    // };
    const operatorMap = ["$gt", "$gte", "$eq", "$lt", "$lte"];
    const regEx = /\b(<|>|>=|=|<|<=)\b/g;
    let filters = numericFilters.replace(regEx, (match: string) => {
      let placement = 0;
      switch (match) {
        case ">":
          placement = 0;
        case ">=":
          placement = 1;
        case "=":
          placement = 2;
        case "<":
          placement = 3;
        case "<=":
          placement = 4;
      }
      return `-${operatorMap[placement]}-`;
    });
    const options = ["price", "rating"];
    filters = filters.split(",").forEach((item: any) => {
      const [field, operator, value] = item.split("-");
      if (options.includes(field)) {
        queryObject.field = { [operator]: Number(value) };
      }
    });
  }
  let result = Product.find(queryObject);
  if (sort) {
    const sortList = sort.split(",").join(" ");
    result = result.sort(sortList);
  } else {
    result = result.sort("createdAt");
  }
  if (fields) {
    const fieldsList = fields.split(",").join(" ");
    result = result.select(fieldsList);
  }
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  const skip = (page - 1) * limit;
  result = result.skip(skip).limit(limit);
  const products = await result;
  res.status(200).json({ products, nbHits: products.length });
};

export { getAllProducts, getAllProductsStatic };
