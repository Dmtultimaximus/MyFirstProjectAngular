const cloudinary = require('cloudinary');

cloudinary.config({
cloud_name: "dcevnfook",
api_key: "844646615174247",
api_secret: "ntZKy-SFiq9ffUpbUA6EtXPWvw8",
});

const removeImage = async (name) => {
const publicId = name.replace(/\.[a-z]{3,}$/, '');
await cloudinary.v2.uploader.destroy(publicId);
};

const uploadImage = async (image) => {
const result = await cloudinary.v2.uploader.upload(image);
return result;
};

const getShortLink = fullAddress => fullAddress.replace(/\/[v0-9]{11}/, '').replace(link, '');
module.exports = { uploadImage, removeImage, getShortLink };