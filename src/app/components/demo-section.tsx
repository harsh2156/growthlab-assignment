"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Image from "next/image"
import Link from "next/link"

const formSchema = z.object({
  businessEmail: z.string().email("Please enter a valid business email"),
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  companyName: z.string().min(2, "Company name is required"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  terms: z.boolean().refine((val) => val === true, {
    message: "You must accept the terms and privacy policy",
  }),
})

export function DemoSection() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      terms: false,
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Handle form submission
    console.log(values)
  }

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          {/* Left side with text and image */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">
              See how your videos can make your business <span className="text-orange-500">more $$$</span>
            </h2>
            <div className="relative w-full max-w-md mx-auto lg:mx-0">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/assignment-faq-next-section-S3MyRrJ8SfPuykq4RIYdMzXqixaLZS.png"
                alt="Business person pointing"
                width={500}
                height={600}
                className="rounded-lg"
                priority
              />
            </div>
          </div>

          {/* Right side with form */}
          <div className="w-full max-w-md mx-auto lg:mx-0">
            <div className="rounded-xl border bg-white p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-6">Take the Full Media+ Tour</h3>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="businessEmail">Business email</Label>
                  <Input
                    id="businessEmail"
                    placeholder="john@smithindustries.com"
                    {...form.register("businessEmail")}
                  />
                  {form.formState.errors.businessEmail && (
                    <p className="text-sm text-red-500">{form.formState.errors.businessEmail.message}</p>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" {...form.register("firstName")} />
                    {form.formState.errors.firstName && (
                      <p className="text-sm text-red-500">{form.formState.errors.firstName.message}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Smith" {...form.register("lastName")} />
                    {form.formState.errors.lastName && (
                      <p className="text-sm text-red-500">{form.formState.errors.lastName.message}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="companyName">Company name</Label>
                  <Input id="companyName" placeholder="Business Company Name" {...form.register("companyName")} />
                  {form.formState.errors.companyName && (
                    <p className="text-sm text-red-500">{form.formState.errors.companyName.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" placeholder="(201) 555-0123" {...form.register("phone")} />
                  {form.formState.errors.phone && (
                    <p className="text-sm text-red-500">{form.formState.errors.phone.message}</p>
                  )}
                </div>

                {/* <div className="flex items-start space-x-2">
                  <Checkbox id="terms" {...form.register("terms")} />
                  <Label htmlFor="terms" className="text-sm leading-none">
                    I agree to Media+&apos;s{" "}
                    <Link href="#" className="text-orange-500 hover:underline">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link href="#" className="text-orange-500 hover:underline">
                      Privacy Policy
                    </Link>{" "}
                    which includes my consent to process my personal data.
                  </Label>
                </div>
                {form.formState.errors.terms && (
                  <p className="text-sm text-red-500">{form.formState.errors.terms.message}</p>
                )} */}

                <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600">
                  Get a free demo
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

