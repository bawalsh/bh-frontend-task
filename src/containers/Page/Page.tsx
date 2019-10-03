import React, { ReactNode } from 'react'

import styles from 'containers/Page/Page.module.css'
import Loader from 'components/Loader/Loader'

type Props = {
  title: string
  isLoading: boolean
  children?: ReactNode
}

const Page: React.FC<Props> = ({ title, isLoading, children }) => {
  if (isLoading) return <Loader message={`Loading ${title}`} />

  return (
    <>
      <h1 className={styles.heading}>{title}</h1>
      <br />
      {children}
    </>
  )
}

export default Page
