import { motion } from "framer-motion";

interface AssistantProps {
    state: 'idle' | 'listening' | 'success' | 'try-again' | 'walking' | 'turning-page';
    position?: 'left' | 'center' | 'right';
}

export function Assistant({ state, position = 'left' }: AssistantProps) {
    // Position relative to viewport width for cross-page movement
    const positionX = position === 'left' ? '10%' : position === 'center' ? '45%' : '75%';

    return (
        <motion.div
            className="relative w-32 h-32 mx-auto"
            animate={{
                x: positionX,
                scale: state === 'turning-page' ? 1.2 : 1
            }}
            transition={{
                x: { duration: 1.5, ease: "easeInOut" },
                scale: { duration: 0.3 }
            }}
        >
            <motion.svg
                viewBox="0 0 200 200"
                className="w-full h-full drop-shadow-xl"
                initial={false}
                animate={state}
            >
                {/* Body */}
                <circle cx="100" cy="180" r="60" fill="#8D6E63" />

                {/* Ears */}
                <circle cx="60" cy="70" r="25" fill="#8D6E63" />
                <circle cx="140" cy="70" r="25" fill="#8D6E63" />
                <circle cx="60" cy="70" r="15" fill="#D7CCC8" />
                <circle cx="140" cy="70" r="15" fill="#D7CCC8" />

                {/* Head */}
                <circle cx="100" cy="100" r="60" fill="#A1887F" />

                {/* Snout */}
                <ellipse cx="100" cy="115" rx="25" ry="20" fill="#D7CCC8" />
                <circle cx="100" cy="110" r="8" fill="#3E2723" />

                {/* Eyes - Animate based on state */}
                <motion.g variants={{
                    idle: { y: 0 },
                    listening: { scaleY: 1.2, y: -2 },
                    success: { scaleY: 0.5, y: 2 },
                    'try-again': { y: 0 },
                    walking: { y: 0 },
                    'turning-page': { y: -5 }
                }}>
                    <circle cx="80" cy="90" r="6" fill="#3E2723" />
                    <circle cx="120" cy="90" r="6" fill="#3E2723" />
                </motion.g>

                {/* Mouth */}
                <motion.path
                    stroke="#3E2723"
                    strokeWidth="3"
                    fill="transparent"
                    strokeLinecap="round"
                    variants={{
                        idle: { d: "M 90 125 Q 100 130 110 125" },
                        listening: { d: "M 90 125 Q 100 135 110 125" },
                        success: { d: "M 85 125 Q 100 140 115 125" },
                        'try-again': { d: "M 90 130 Q 100 125 110 130" },
                        walking: { d: "M 90 125 Q 100 130 110 125" },
                        'turning-page': { d: "M 90 125 Q 100 135 110 125" }
                    }}
                />

                {/* Arms - Animate for page turning */}
                <motion.g variants={{
                    idle: { rotate: 0, y: 0 },
                    listening: { rotate: -10, x: -5 },
                    success: { y: -20, rotate: [0, -10, 10, 0] },
                    'try-again': { y: 5 },
                    walking: {
                        rotate: [0, 10, -10, 0],
                        transition: { repeat: Infinity, duration: 0.6 }
                    },
                    'turning-page': { rotate: -45, y: -30 }
                }}>
                    <circle cx="40" cy="160" r="20" fill="#A1887F" />
                    <circle cx="160" cy="160" r="20" fill="#A1887F" />
                </motion.g>
            </motion.svg>
        </motion.div>
    );
}
