// src/components/utils/Notification.jsx
export default function Notification({ message }) {
    return (
        <div className="fixed bottom-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg">
            {message}
        </div>
    );
}