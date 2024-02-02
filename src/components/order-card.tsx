import { Clock } from 'lucide-react'

import { Order, ORDER_STATUS } from '@/api/orders'
import { Card, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

import { Badge } from './ui/badge'

export type OrderCardProps = {
  order: Order
}

export function OrderCard(props: OrderCardProps) {
  const {
    order: { customerName, deliveryDate, deliverables, status },
  } = props

  return (
    <Card className="w-[420px] hover:bg-muted">
      <CardHeader className="gap-2">
        <div className="flex flex-row">
          <CardTitle>{customerName}</CardTitle>
          <p className="ml-auto flex flex-row items-center gap-1 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" />
            {deliveryDate}
          </p>
        </div>
        <div className="flex flex-row">
          <p className="text-sm text-muted-foreground">
            {`${deliverables[0].quantity} x ${deliverables[0].name} `}
            {deliverables.length > 1
              ? `e mais ${deliverables.length - 1} produto(s)`
              : ''}
          </p>
        </div>
      </CardHeader>
      {status !== ORDER_STATUS.NOT_INITIALIZED && (
        <CardFooter className="flex flex-row gap-2">
          <Badge variant="destructive">Falta material</Badge>
        </CardFooter>
      )}
    </Card>
  )
}
