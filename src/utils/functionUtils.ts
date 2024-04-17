export const validatePassword = (password?: string): string | null => {
    if (!password) return 'Please enter your password';
    // Check if password length is at least 8 characters
    if (password.length < 8) {
        return 'Password must be at least 8 characters long';
    }

    // Check if password contains at least one uppercase letter
    if (!/[A-Z]/.test(password)) {
        return 'Password must contain at least one uppercase letter';
    }

    // Check if password contains at least one lowercase letter
    if (!/[a-z]/.test(password)) {
        return 'Password must contain at least one lowercase letter';
    }

    // Check if password contains at least one digit
    if (!/\d/.test(password)) {
        return 'Password must contain at least one digit';
    }

    // Check if password contains at least one special character
    if (!/[^a-zA-Z0-9]/.test(password)) {
        return 'Password must contain at least one special character';
    }

    // If all criteria are met, return null (indicating no error)
    return null;
}


export const validateEmail = (email?: string): string | null => {
    if (!email) return 'Please enter a email'
    // Regular expression for validating email addresses
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Check if the email matches the regex pattern
    if (!emailRegex.test(email)) {
        return 'Invalid email address';
    }

    // If the email is valid, return null (indicating no error)
    return null;
}