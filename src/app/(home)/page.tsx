import Link from "next/link"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { Shell } from "@/components/shell/shell"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { BusinessLine } from "@/components/bussines"

export default async function Page() {
  return (
    <Shell className="max-w-6xl">
      <section className="mx-auto flex w-full max-w-5xl flex-col items-center justify-center gap-4 py-24 text-center md:py-32">
        <Link href='/login' target="_blank" rel="noreferrer">
          <Badge
            aria-hidden="true"
            className="rounded-md px-3.5 py-1.5"
            variant="secondary"
          >
            <Icons.google className="mr-2 size-3.5" aria-hidden="true" />
            Login with google
          </Badge>
          <span className="sr-only">GitHub</span>
        </Link>
        <h1 className="text-balance font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
          Punica Development 
        </h1>
        <p className="max-w-[42rem] text-balance leading-normal text-muted-foreground sm:text-xl sm:leading-8">
        This site is for testing development, checking error logs, email logs, Azure status, and more. Feel free to explore and add anything you need.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button asChild>
            <Link href="/event">
              Event
              <span className="sr-only">Event</span>
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/">
              Email
              <span className="sr-only">Email</span>
            </Link>
          </Button>
        </div>
      </section>
        <BusinessLine />
      <section className="mx-auto flex ">
        <Alert className="w-full mx-auto">
          <Icons.rocket className="h-4 w-4" />
          <AlertTitle>Heads up!</AlertTitle>
          <AlertDescription>
            These are the 2 format  <span className="text-blue-500">JSON </span> & <span className="text-blue-500">ICS</span> when creating events in calendar.<br />
            we will use ICS format to send email to the user and other Third party calendars.
          </AlertDescription>
        </Alert>
      </section>
      {/* <div className="grid grid-cols-1 gap-4 md:grid-cols-2 overflow-auto">

        <pre className="mt-2  rounded-md bg-slate-950 p-4 overflow-auto">
          <span className="text-green-400">Email&apos;s JSON {" "}</span>
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
        <pre className="mt-2  rounded-md bg-slate-950 p-4 overflow-auto">
          <span className="text-green-400">Email&apos;s ICS {" "}</span>
          <code className="text-white">{JSON.stringify(data1.split('\n').map(i => i), null, 2)}</code>
        </pre>
      </div> */}
      {/* <ContentSection
        title="Featured products"
        description="Explore products from around the world"
        href="/products"
        linkText="View all products"
        className="pt-8 md:pt-10 lg:pt-12"
      >
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ContentSection>
      <ContentSection
        title="Featured stores"
        description="Explore stores from around the world"
        href="/stores"
        linkText="View all stores"
        className="py-8 md:py-10 lg:py-12"
      >
        {stores.map((store) => (
          <StoreCard
            key={store.id}
            store={store}
            href={`/products?store_ids=${store.id}`}
          />
        ))}
      </ContentSection> */}
    </Shell>
  )
}