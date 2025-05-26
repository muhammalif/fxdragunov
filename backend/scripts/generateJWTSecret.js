const crypto = require('crypto');

// Function to generate a secure random string
function generateSecureKey(length = 64) {
    // Generate random bytes
    const randomBytes = crypto.randomBytes(length);
    
    // Convert to hex string
    const hexString = randomBytes.toString('hex');
    
    return hexString;
}

// Function to generate a more complex key with special characters
function generateComplexKey(length = 64) {
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';
    let result = '';
    
    // Generate random bytes
    const randomBytes = crypto.randomBytes(length);
    
    // Use the random bytes to select characters from the charset
    for (let i = 0; i < length; i++) {
        const randomIndex = randomBytes[i] % charset.length;
        result += charset[randomIndex];
    }
    
    return result;
}

// Generate both types of keys
const simpleKey = generateSecureKey();
const complexKey = generateComplexKey();

console.log('\n=== JWT Secret Key Generator ===\n');
console.log('Simple Key (64 characters, hex only):');
console.log(simpleKey);
console.log('\nComplex Key (64 characters, with special characters):');
console.log(complexKey);
console.log('\n=== Usage Instructions ===');
console.log('1. Copy one of the generated keys above');
console.log('2. Add it to your .env file:');
console.log('   JWT_SECRET=your_copied_key');
console.log('3. For production, add it to your Vercel environment variables');
console.log('\nNote: Keep these keys secure and never commit them to version control!\n'); 