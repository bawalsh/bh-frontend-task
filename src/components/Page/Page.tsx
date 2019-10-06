import React, { ReactNode } from 'react'

import styles from 'components/Page/Page.module.css'
import Loader from 'components/Loader/Loader'

type Props = {
  title: string
  isLoading: boolean
  children?: ReactNode
}

/**
 * The basic outline of a page. Shows a title and a loader.
 * @param title - The page title
 * @param isLoading - Should the loader be displayed?
 * @param children - Children elements
 */
const Page: React.FC<Props> = ({ title, isLoading, children }) => {
  const loader = <Loader message={`Loading ${title}`} />

  return (
    <main className={styles.container}>
      <h1 className={styles.heading}>{title}</h1>
      <br />
      {isLoading ? loader : children}
    </main>
  )
}

export default Page
