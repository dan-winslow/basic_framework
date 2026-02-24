# @dan-winslow/framework-core

A React component library with Accordion, Alert, Card, Carousel, Drawer, Dropdown, Modal, Navbar, Tabs, and more.

## Installation

```bash
npm install @dan-winslow/framework-core
# or
pnpm add @dan-winslow/framework-core
# or
yarn add @dan-winslow/framework-core
```

## Setup

Import the styles in your app's entry point:

```tsx
import '@dan-winslow/framework-core/styles'
```

## Usage

### Card

```tsx
import { Card } from '@dan-winslow/framework-core'
;<Card
  cardTitle='Welcome'
  cardDescription='A simple card component'
  cardContent={<p>This is the card content.</p>}
  cardFooter={<button className='btn btn-primary'>Action</button>}
/>
```

### Modal

```tsx
import { Modal } from '@dan-winslow/framework-core'
import { useState } from 'react'

function App() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title='My Modal'
        footer={<button onClick={() => setIsOpen(false)}>Close</button>}
      >
        <p>Modal content goes here.</p>
      </Modal>
    </>
  )
}
```

### Accordion

```tsx
import { Accordion } from '@dan-winslow/framework-core'

const items = [
  { id: '1', title: 'Section 1', content: <p>Content for section 1</p> },
  { id: '2', title: 'Section 2', content: <p>Content for section 2</p> },
  { id: '3', title: 'Section 3', content: <p>Content for section 3</p> }
]

;<Accordion items={items} allowMultiple={false} defaultOpen={['1']} />
```

### Carousel

```tsx
import { Carousel } from '@dan-winslow/framework-core'
;<Carousel slidesPerView={3} gap={16} autoPlay autoPlayInterval={5000}>
  <Carousel.Content>
    <Carousel.Item>Slide 1</Carousel.Item>
    <Carousel.Item>Slide 2</Carousel.Item>
    <Carousel.Item>Slide 3</Carousel.Item>
  </Carousel.Content>
  <Carousel.Previous />
  <Carousel.Next />
  <Carousel.Dots />
</Carousel>
```

### Drawer

```tsx
import { Drawer } from '@dan-winslow/framework-core'
import { useState } from 'react'

function App() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open Drawer</button>
      <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)} position='right'>
        <Drawer.Header>Drawer Title</Drawer.Header>
        <Drawer.Body>Drawer content</Drawer.Body>
        <Drawer.Footer>
          <button onClick={() => setIsOpen(false)}>Close</button>
        </Drawer.Footer>
      </Drawer>
    </>
  )
}
```

### Alert

```tsx
import { Alert } from '@dan-winslow/framework-core';

<Alert variant="success">Operation completed successfully!</Alert>
<Alert variant="error">Something went wrong.</Alert>
<Alert variant="warning">Please review your input.</Alert>
<Alert variant="info">Here's some information.</Alert>
```

### Tabs

```tsx
import { Tabs } from '@dan-winslow/framework-core'
;<Tabs defaultTab='tab1'>
  <Tabs.List>
    <Tabs.Tab value='tab1'>Tab 1</Tabs.Tab>
    <Tabs.Tab value='tab2'>Tab 2</Tabs.Tab>
  </Tabs.List>
  <Tabs.Panel value='tab1'>Content for Tab 1</Tabs.Panel>
  <Tabs.Panel value='tab2'>Content for Tab 2</Tabs.Panel>
</Tabs>
```

## Available Components

| Component     | Description                                 |
| ------------- | ------------------------------------------- |
| `Accordion`   | Collapsible content sections                |
| `Alert`       | Status messages and notifications           |
| `AlertList`   | List of multiple alerts                     |
| `Card`        | Content container with header, body, footer |
| `Carousel`    | Slideshow with navigation                   |
| `Drawer`      | Slide-out panel                             |
| `Dropdown`    | Dropdown menu                               |
| `Icon`        | Icon component                              |
| `Modal`       | Dialog overlay                              |
| `Navbar`      | Navigation bar                              |
| `Tabs`        | Tabbed content                              |
| `ThemeToggle` | Light/dark theme switcher                   |

## Hooks

| Hook          | Description               |
| ------------- | ------------------------- |
| `useCarousel` | Carousel state management |
| `useDrawer`   | Drawer open/close state   |

## Development

```bash
# Install dependencies
pnpm install

# Start dev server
pnpm dev

# Build library
pnpm build:lib
```

## License

MIT
