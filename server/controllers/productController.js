const Product = require("../models/Products");
const Category = require("../models/Category");
const pLimit = require("p-limit");
const cloudinary = require("../utils/cloudinary");

exports.getAllProducts = async (req, res) => {
  const productList = await Product.find().populate("category");

  if (!productList) {
    res.status(500), json({ success: false });
  }
  res.send(productList);
};

exports.createProduct = async (req, res) => {
  const category = await Category.findById(req.body.category);
  if (!category) return res.status(400).send("Invalid Category");
  const limit = pLimit(2);

  const imagesToUpload = req.body.images.map((image) => {
    return limit(async () => {
      const result = await cloudinary.uploader.upload(image);
      return result;
    });
  });
  const uploadStatus = await Promise.all(imagesToUpload);
  const imgUrl = uploadStatus.map((item) => {
    return item.secure_url;
  });

  if (!uploadStatus) {
    return res.status(500).json({
      error: "images cannot upload",
      status: false,
    });
  }

  let product = new Product({
    name: req.body.name,
    description: req.body.description,
    images: imgUrl,
    brand: req.body.brand,
    price: req.body.price,
    category: req.body.category,
    countInStock: req.body.countInStock,
    rating: req.body.rating,
    numReviews: req.body.numReviews,
    isFeatured: req.body.isFeatured,
  });

  product = await product.save();

  if (!product) {
    res.status(500).json({
      error: err,
      success: false,
    });
  }

  res.status(201).json(product);
};

exports.getProductById = async (req, res) => {
  const product = await Product.findById(req.params.id).populate("category");

  if (!product) {
    res.status(500).json({
      success: false,
      message: "The product with the given ID not exists",
    });
  }
  res.status(200).send(product);
};

exports.updateProduct = async (req, res) => {
  const limit = pLimit(2);

  const imagesToUpload = req.body.images.map((image) => {
    return limit(async () => {
      const result = await cloudinary.uploader.upload(image);
      return result;
    });
  });
  const uploadStatus = await Promise.all(imagesToUpload);
  const imgUrl = uploadStatus.map((item) => {
    return item.secure_url;
  });

  if (!uploadStatus) {
    return res.status(500).json({
      error: "images cannot upload",
      status: false,
    });
  }

  const product = await Product.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
      description: req.body.description,
      images: imgUrl,
      brand: req.body.brand,
      price: req.body.price,
      category: req.body.category,
      countInStock: req.body.countInStock,
      rating: req.body.rating,
      numReviews: req.body.numReviews,
      isFeatured: req.body.isFeatured,
    },
    {
      new: true,
    }
  );

  if (!product) {
    res
      .status(404)
      .json({ message: "Product cannot be updated", status: false });
  }
  res.status(200).json({ message: "the product is updates", status: true });
};

exports.deleteProduct = async (req, res) => {
  const deleteProduct = await Product.findByIdAndDelete(req.params.id);
  if (!deleteProduct) {
    return res
      .status(404)
      .json({ success: false, message: "Product not found" });
  }
  res.status(200).send({ status: true, message: "the product is delete" });
};
