export const getBannerURL = () => {
  const randomNumber = Math.floor(Math.random() * 4) + 1;
  return `https://3d-project-image.s3.us-east-1.amazonaws.com/Project-3D-Images/banners/banner${randomNumber}_345x660.webp`;
};
