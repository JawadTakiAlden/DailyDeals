import React, { ReactNode } from 'react'

const VendorLayout = ({children} : Readonly<{
    children : ReactNode
}>) => {
  return (
    <div>{children}</div>
  )
}

export default VendorLayout