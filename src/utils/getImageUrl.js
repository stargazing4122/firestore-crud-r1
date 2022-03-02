export const getImageUrl = async (file) => {
  const api = 'https://api.cloudinary.com/v1_1/dc1k4vnoy/upload';
  const formData = new FormData();

  formData.append('file', file);
  formData.append('upload_preset', 'firestore-crud-fernando-r1');
  try {
    const resp = await fetch(api, {
      method: 'POST',
      body: formData,
    });
    const { url } = await resp.json();
    return url;
  } catch (err) {
    console.log(err);
  }
};
