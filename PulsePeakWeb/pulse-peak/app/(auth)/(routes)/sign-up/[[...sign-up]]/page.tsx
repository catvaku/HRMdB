"use client";

import React, { useState } from "react";
import { SignUpSchema } from "./constant";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";

const SignUp = () => {
  const [error, setError] = useState({});

  const form = useForm<z.infer<typeof SignUpSchema>>({
    resolver: zodResolver(SignUpSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const handleSubmit = async (values: z.infer<typeof SignUpSchema>) => {
    // e.preventDefault();

    try {
      // SignUpSchema.parse(signUpForm);
      // setError({});
      console.log("Sign-up successful:", values);
    } catch (error) {
      if (error instanceof z.ZodError) {
        type ErrorRecord = Record<string, string>;
        const newErrors = error.issues.reduce<ErrorRecord>((acc, issue) => {
          const path = issue.path[0];
          if (typeof path === "string") {
            acc[path] = issue.message;
          }
          return acc;
        }, {});

        setError(newErrors);
      } else {
        console.log("An unxpected error occurred: ", error);
      }
    }
  };

  return (
    <div className="p-4 m-20 flex items-center h-[1000px] flex-col gap-3">
      <div>
        <p className="text-2xl">Sign Up</p>
      </div>
      <div className="border-[1px] border-gray-100 p-4 rounded-lg lg:w-[700px] md:w-[500px] sm:w-[400px]">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="space-y-6"
          >
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your username" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="Password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Confirm Password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex  gap-1 text-sm ">
              <p>Already have an account?</p>
              <p className="underline text-blue-800">
                <Link href="/sign-in">Sign in now!</Link>
              </p>
            </div>
            <Button
              type="submit"
              variant="default"
              className="bg-red-600 text-white hover:bg-red-400"
            >
              Submit
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default SignUp;
