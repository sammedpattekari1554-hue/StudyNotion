const cloudinary = require("cloudinary").v2

exports.uploadImageToCloudinary = async (
  file,
  folder,
  height,
  quality,
  resource_type = "image"
) => {

  const options = { folder }

  if (height) {
    options.height = height
  }

  if (quality) {
    options.quality = quality
  }

  options.resource_type = resource_type

  console.log("OPTIONS =>", options)

  return await cloudinary.uploader.upload(
    file.tempFilePath,
    options
  )
}