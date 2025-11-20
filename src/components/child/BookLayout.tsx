interface BookLayoutProps {
    leftContent: React.ReactNode;
    rightContent: React.ReactNode;
}

export function BookLayout({ leftContent, rightContent }: BookLayoutProps) {
    return (
        <div className="min-h-screen bg-wood-pattern flex items-center justify-center p-4 md:p-8 bg-[#f0e6d2]">
            <div className="relative w-full max-w-6xl aspect-[3/2] bg-white rounded-3xl shadow-2xl flex overflow-hidden border-8 border-[#8d6e63]">
                {/* Book Spine */}
                <div className="absolute left-1/2 top-0 bottom-0 w-12 -ml-6 bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200 z-10 shadow-inner" />

                {/* Left Page */}
                <div className="flex-1 bg-[#fdfbf7] p-8 md:p-12 flex flex-col items-center justify-center border-r border-slate-200 relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/5 pointer-events-none" />
                    {leftContent}
                </div>

                {/* Right Page */}
                <div className="flex-1 bg-[#fdfbf7] p-8 md:p-12 flex flex-col items-center justify-center relative">
                    <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black/5 pointer-events-none" />
                    {rightContent}
                </div>
            </div>
        </div>
    );
}
