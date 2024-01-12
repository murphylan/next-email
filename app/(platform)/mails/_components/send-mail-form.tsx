"use client"

import { sendMail } from "@/action/send/sendMail"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"

const sendMailFormSchema = z.object({
  username: z
    .string()
    .min(2, {
      message: "Username must be at least 2 characters.",
    })
    .max(30, {
      message: "Username must not be longer than 30 characters.",
    }),
  email: z
    .string({
      required_error: "Need an email to display.",
    })
    .email(),
})

type SendMailFormValues = z.infer<typeof sendMailFormSchema>

const defaultValues: Partial<SendMailFormValues> = {
  username: "Murphy",
  email: "lanzejun@cn.ibm.com",
}

interface SendMailFormProps {
  template: string;
}

const SendMailForm = ({ template }: SendMailFormProps) => {

  const form = useForm<SendMailFormValues>({
    resolver: zodResolver(sendMailFormSchema),
    defaultValues,
    mode: "onChange",
  })

  async function onSubmit(data: SendMailFormValues) {
    await sendMail(template, data);
    toast("You submitted the following values:", {
      description: <pre className="mt-2 w-[280px] rounded-md bg-slate-950 p-4">
        <code className="text-white">{JSON.stringify(data, null, 2)}</code>
      </pre>,
      action: {
        label: "Undo",
        onClick: () => console.log("Undo"),
      },
    })

  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} className="max-w-2xl" />
              </FormControl>
              <FormDescription>
                This is your public display name. It can be your real name or a
                pseudonym. You can only change this once every 30 days.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <div className="max-w-2xl">
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...field} className="max-w-2xl" />
                </FormControl>
                <FormDescription>
                  You can manage verified email addresses in your{" "}
                  <Link href="/examples/forms">email settings</Link>.
                </FormDescription>
                <FormMessage />
              </FormItem>
            </div>
          )}
        />
        <Button type="submit" disabled={form.formState.isSubmitting}>
          Send mail
        </Button>
      </form>
    </Form>
  )
};

export default SendMailForm;