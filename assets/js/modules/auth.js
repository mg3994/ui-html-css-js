import { store } from './state.js';
import { Toast } from '../components/Toast.js';

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const roleOptions = document.querySelectorAll('.role-option');

    // Role Selection Logic
    let selectedRole = 'customer';
    if (roleOptions.length > 0) {
        roleOptions.forEach(opt => {
            opt.addEventListener('click', () => {
                roleOptions.forEach(o => o.classList.remove('active'));
                opt.classList.add('active');
                selectedRole = opt.dataset.role;
            });
        });
    }

    // Login Submission
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            // Demo Login Logic
            if (email && password) {
                const user = {
                    email,
                    name: email.split('@')[0],
                    role: 'customer', // Default for demo
                    id: Math.random().toString(36).substr(2, 9)
                };

                store.setState({ user });
                Toast.show('Login successful! Redirecting...', 'success');

                setTimeout(() => {
                    window.location.href = '/';
                }, 1500);
            }
        });
    }

    // Signup Submission
    if (signupForm) {
        signupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const firstName = document.getElementById('first-name').value;
            const lastName = document.getElementById('last-name').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            if (email && password) {
                const user = {
                    email,
                    name: `${firstName} ${lastName}`,
                    role: selectedRole,
                    id: Math.random().toString(36).substr(2, 9)
                };

                store.setState({ user });
                Toast.show(`Welcome to Antinna, ${firstName}!`, 'success');

                setTimeout(() => {
                    // Redirect to dashboard based on role
                    window.location.href = `/pages/dashboard/${selectedRole}.html`;
                }, 2000);
            }
        });
    }
});

export const logout = () => {
    store.setState({ user: null });
    window.location.href = '/pages/auth/login.html';
};
