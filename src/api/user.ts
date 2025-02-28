import { User } from '@/types/user';

interface UploadResponse {
  message: string;
  filename: string;
  uploadedImageUrl: string | null | ArrayBuffer;
}

export const fetchUser = (): Promise<User> => {
  const userData = {
    id: '1',
    name: 'Eddy Cusuma',
    email: 'eddy@example.com',
    cardNumber: '3778 **** **** 1234',
    validThru: '12/22',
    balance: 5756,
  };
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(userData);
    }, 200);
  });
};

export const mockFileUpload = (file: File): Promise<UploadResponse> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!file) {
        reject('No file uploaded');
      }

      const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
      if (!allowedTypes.includes(file.type)) {
        reject('Invalid file type');
      }

      // Read the file as base64 data URL (simulate upload)
      const reader = new FileReader();
      reader.onloadend = () => {
        const uploadedImageUrl = reader.result; // Base64 string of the image
        resolve({
          message: 'File uploaded successfully',
          filename: file.name,
          uploadedImageUrl,
        });
      };
      reader.onerror = () => {
        reject('Error reading file');
      };

      // Start reading the file
      reader.readAsDataURL(file);
    }, 500); // Simulating an API call delay
  });
};
