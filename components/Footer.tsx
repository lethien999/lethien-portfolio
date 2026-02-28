export default function Footer() {
    return (
        <footer className="border-t border-slate-800 py-8">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
                <p className="text-sm text-gray-500">
                    Built with{' '}
                    <span className="text-gray-400">Next.js</span>
                    {' · '}
                    Deployed on{' '}
                    <span className="text-gray-400">Vercel</span>
                </p>
                <p className="text-xs text-gray-600 mt-2">
                    © {new Date().getFullYear()} Lê Anh Thiện. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
