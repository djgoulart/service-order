export enum ORDER_STATUS {
  'NOT_INITIALIZED' = 0,
  'INITIALIZED' = 33,
  'PRODUCTION_FINISHED' = 66,
  'FINISHED' = 100,
}

export interface Product {
  name: string
  quantity: number
}

export interface Order {
  id: string
  customerName: string
  deliveryDate: string
  deliverables: Product[]
  status: ORDER_STATUS
}

export const orders: Order[] = [
  {
    id: 'ORD001',
    customerName: 'Alice Smith',
    deliveryDate: '2024-02-15',
    deliverables: [
      {
        name: 'Custom T-shirts',
        quantity: 100,
      },
      {
        name: 'Custom Jeans',
        quantity: 100,
      },
      {
        name: 'Custom Sneakers',
        quantity: 100,
      },
    ],
    status: 0,
  },
  {
    id: 'ORD002',
    customerName: 'Bob Johnson',
    deliveryDate: '2024-03-01',
    deliverables: [
      {
        name: 'Branded Mugs',
        quantity: 50,
      },
      {
        name: 'Printed Pens',
        quantity: 200,
      },
    ],
    status: 33,
  },
  {
    id: 'ORD003',
    customerName: 'Carol Williams',
    deliveryDate: '2024-03-20',
    deliverables: [
      {
        name: 'Custom Keychains',
        quantity: 150,
      },
    ],
    status: 66,
  },
  {
    id: 'ORD004',
    customerName: 'Carlos Da Costa',
    deliveryDate: '2024-01-20',
    deliverables: [
      {
        name: 'Custom Caps',
        quantity: 223,
      },
    ],
    status: 100,
  },
]
