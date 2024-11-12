import { Settings, ChevronDown, Music, SprayCanIcon as Spray, CakeIcon, UtensilsCrossed, Trash2, Info, Plus } from 'lucide-react'
import { Input } from "@/components/ui/input"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Card } from '../ui/card'

export default function Budget() {
  return (
    <div className="min-h-screen  p-4">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 flex items-baseline justify-between">
          <div className="flex items-baseline gap-2">
            <h1 className="text-2xl font-normal">Budget</h1>
            <span className="text-2xl text-purple-600">$0.00</span>
            <button className="text-sm text-purple-600 hover:underline">set value</button>
          </div>
          <Button variant="ghost" size="icon">
            <Settings className="h-5 w-5 text-purple-600" />
            <span className="sr-only">Settings</span>
          </Button>
        </div>

        <Card className="rounded-lg p-6 shadow-sm">
          <div className="mb-6 relative">
            <Input
              type="text"
              placeholder="Filter"
              className="pl-8"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          <Accordion type="multiple" className="space-y-4">
            <AccordionItem value="entertainment" className="border-none">
              <AccordionTrigger className="hover:no-underline">
                <div className="flex items-center gap-2">
                  <Music className="h-5 w-5" />
                  <span>Entertainment</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="mt-4 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Band</span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm">$0.00</span>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="beauty" className="border-none">
              <AccordionTrigger className="hover:no-underline">
                <div className="flex items-center gap-2">
                  <Spray className="h-5 w-5" />
                  <span>Beauty and Health</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="mt-4 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-sm">Hair and Makeup</span>
                      <Info className="h-4 w-4 text-gray-400" />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm">$0.00</span>
                      <Button variant="ghost" size="icon">
                        <Trash2 className="h-4 w-4 text-gray-400" />
                      </Button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Prewedding Pampering</span>
                    <span className="text-sm">$0.00</span>
                  </div>
                  <Button variant="link" className="text-purple-600 p-0 h-auto">
                    <Plus className="h-4 w-4 mr-2" />
                    Add new item
                  </Button>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="cake" className="border-none">
              <AccordionTrigger className="hover:no-underline">
                <div className="flex items-center gap-2">
                  <CakeIcon className="h-5 w-5" />
                  <span>Cake</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="mt-4 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Cake and Cutting Fee</span>
                    <span className="text-sm">$0.00</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Puffs</span>
                    <span className="text-sm">$0.00</span>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="catering" className="border-none">
              <AccordionTrigger className="hover:no-underline">
                <div className="flex items-center gap-2">
                  <UtensilsCrossed className="h-5 w-5" />
                  <span>Catering</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="mt-4 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Beverage and Bartenders</span>
                    <span className="text-sm">$0.00</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Food and Service</span>
                    <span className="text-sm">$0.00</span>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </Card>
      </div>
    </div>
  )
}