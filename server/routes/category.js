const  {Category}  = require("../models/category");
const express = require("express");
const router = express.Router();
const pLimit = require("p-limit");
const cloudinary = require("../utils/cloudinary");


router.get("/", async (req, res) => {
  const CategoryList = await Category.find();

  if (!CategoryList) {
    res.status(500).json({ success: false });
  }
  res.send(CategoryList);
});



router.post("/create", async (req, res) => {
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

  let category = new Category({
    name: req.body.name,
    images: imgUrl,
    color: req.body.color,
  });

  if (!category) {
    return res.status(500).json({
      error: "images cannot upload",
      status: false,
    });
  }

  category = await category.save();

  res.status(201).json(category);
});

router.get("/:id", async (req, res) => {
  const category = await Category.findById(req.params.id);

  if (!category) {
    res.status(500).json({
      success: false,
      message: "The category with the given ID not exists",
    });
  }
  res.status(200).send(category);
});
router.delete("/:id", async (req, res) => {
  const deleteUser = await Category.findByIdAndDelete(req.params.id);

  if (!deleteUser) {
    res.status(404).json({
      message: "category not find!",
      success: false,
    });
  }

  res.status(200).json({
    message: "category Delete! ",
    success: true,
  });
});

router.put("/:id", async (req, res) => {
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

  const category = await Category.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
      images: imgUrl,
      color: req.body.color,
    },
    {
      new: true,
    }
  );

  if (!category) return res.status(404).send("Category cannot be created");
  res.send(category);
});

module.exports = router;
