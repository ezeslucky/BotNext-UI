'use client'

import { motion } from 'framer-motion'

export const Chart = () => (
  <div
    className={
      'dark:shadow-none shadow-xl overflow-hidden rounded-lg border dark:border-neutral-800 border-neutral-300 w-[300px]'
    }
  >
    <div className={'absolute p-4 dark:text-neutral-100 text-neutral-900'}>
      <div className={'font-medium'}>This Month:</div>
      <div className={'font-bold text-3xl'}>+112%</div>
    </div>
    <div className={'dark:bg-neutral-950 bg-white dark:bg-grid-neutral-700 bg-grid-neutral-200'}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 653 465">
        <motion.path
          transition={{ delay: 0.3 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          d="M0 460.694c6.6-3.13 19.8-11.272 33-15.654s19.8-2.814 33-6.257 19.8.365 33-10.955 19.8-32.07 33-45.643c13.2-13.572 19.8-16.08 33-22.22s19.8-5.647 33-8.48c13.2-2.832 19.8 5.901 33-5.68 13.2-11.582 19.8-37.759 33-52.226 13.2-14.468 19.8-28.263 33-20.112 13.2 8.15 19.8 59.038 33 60.863 13.2 1.824 19.8-43.269 33-51.741s19.8 24.488 33 9.38c13.2-15.11 19.8-81.825 33-84.923s19.8 54.76 33 69.432 19.8 34.912 33 3.931 19.8-148.752 33-158.837c13.2-10.086 19.8 111.943 33 108.409 13.2-3.535 19.8-97.635 33-126.082s19.8-7.562 33-16.152 26.4-21.438 33-26.798L653 465H0Z"
          className={'dark:fill-green-600 fill-purple-200'}
        />
        <motion.path
          transition={{ duration: 0.4 }}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          d="M0 460.694c6.6-3.13 19.8-11.272 33-15.654s19.8-2.814 33-6.257 19.8.365 33-10.955 19.8-32.07 33-45.643c13.2-13.572 19.8-16.08 33-22.22s19.8-5.647 33-8.48c13.2-2.832 19.8 5.901 33-5.68 13.2-11.582 19.8-37.759 33-52.226 13.2-14.468 19.8-28.263 33-20.112 13.2 8.15 19.8 59.038 33 60.863 13.2 1.824 19.8-43.269 33-51.741s19.8 24.488 33 9.38c13.2-15.11 19.8-81.825 33-84.923s19.8 54.76 33 69.432 19.8 34.912 33 3.931 19.8-148.752 33-158.837c13.2-10.086 19.8 111.943 33 108.409 13.2-3.535 19.8-97.635 33-126.082s19.8-7.562 33-16.152 26.4-21.438 33-26.798"
          fill="none"
          className={'dark:stroke-green-300 stroke-purple-500'}
          strokeWidth="4"
        />
      </svg>
    </div>
  </div>
)
