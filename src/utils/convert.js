export const blobToBase64 = (blob) => {
  return new Promise((resolve, reject) => {
    try {
      var reader = new FileReader();
      reader.onloadend = async () => {
        resolve(reader.result);
      };
      reader.readAsDataURL(blob);
    } catch (e) {
      reject(e);
    }
  });
};
