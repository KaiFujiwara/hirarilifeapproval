'use client';
import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white p-4 relative z-50">
      {/* PC用ナビゲーション */}
      <div className="hidden md:flex justify-center gap-8">
        <Link href="/" className="hover:text-gray-300 transition-colors">HOME</Link>
        <Link href="/members" className="hover:text-gray-300 transition-colors">MEMBERS</Link>
        <Link href="/discography" className="hover:text-gray-300 transition-colors">DISCOGRAPHY</Link>
        <Link href="/goods" className="hover:text-gray-300 transition-colors">GOODS</Link>
      </div>

      {/* SP用ヘッダー */}
      <div className="md:hidden flex justify-between items-center">
        {/* バンド名 */}
        <Link 
          href="/" 
          className="text-xl font-bold tracking-wider"
        >
          ひらり生活の稟議
        </Link>

        {/* ハンバーガーボタン */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="flex flex-col gap-1.5 p-2"
        >
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${
            isOpen ? 'rotate-45 translate-y-2' : ''
          }`}></span>
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${
            isOpen ? 'opacity-0' : ''
          }`}></span>
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${
            isOpen ? '-rotate-45 -translate-y-2' : ''
          }`}></span>
        </button>

        {/* SPメニュー */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed left-0 right-0 top-[60px] bg-black overflow-hidden z-50"
            >
              <motion.div 
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                exit={{ y: -20 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="flex flex-col gap-4 p-4"
              >
                <Link 
                  href="/" 
                  className="hover:text-gray-300 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  HOME
                </Link>
                <Link 
                  href="/members" 
                  className="hover:text-gray-300 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  MEMBERS
                </Link>
                <Link 
                  href="/discography" 
                  className="hover:text-gray-300 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  DISCOGRAPHY
                </Link>
                <Link 
                  href="/goods" 
                  className="hover:text-gray-300 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  GOODS
                </Link>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
