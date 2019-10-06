import React, { ReactNode } from 'react'

import styles from 'containers/Page/Page.module.css'
import Loader from 'components/Loader/Loader'

type Props = {
  title: string
  isLoading: boolean
  children?: ReactNode
}

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
