import { Calendar } from 'lucide-react'

import { Order, ORDER_STATUS, orders } from '@/api/orders'
import { OrderCard } from '@/components/order-card'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'

export function Orders() {
  const ordersNotInitialized = orders.filter(
    (order) => order.status === ORDER_STATUS.NOT_INITIALIZED,
  )

  const ordersInitialized = orders.filter(
    (order) => order.status === ORDER_STATUS.INITIALIZED,
  )

  const ordersReadyToDelivery = orders.filter(
    (order) => order.status === ORDER_STATUS.PRODUCTION_FINISHED,
  )

  const ordersFinished = orders.filter(
    (order) => order.status === ORDER_STATUS.FINISHED,
  )

  return (
    <div className="flex flex-row gap-4">
      <div className="flex w-[420px] flex-col gap-4">
        <h1 className="text-3xl font-semibold tracking-tight text-muted-foreground">
          A produzir
        </h1>
        <ScrollArea className="h-[800px]">
          <div className="flex flex-col gap-2">
            {ordersNotInitialized.map((order) => (
              <OrderCard order={order} key={order.id} />
            ))}
          </div>
        </ScrollArea>
      </div>

      <Separator
        orientation="vertical"
        className="h-[800px] bg-muted-foreground/15"
      />

      <div className="flex w-[420px] flex-col gap-4">
        <h1 className="text-3xl font-semibold tracking-tight text-muted-foreground">
          Em produção
        </h1>
        <ScrollArea className="h-[800px]">
          <div className="flex flex-col gap-2">
            {ordersInitialized.map((order) => (
              <OrderCard order={order} key={order.id} />
            ))}
          </div>
        </ScrollArea>
      </div>

      <Separator
        orientation="vertical"
        className="h-[800px] bg-muted-foreground/15"
      />

      <div className="flex w-[434px] flex-col gap-4">
        <h1 className="text-3xl font-semibold tracking-tight text-muted-foreground">
          Produzido
        </h1>
        <ScrollArea className="h-[800px]">
          <div className="flex flex-col gap-2">
            {ordersReadyToDelivery.map((order) => (
              <OrderCard order={order} key={order.id} />
            ))}
          </div>
        </ScrollArea>
      </div>

      <Separator
        orientation="vertical"
        className="h-[800px] bg-muted-foreground/15"
      />

      <div className="flex w-[434px] flex-col gap-4">
        <h1 className="text-3xl font-semibold tracking-tight text-muted-foreground">
          Entregue
        </h1>
        <ScrollArea className="h-[800px]">
          <div className="flex flex-col gap-2">
            {ordersFinished.map((order) => (
              <OrderCard order={order} key={order.id} />
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  )
}
