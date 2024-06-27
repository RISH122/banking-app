import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Control, FieldPath, useForm, UseFormReturn } from "react-hook-form"
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
import { authFormSchema } from '@/lib/utils'

// Define the interface for the form schema
const schema = z.object({
  email: z.string().email()
});

// Define the type for form data
type FormData = z.infer<typeof schema>;
const formSchema = authFormSchema('sign-up')
// Define the interface for the props using a generic
interface CustomInputProps<T extends keyof FormData> {
  control: Control<z.infer<typeof formSchema>>;
  name: FieldPath<z.infer<typeof formSchema>>;
  label: string;
  placeholder: string;
}

const CustomInput = <T extends keyof FormData>({ control, name, label, placeholder }: CustomInputProps<T>) => {

  return (
    
        <FormField
          control={control}
          name={name}
          render={({ field }) => (
            <div className='form-item'>
              <FormLabel className='form-label'>
                {label}
              </FormLabel>
              <div className='flex w-full flex-col'>
                <FormControl>
                  <Input
                    placeholder={placeholder}
                    className='input-class'
                    type= {name==='password'?'password':'text'}
                    {...field}
                  />
                </FormControl>
                <FormMessage className='form-message mt-2' />
              </div>
            </div>
          )}
        />
  );
}

export default CustomInput;
