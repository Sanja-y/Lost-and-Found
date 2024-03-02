'use client'

import React from 'react'
// For form creation
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from "react-hook-form"
import { Input } from '../components/ui/input'
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "../components/ui/form"
// For schema creation
import { z } from 'zod'

const formSchema = z.object({
    username: z.string()
        .min(2, { message: "2 chararcters are atleast required" })
        .max(50),
    title: z.string()
        .min(1, { message: "1 chararcter is atleast required" })
        .max(20, { message: "Only 20 chararcters are required" }),
    owner: z.string()
        .min(1, { message: "1 chararcter is atleast required" })
        .max(20, { message: "Only 20 chararcters are required" }),
    place: z.string()
        .min(10, { message: "10 chararcters are atleast required" })
        .max(100, { message: "Only 20 chararcters are required" }),
    category: z.string()
        .min(3, { message: "3 chararcters are atleast required" })
        .max(20, { message: "Only 20 chararcters are required" })

})

// For form creation (again...)


const LostForm: React.FC = () => {

    // form definition
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            title:"",
            owner:"",
            place:"",
            category:"",
        }
    })
    // Submit handler
    const handleSubmit = (values: z.infer<typeof formSchema>) => {
        console.log("Lost value",values);
    }


    return (
        <div className='px-4 py-2'>
            <span className='text-xl font-semibold'>Lost Form</span>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(handleSubmit)}>
                    <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                            <>
                                <FormItem>
                                    <FormLabel>Username</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Username"  />
                                    </FormControl>
                                    <FormDescription>
                                        This is your public display name.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>

                                <FormItem>
                                    <FormLabel>Title</FormLabel>
                                    <FormControl>
                                        <Input placeholder='Name of your lost object' {...field} />
                                    </FormControl>
                                    {/* <FormDescription>
                                        Name of your lost object
                                    </FormDescription> */}
                                    <FormMessage />
                                </FormItem>

                                <FormItem>
                                    <FormLabel>Owner</FormLabel>
                                    <FormControl>
                                        <Input placeholder='Your name'  />
                                    </FormControl>
                                    <FormDescription>
                                        This is your legal name
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>

                                <FormItem>
                                    <FormLabel>Address</FormLabel>
                                    <FormControl>
                                        <Input placeholder='Address' />
                                    </FormControl>
                                    <FormDescription>
                                        This is your current residential address
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>

                                <FormItem>
                                    <FormLabel>Category</FormLabel>
                                    <FormControl>
                                        <Input placeholder='Enter Category' />
                                    </FormControl>
                                    {/* <FormDescription>
                                        This is the category of your lost object
                                    </FormDescription> */}
                                    <FormMessage />
                                </FormItem>

                            </>
                        )} />
                    <button className='bg-black text-white px-4 py-2 my-2 rounded-lg' type="submit" >Submit</button>
                </form>

            </Form>

        </div>
    )
}

export default LostForm