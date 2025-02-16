import { lazy, Suspense, useState } from 'react'

import Section from './Section.jsx'
import Modal from './Modal.jsx'
import Auth from './Auth.jsx'

const Button = lazy(() => import('remoteApp/Button'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Modal trigger={<h1>Open Modal from H1</h1>}>
        Hello world
      </Modal>

        {/* <Input placeholder="Input" /> */}
        <Button>Button</Button>

      <Auth />
      <Section />
    </Suspense>
  )
}

export default App
