import "../styles/TextLoader.css";

function TextLoader() {
    return (
        <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="-10 -3.5 65 40">
            <defs>
                <linearGradient id="gradient" gradientTransform="rotate(45)">
                    <stop offset="0%" stopColor="#000" /> {/* Dark gray for the deep shadows */}
                    <stop offset="30%" stopColor="#000" /> {/* Medium gray for mid-tones */}
                    <stop offset="70%" stopColor="#000" /> {/* Medium gray returning */}
                    <stop offset="100%" stopColor="#000" /> {/* Dark gray for the deep shadows at the other end */}
                </linearGradient>
            </defs>
            <path className="text-path" d="m13.44,35.76c.06-.54.13-1.07.19-1.58.06-.51.13-1.02.19-1.54l.29-2.69c.03-.45.06-.86.1-1.25.03-.38.06-.74.1-1.06h-4.18l-1.92,6.91c-.7.1-1.54.2-2.5.31-.96.11-1.86.22-2.69.31-.51.06-1.02.13-1.51.19-.5.06-1,.13-1.51.19l3.79-12.58c.45-1.5.96-3.22,1.54-5.14.58-1.92,1.16-3.89,1.75-5.9.59-2.02,1.15-3.91,1.68-5.69.53-1.78.95-3.27,1.27-4.49,2.18-.16,4.39-.35,6.65-.58,2.26-.22,4.46-.53,6.6-.91-.16,1.79-.31,3.82-.46,6.07s-.27,4.58-.38,6.98c-.11,2.4-.23,4.77-.36,7.1-.06,2.21-.14,4.49-.24,6.84s-.19,4.76-.29,7.22c-.48.06-.96.13-1.44.19-.48.06-.96.13-1.44.19-.8.13-1.68.27-2.64.43s-1.82.3-2.59.43Zm-2.16-12.91c.19,0,.55-.02,1.08-.05.53-.03,1.03-.06,1.51-.1.48-.03.77-.05.86-.05,0-.42.06-1.26.19-2.54.13-1.28.26-2.62.38-4.03.06-.83.14-1.69.22-2.57.08-.88.17-1.78.26-2.71l.29-4.18-.72.05-1.1,4.13-2.98,12.05Z" fill="url(#gradient)" stroke="white" />
            <path className="text-path" d="m22.13,35.9c.48-2.24.94-4.45,1.39-6.62.45-2.18.88-4.32,1.3-6.43.67-3.81,1.33-7.58,1.97-11.3.64-3.73,1.1-7.29,1.39-10.68l2.5.14c.45.03.89.06,1.32.1.43.03.86.06,1.27.1.48.03.96.06,1.44.07.48.02.96.02,1.44.02-.06.26-.17.77-.31,1.54s-.29,1.54-.43,2.33-.25,1.32-.31,1.61l-.86,4.75.29-.05c.93-1.44,2-3.1,3.22-4.99,1.22-1.89,2.35-3.7,3.41-5.42,1.6-.13,3.2-.27,4.8-.43,1.6-.16,3.2-.37,4.8-.62-.74.99-1.47,1.98-2.21,2.98-.74.99-1.46,1.98-2.16,2.98-.74,1.02-1.54,2.14-2.4,3.36-.86,1.22-1.69,2.41-2.47,3.58-.78,1.17-1.43,2.17-1.94,3,.35,1.6.74,3.18,1.15,4.75.42,1.57.86,3.1,1.34,4.61.48,1.5.96,3.02,1.44,4.56.48,1.54.98,3.09,1.49,4.66-.74-.03-1.49-.06-2.26-.07-.77-.02-1.52-.02-2.26-.02-.93,0-1.82,0-2.69.02-.86.02-1.76.04-2.69.07-.13-1.02-.27-2.09-.43-3.19s-.32-2.23-.48-3.38c-.16-1.12-.32-2.23-.48-3.34s-.32-2.17-.48-3.19l-.86,1.01c-.22.93-.46,2.11-.72,3.55-.13.7-.26,1.4-.41,2.09-.14.69-.28,1.35-.41,1.99-.13.77-.27,1.54-.43,2.33-.16.78-.32,1.59-.48,2.42l-7.78,1.15Z" fill="url(#gradient)" stroke="white" />
        </svg>
    );
}

export default TextLoader;