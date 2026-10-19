export const getBannerURL = () => {
  const randomNumber = Math.floor(Math.random() * 3) + 1;
  return `https://plublic-postaqui-images.s3.us-east-1.amazonaws.com/images/banners/banner${randomNumber}_345x660.png`;
};
