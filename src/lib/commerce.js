import Commerce from '@chec/commerce.js';

// Access the public key from the environment variables
const checPublicKey = process.env.REACT_APP_CHEC_PUBLIC_KEY;

// Check if the public key is correctly set
if (!checPublicKey) {
  throw new Error('Commerce.js public API key not found. Make sure to set REACT_APP_CHEC_PUBLIC_KEY in your .env file.');
}

// Initialize Commerce.js client with the public key
export const commerce = new Commerce(checPublicKey, true);
